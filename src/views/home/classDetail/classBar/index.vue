<template>
    <div class="class-bar">
        <div class="class-bar-features" v-if="!classDetail.is_pay">
            <div class="class-bar-features-item" @click="addCollect">
                <i class="icon icon--4"></i>
                收藏
            </div>
            <div class="class-bar-features-item" @click="handleDiscount">
                <i class="icon icon--1"></i>
                砍价
            </div>
        </div>
        <button
            :class="['blue-btn-48', 'class-bar-btn', classDetail.is_pay?'payed-btn':'']"
            @click="handleBuy">
            ¥{{classDetail.price | formatWechatPrice}}购买课程
        </button>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
    import wx from 'weixin-js-sdk'
    import {wechatShare} from '@/api/common';

    export default {
        name: "classDetailTableBar",
        watch: {
            // '$route' (to, from) {
            //     this.directRightUrl()
            // }
        },
        computed: {
            ...mapState('home', ['classDetail'])
        },
        mounted() {
            this.$nextTick(() => {
                this.init();
            })
        },
        methods: {
            ...mapActions(['getWechatPayConfig', 'setOrder']),
            ...mapActions('home', ['setClassCollection']),
            directRightUrl() {
                let { href, protocol, host, pathname, search, hash } = window.location
                search = search || '?'
                let newHref = `${protocol}//${host}${pathname}${search}${hash}`
                if (newHref !== href) {
                    window.location.replace(newHref)
                }
            },
            init() {
                wechatShare({
                    url: encodeURIComponent(location.href.split('#')[0]),
                    jsApiList: [
                        'chooseWXPay',
                    ]
                }).then((res) => {
                    let {appId, timestamp, nonceStr, signature, jsApiList} = res;
                    wx.config({
                        debug: false,
                        appId: appId,
                        timestamp,
                        nonceStr,
                        signature,
                        jsApiList
                    });
                });
            },
            handleDiscount() {
                this.$router.push({name: 'discount'})
            },
            handleBuy() {
                this.setOrder({
                    product_id: this.classDetail.id,
                    referrer_id: null
                }).then((res) => {
                    console.log(res)
                    this.getWechatPayConfig({
                        id: res.id
                    }).then((res) => {
                        let {timeStamp, nonceStr, signType, paySign} = res;
                        wx.chooseWXPay({
                            timestamp: timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                            nonceStr, // 支付签名随机串，不长于 32 位
                            package: res.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                            signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                            paySign, // 支付签名
                            success: function (res) {
                                // 支付成功后的回调函数
                                this.$toast({
                                    type: 'success',
                                    msg: '购买成功'
                                })
                            },
                        });
                    })
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .class-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        @include fct();
        height: 70px;
        background-color: #fff;
        &-features {
            @include fct();
            flex: 1;
            &-item {
                @include fct();
                padding: 0 20px;
                flex-flow: column;
                font-size: $font-size-mini;
                color: #606060;
                .icon {
                    margin-bottom: 4px;
                    font-size: 24px;
                    color: $color-link;
                }
                &:nth-child(1) {
                    border-right: 1px solid rgba(101, 135, 248, 0.36);
                }
            }
        }
        &-btn {
            margin: 0 18px 0 10px;
            width: 200px;
        }
        .payed-btn {
            width: 316px;
        }
    }
</style>
