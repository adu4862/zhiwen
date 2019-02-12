<template>
    <div class="discount-bargain">
        <div class="panel-shadow">
            <ClassPanel class="discount-bargain-class">
                <ClassBanner slot="banner" :uri="classDetail.image_uri" :type="classDetail.type"/>
                <div class="discount-bargain-class-content">
                    <div class="top">
                        <div class="class-title ellipsis">
                            {{classDetail.subject}}
                        </div>
                        <div class="class-content">
                            {{classDetail.introduction}}
                        </div>
                    </div>
                    <div class="class-info">
                        <p class="saled left">已有<span>{{classDetail.pay_count}}</span>人购买</p>
                        <p class="prices right">
                            <span class="old-price">¥{{classDetail.old_price | formatWechatPrice}}</span>
                            <span class="now-price">现价¥{{classDetail.price | formatWechatPrice}}</span>
                        </p>
                    </div>
                </div>
            </ClassPanel>
        </div>
        <DividerTitle class="discount-bargain-time">
            <!--<span class="count-down">24:00:00</span>后失效-->
            <span class="count-down">
                <CountDown :time="countDownTime">
                  <template slot-scope="props">{{ props.hours }}:{{ props.minutes }}:{{ props.seconds }}</template>
                </CountDown>
            </span>后失效
        </DividerTitle>
        <div class="discount-bargain-progress">
            <div class="discount-bargain-progress-now">
                <div class="discount-status" :style="{left: discountStatusLeft + 'px'}" ref="discountStatus">
                    目前价格 <span class="price">¥{{nowPrice | formatWechatPrice}}</span>(已砍<span class="earn">{{bargainDetail.price}}</span>元)
                </div>
                <div class="triangle" :style="{left: 'calc(' + schedule + ' - 5px)'}"></div>
            </div>
            <div class="discount-bargain-progress-bg">
                <div class="discount-bargain-progress-schedule" :style="{width: schedule}" ref="schedule"></div>
            </div>
            <div class="discount-bargain-progress-lowest">
                <div class="triangle"></div>
                <div class="content">
                    <p>底价<span>¥{{classDetail.lowest_price | formatWechatPrice}}</span></p>
                </div>
            </div>
        </div>
        <div class="discount-bargain-btns">
            <button class="blue-btn-48" @click="handleBargain">请好友帮砍价</button>
            <button class="white-btn-48" @click="handleOrderNow">价格满意立即下单</button>
        </div>
        <div class="discount-bargain-rules">
            <p class="discount-bargain-rules-title">
                砍价玩法
            </p>
            <p class="discount-bargain-rules-content">
                1. 分享本页面 2.好友帮砍 3.价格满意或达到底价 4.下单
            </p>
        </div>
        <!-- 砍价结果 -->
        <Dialog :isVisible="isVisible" :isMaskClose="true" @on-close="handleCloseDialog">
            <div class="discount-bargain-dialog">
                <i class="discount-bargain-dialog-close" @click.stop="handleCloseDialog"></i>
                <img class="discount-bargain-dialog-header"
                     :src="require('@/assets/img/demo_class_banner.png')" alt="header"/>
                <p class="discount-bargain-dialog-title">
                    谢谢你帮我砍了3.99元
                </p>
                <template v-if="isBargain">
                    <button class="discount-bargain-dialog-btn-top blue-btn-48">我也要砍价</button>
                    <button class="discount-bargain-dialog-btn-bottom white-btn-48">去商城逛逛</button>
                </template>
                <template v-else>
                    <button class="discount-bargain-dialog-btn-top blue-btn-48" @click="handleBargainFriend">帮好友砍价</button>
                </template>
            </div>
        </Dialog>
        <!-- 满意下单 -->
        <Modal
            :isVisible="isOrderVisible"
            title="购买"
            cancel="马上下单"
            confirm="继续砍价"
            @on-cancel="handleCloseModal"
            @on-confirm="handleConfirmModal"
        >
            <div class="discount-bargain-modal">
                低价为¥{{classDetail.lowest_price | formatWechatPrice}}，请问是否以¥{{nowPrice | formatWechatPrice}}购买该课程？
            </div>
        </Modal>
    </div>
</template>

