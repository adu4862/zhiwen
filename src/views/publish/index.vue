<template>
    <div class="publish-container">
        <div class="publish" v-if="!isShare">
            <div class="publish-card">
                <div class="publish-card-user">
                    <img class="publish-card-user-header" :src="userInfo.headimgurl"
                         alt="header">
                    <div class="publish-card-user-info">
                        <p class="name">{{userInfo.nickname}}</p>
                        <p class="invite">邀请您来学习《{{classDetail.subject}}》的知识</p>
                    </div>
                </div>
                <div class="publish-card-title">
                    <p>
                        {{classDetail.subject}}
                    </p>
                </div>
                <div class="publish-card-banner">
                    <img :src="classDetail.image_uri" alt="banner">
                </div>
                <div class="publish-card-content">
                    推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推
                    广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则
                </div>
            </div>
            <button class="blue-btn-48" @click="handleShare">分享链接</button>
        </div>
        <WxShare v-else />
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
    import {WxShare} from '@/components'
    import {wxShareLink} from '@/common/util'
    import wx from 'weixin-js-sdk'
    import {GetRequest} from '@/common/util'

    export default {
        name: "publish",
        components: {
            WxShare
        },
        data() {
            return {
                isShare: false
            }
        },
        mounted() {
            // 微信分享进来调到对应课程
            console.log(111, window.location.href)
            if (GetRequest().from) {
                this.$router.push({
                    name: 'classDetail',
                    params: {
                        id: GetRequest().productId
                    }
                });
                // location.href = "#/class/17669f33-3b13-4306-8802-64234cb2a971";
                return
            }
            this.$nextTick(() => {
                this.initWxShare();
            })
        },
        computed: {
            ...mapState(['userInfo']),
            ...mapState('home', ['classDetail']),
        },
        methods: {
            ...mapActions(['getWechatShare']),
            // 初始化微信分享
            initWxShare() {
                this.initWxConfig();
                wx.ready(() => {
                    let {subject, introduction, image_uri} = this.classDetail;
                    // 分享给朋友
                    wx.updateAppMessageShareData({
                        title: subject,         // 分享标题
                        desc: introduction,     // 分享描述
                        link: wxShareLink(),
                        imgUrl: image_uri,      // 分享图标
                        success: function () {
                            // 用户点击了分享后执行的回调函数
                            console.log('分享成功')
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                            console.log('取消分享')
                        }
                    });
                    // 分享到朋友圈
                    wx.updateTimelineShareData({
                        title: subject,
                        link: wxShareLink(),
                        imgUrl: image_uri,
                        success: function () {
                            // 用户点击了分享后执行的回调函数
                            console.log('分享成功')
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                            console.log('取消分享')
                        }
                    });
                });
            },
            // 引导分享
            handleShare() {
                this.isShare = true;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .publish-container {
        background: linear-gradient(57deg, rgba(132, 177, 255, 1) 0%, rgba(213, 219, 245, 1) 100%);
        .publish {
            padding-bottom: 84px;
            height: 100vh;
            background: url("~@/assets/img/publish_bg.png") no-repeat center;
            background-size: 100% 100%;
            overflow-y: scroll;
            &-card {
                @include ftb();
                flex-flow: column;
                margin: 0 auto;
                margin-top: 23px;
                padding: 25px 30px;
                padding-bottom: 80px;
                width: 362px;
                min-height: 539px;
                font-size: $font-size-sm;
                color: $color-gary;
                background: url("~@/assets/img/publish_card_bg.png") no-repeat center;
                background-size: 100% 100%;
                &-user {
                    @include ftb();
                    width: 100%;
                    &-header {
                        width: 43px;
                        height: 43px;
                        border-radius: 50%;
                    }
                    &-info {
                        margin-left: 8px;
                        .name {
                            @include height(17px);
                        }
                        .invite {
                            margin-top: 3px;
                            @include height(14px);
                        }
                    }
                }
                &-title {
                    margin-top: 28px;
                    width: 274px;
                    min-height: 38px;
                    line-height: 19px;
                    background: url("~@/assets/img/publish_title_bg.png") no-repeat center;
                    background-size: contain;
                    p {
                        @include fct();
                        margin: 0 auto;
                        width: 220px;
                        min-height: 38px;
                        font-size: $font-size-md;
                        color: $color-important;
                        text-align: center;
                    }
                }
                &-banner {
                    margin-top: 44px;
                    /*width: 291px;*/
                    height: 151px;
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 4px;
                    }
                }
                &-content {
                    margin-top: 30px;
                    line-height: 17px;
                }
            }
            button {
                position: fixed;
                bottom: 14px;
                left: 0;
                right: 0;
                margin: 0 auto;
                width: 316px;
            }
        }
    }
</style>
