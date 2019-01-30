<template>
    <div class="publish-container">
        <div class="publish">
            <div class="publish-card">
                <div class="publish-card-user">
                    <img class="publish-card-user-header" :src="require('@/assets/img/demo_class_banner.png')" alt="header">
                    <div class="publish-card-user-info">
                        <p class="name">用户名称</p>
                        <p class="invite">邀请您来学习XXXX的知识</p>
                    </div>
                </div>
                <div class="publish-card-title">
                    <p>
                        课程名称课程名称课程名称课程名
                    </p>
                </div>
                <div class="publish-card-banner">
                    <img :src="require('@/assets/img/demo_banner.png')" alt="banner">
                </div>
                <div class="publish-card-content">
                    推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推
                    广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则
                </div>
            </div>
            <button class="blue-btn-48" @click="handleShare">分享链接</button>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

    export default {
        name: "publish",
        mounted() {
console.log(location.href.split('#')[0])
        },
        methods: {
            ...mapActions(['getWechatShare']),
            handleShare() {
                this.getWechatShare({
                    url: encodeURIComponent('http://learning.zhiwen.me/publish'),
                    // url: location.href.split('#')[0],
                    jsApiList: [
                        "updateTimelineShareData"
                    ]
                }).then((res) => {
                    let { appId, timestamp, nonceStr, signature, jsApiList } = res;
                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: appId, // 必填，公众号的唯一标识
                        timestamp, // 必填，生成签名的时间戳
                        nonceStr, // 必填，生成签名的随机串
                        signature,// 必填，签名
                        jsApiList: [
                            "updateAppMessageShareData"
                        ] // 必填，需要使用的JS接口列表
                    });

                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .publish-container {
        background: linear-gradient(57deg,rgba(132,177,255,1) 0%,rgba(213,219,245,1) 100%);
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
                        margin: 0 auto;
                        width: 220px;
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
