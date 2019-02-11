<template>
    <div class="publish-container">
        <div class="publish">
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
        <!--<WxShare />-->
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
    import wx from 'weixin-js-sdk'
    import {wechatShare} from '@/api/common'
    import {WxShare} from '@/components'

    export default {
        name: "publish",
        components: {
            WxShare
        },
        mounted() {
            this.$nextTick(() => {
                this.init();
            })
        },
        computed: {
            ...mapState(['userInfo']),
            ...mapState('home', ['classDetail']),
        },
        methods: {
            ...mapActions(['getWechatShare']),
            init() {
                wechatShare({
                    url: encodeURIComponent(location.href.split('#')[0]),
                    jsApiList: [
                        'checkJsApi',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo',
                        'onMenuShareQZone',
                        'hideMenuItems',
                        'showMenuItems',
                        'hideAllNonBaseMenuItem',
                        'showAllNonBaseMenuItem',
                        'translateVoice',
                        'startRecord',
                        'stopRecord',
                        'onVoiceRecordEnd',
                        'playVoice',
                        'onVoicePlayEnd',
                        'pauseVoice',
                        'stopVoice',
                        'uploadVoice',
                        'downloadVoice',
                        'chooseImage',
                        'previewImage',
                        'uploadImage',
                        'downloadImage',
                        'getNetworkType',
                        'openLocation',
                        'getLocation',
                        'hideOptionMenu',
                        'showOptionMenu',
                        'closeWindow',
                        'scanQRCode',
                        'chooseWXPay',
                        'openProductSpecificView',
                        'addCard',
                        'chooseCard',
                        'openCard',
                        'updateAppMessageShareData',
                        'updateTimelineShareData',
                    ]
                }).then((res) => {
                    let {appId, timestamp, nonceStr, signature, jsApiList} = res;
                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: appId, // 必填，公众号的唯一标识
                        timestamp, // 必填，生成签名的时间戳
                        nonceStr, // 必填，生成签名的随机串
                        signature,// 必填，签名
                        jsApiList // 必填，需要使用的JS接口列表
                    });
                    // wx.ready(function () {
                    //     // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
                    //
                    // });
                    // wx.error(function (res) {
                    //     // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                    //     console.log('error', res)
                    // });
                });
            },
            handleShare() {
                wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
                    wx.updateAppMessageShareData({
                        title: '123', // 分享标题
                        desc: '123', // 分享描述
                        link: location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl: 'https://xuetang-public.oss-cn-beijing.aliyuncs.com/%E8%AF%BE%E7%A8%8B%E5%A4%A7%E5%9B%BE.jpg', // 分享图标
                        success: function () {
                            // 用户点击了分享后执行的回调函数
                            console.log('分享成功')
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                            console.log('取消分享')
                        },
                        fail: function (e) {
                            console.log('错误', e)
                        },
                        complete: function (e) {
                            console.log('complete', e)
                        },
                    })
                });
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
