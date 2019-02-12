<template>
    <div class="discount">
        <!-- 砍价 -->
        <Bargain/>
        <!-- 记录 -->
        <Records/>
    </div>
</template>

<script>
    import {wxShareLink} from '@/common/util'
    import Bargain from './bargain'
    import Records from "./records"
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
    import wx from 'weixin-js-sdk'

    export default {
        name: "discount",
        components: {
            Bargain,
            Records,
        },
        computed: {
            ...mapState('home', ['classDetail'])
        },
        mounted() {
            this.$nextTick(() => {
                this.initWxShare();
            })
        },
        methods: {
            // 初始化微信分享
            initWxShare() {
                this.initWxConfig();
                wx.ready(() => {
                    let {subject, introduction, image_uri} = this.classDetail;
                    let shareUrl = window.location.href.split('#')[0] + 'public/redirect.html?app3Redirect=' + encodeURIComponent(window.location.href);
                    // 分享给朋友
                    wx.updateAppMessageShareData({
                        title: '快来帮我砍价！！！',         // 分享标题
                        desc: introduction,               // 分享描述
                        link: shareUrl,
                        imgUrl: image_uri,                // 分享图标
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
                        title: '快来帮我砍价！！！',
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    .discount {
        display: flex;
        flex-flow: column;
        align-items: center;
        padding-bottom: 12px;
        min-height: 100vh;
        background: url("~@/assets/img/discount/discount_bg.png") no-repeat center;
        background-size: cover;
        overflow-y: scroll;
        > div {
            margin-top: 12px;
            padding: 20px 16px;
            width: 350px;
            background: #fff;
            box-shadow: 0 2px 6px 2px rgba(88, 136, 234, 1);
            border-radius: 10px;
        }
    }
</style>
