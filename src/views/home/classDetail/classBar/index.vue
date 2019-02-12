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
        <button v-if="!classDetail.is_pay" :class="['blue-btn-48', 'class-bar-btn']" @click="handleBuy">
            ¥{{classDetail.price | formatWechatPrice}}购买课程
        </button>
        <button v-else :class="['blue-btn-48', 'class-bar-btn', 'payed-btn']" @click="handleLearn">
            继续学习
        </button>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
    import wx from 'weixin-js-sdk'
    import {wechatShare} from '@/api/common';

    export default {
        name: "classDetailTableBar",
        computed: {
            ...mapState('home', ['classDetail'])
        },
        created() {
            this.init();
        },
        methods: {
            ...mapActions(['getWechatPayConfig', 'setOrder']),
            ...mapActions('home', ['setClassCollection']),
            init() {
                this.initWxConfig();
                // wechatShare({
                //     url: encodeURIComponent(location.href.split('#')[0]),
                //     jsApiList: [
                //         'chooseWXPay',
                //     ]
                // }).then((res) => {
                //     let {appId, timestamp, nonceStr, signature, jsApiList} = res;
                //     wx.config({
                //         debug: false,
                //         appId: appId,
                //         timestamp,
                //         nonceStr,
                //         signature,
                //         jsApiList
                //     });
                // });
            },
            handleDiscount() {
                this.$router.push({name: 'discount'})
            },
            handleBuy() {
                this.setOrder({
                    product_id: this.classDetail.id,
                    referrer_id: null
                }).then((res) => {
                    this.getWechatPayConfig({
                        id: res.id
                    }).then((res) => {
                        let {timeStamp, nonceStr, signType, paySign} = res;
                        wx.chooseWXPay({
                            timestamp: timeStamp,
                            nonceStr,
                            package: res.package,
                            signType,
                            paySign,
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
            },
            // 继续学习
            handleLearn() {

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