<script>
    import {ClassPanel, ClassBanner, DividerTitle, Dialog, Modal, CountDown} from '@/components'
    import NP from 'number-precision'
    import wx from 'weixin-js-sdk'
    import {wechatShare} from '@/api/common';
    import {sessionSetItem, sessionGetItem, GetRequest} from '@/common/util'
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

    export default {
        name: "discountBargain",
        components: {
            ClassPanel,
            ClassBanner,
            DividerTitle,
            Dialog,
            Modal,
            CountDown,
        },
        data() {
            return {
                discountStatusLeft: 0,
                discountStatusWidth: 0,
                scheduleWidth: 0,
                isVisible: false,
                isOrderVisible: false,
                bargainDetail: {},
                nowPrice: 0,
                schedule: '0%',
                countDownTime: 0,
                bargainRes: {}
            }
        },
        computed: {
            ...mapState('home', ['classDetail']),
            // 判断是否为分享砍价
            isBargain() {
                let bargain_id = GetRequest().bargain_id;
                if (bargain_id) return true;
                return false;
            }
        },
        async mounted() {
            // 创建砍价
            await this.createBargain({
                product_id: this.classDetail.id
            }).then((res) => {
                this.bargainDetail = res;
                this.nowPrice = NP.minus(this.classDetail.price, this.bargainDetail.price);
                this.schedule = NP.divide(this.bargainDetail.price, this.classDetail.price);
                this.countDownTime = new Date(res.deadline).getTime() - new Date().getTime();
            });

            // 获取单个砍价的金额
            this.getBargainMoney({
                id: this.bargainDetail.id
            });

            this.$nextTick(() => {
                // 砍价偏移
                this.calcOffset();
            });
        },
        methods: {
            ...mapActions('home', ['createBargain', 'getBargainMoney', 'helpBargain']),
            // 微信支付
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
                                this.$toast({
                                    type: 'success',
                                    msg: '购买成功'
                                });
                                this.isOrderVisible = false;
                            },
                        });
                    })
                })
            },
            // 砍价偏移量
            calcOffset() {
                this.scheduleWidth = this.$refs.schedule.offsetWidth;
                this.discountStatusWidth = this.$refs.discountStatus.offsetWidth;
                let gap = NP.minus(this.scheduleWidth, this.discountStatusWidth);
                if (gap > 0) {
                    this.discountStatusLeft = NP.plus(gap, 5);
                }
            },
            handleBargain() {
                this.isVisible = true;
            },
            handleCloseDialog() {
                this.isVisible = false;
            },
            handleOrderNow() {
                this.isOrderVisible = true;
            },
            handleCloseModal() {
                console.log('马上下单')
                this.handleBuy();
                // this.isOrderVisible = false;
            },
            handleConfirmModal() {
                console.log('继续砍价')
            },
            // 帮好友砍价
            handleBargainFriend() {
                this.helpBargain({
                    bargain_id: GetRequest().bargain_id
                }).then((res) => {
                    this.bargainRes = res;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .discount-bargain {
        .panel-shadow {
            margin: -20px -16px 0 -16px;
            padding: 20px 16px 25px 16px;
            box-shadow: 0 0 29px 0 rgba(73, 124, 183, 0.49);
        }
        .triangle {
            position: absolute;
            bottom: -8px;
            right: -5px;
            width: 9px;
            height: 5px;
            border-bottom: 5px solid #9486FA;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 0 solid transparent;
        }
        &-class {
            &-content {
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                font-size: $font-size-mini;
                .class-title {
                    @include height(22px);
                    font-size: $font-size-md;
                    color: $color-important;
                }
                .class-content {
                    margin-top: 4px;
                    line-height: 14px;
                    @include ellipsis();
                    color: #666666;
                }
                .class-info {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-top: 9px;
                    .saled span {
                        color: $color-link;
                    }
                    .now-price {
                        margin-left: 4px;
                        font-size: $font-size-md;
                        font-weight: 600;
                        color: $color-link;
                    }
                }
            }
        }
        &-time {
            margin-top: 21px;
            font-size: $font-size-sm;
            color: #FFBA4C;
            .count-down {
                font-size: 19px;
            }
        }
        &-progress {
            position: relative;
            margin-top: 51px;
            &-bg {
                position: relative;
                height: 12px;
                background: #F3EFD9;
                border-radius: 9px;
                overflow: hidden;
            }
            &-schedule {
                position: absolute;
                height: 100%;
                background: linear-gradient(180deg, rgba(255, 218, 79, 1) 0%, rgba(227, 147, 47, 1) 100%);
                border-radius: 9px;
            }
            &-now {
                .triangle {
                    top: -8px;
                    left: 0;
                    transform: rotate(180deg);
                }
                .discount-status {
                    position: absolute;
                    top: -32px;
                    left: 0;
                    display: flex;
                    padding: 4px 7px;
                    @include height(14px);
                    border-radius: 2px;
                    font-size: 8px;
                    color: #fff;
                    background-color: #8C8EFB;
                    white-space: nowrap;
                    box-sizing: content-box;
                    .price {
                        font-size: $font-size-mini;
                        color: #FFC94E;
                    }
                    .earn {
                        color: #FFC824;
                    }
                }
            }
            &-lowest {
                margin-top: 4px;
                .content {
                    position: absolute;
                    bottom: -32px;
                    right: -5px;
                    padding: 4px 7px;
                    font-size: 8px;
                    color: #fff;
                    background-color: #8C8EFB;
                    border-radius: 2px;
                    p {
                        @include height(14px);
                        span {
                            font-size: $font-size-mini;
                            color: #FECB76;
                        }
                    }
                }
            }
        }
        &-btns {
            margin-top: 50px;
            button {
                width: 316px;
                &:nth-child(2) {
                    margin-top: 25px;
                }
            }
        }
        &-rules {
            margin-top: 20px;
            &-title {
                @include height(17px);
                font-size: $font-size-sm;
                font-weight: 500;
                color: #222222;
            }
            &-content {
                margin-top: 2px;
                font-size: $font-size-mini;
            }
        }
        &-dialog {
            position: relative;
            display: flex;
            flex-flow: column;
            align-items: center;
            padding: 35px 45px;
            background: #fff;
            border-radius: 20px;
            &-close {
                position: absolute;
                top: 18px;
                right: 18px;
                display: inline-block;
                width: 15px;
                height: 15px;
                background: url("~@/assets/img/icon_close.png") no-repeat center;
                background-size: contain;
            }
            &-header {
                @include lr();
                top: -29.5px;
                width: 59px;
                height: 59px;
                border-radius: 50%;
                border: 2px solid $color-link;
            }
            &-title {
                margin-top: 35px;
                @include height(28px);
                font-size: 20px;
                color: #4A4A4A;
            }
            > button {
                margin-top: 20px;
                width: 180px;
                height: 36px;
                line-height: 33px;
            }
            &-btn-top {

            }
            &-btn-bottom {

            }
        }
    }
</style>
