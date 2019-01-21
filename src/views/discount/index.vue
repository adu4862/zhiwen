<template>
    <div class="discount">
        <div class="discount-wrap">
            <div class="panel-shadow">
                <ClassPanel class="discount-wrap-class">
                    <ClassBanner slot="banner"/>
                    <div class="discount-wrap-class-content">
                        <div class="top">
                            <div class="class-title ellipsis">
                                法律英语进阶版-模块法律英语进阶版-模块法律英语进阶版-模块
                            </div>
                            <div class="class-content">
                                熟悉法律条文,具有法律思维,能够把各种生熟悉法律条文,具有法律思维,能够把各种生熟悉法律条文,具有法律思维,能够把各种生
                            </div>
                        </div>
                        <div class="class-info">
                            <p class="saled left">已有<span>155</span>人购买</p>
                            <p class="prices right">
                                <span class="old-price">¥599</span>
                                <span class="now-price">现价¥299</span>
                            </p>
                        </div>
                    </div>
                </ClassPanel>
            </div>

            <DividerTitle class="discount-wrap-time">
                <span class="count-down">24:00:00</span>后失效
            </DividerTitle>
            <div class="discount-wrap-btns">
                <button class="blue-btn-48">请好友帮砍价</button>
                <button class="white-btn-48">价格满意立即下单</button>
            </div>
            <div class="discount-wrap-rules">
                <p class="discount-wrap-rules-title">
                    砍价玩法
                </p>
                <p class="discount-wrap-rules-content">
                    1. 分享本页面 2.好友帮砍 3.价格满意或达到底价 4.下单
                </p>
            </div>
        </div>
        <div class="discount-records">

        </div>
    </div>
</template>

<script>
    import {ClassPanel, ClassBanner, DividerTitle} from '@/components'

    export default {
        name: "index",
        components: {
            ClassPanel,
            ClassBanner,
            DividerTitle,
        }
    }
</script>

<style lang="scss" scoped>
    .discount {
        display: flex;
        flex-flow: column;
        align-items: center;
        min-height: 100vh;
        background: url("~@/assets/img/discount/discount_bg.png") no-repeat center;
        background-size: cover;
        > div {
            margin-top: 12px;
            width: 350px;
            background: #fff;
            box-shadow: 0 2px 6px 2px rgba(88, 136, 234, 1);
            border-radius: 10px;
        }
        &-wrap {
            padding: 20px 16px;
            .panel-shadow {
                margin: -20px -16px 0 -16px;
                padding: 20px 16px 25px 16px;
                box-shadow: 0 0 29px 0 rgba(73, 124, 183, 0.49);
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
            &-btns {
                margin-top: 12px;
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
        }
    }
</style>
