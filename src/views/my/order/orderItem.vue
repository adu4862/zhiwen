<template>
    <ClassPanel class="m-order-item">
        <ClassBanner slot="banner" />
        <div class="m-order-item-content">
            <div class="info">
                <div class="title ellipsis">法律英语基础版法法律英语基础版法法律英语基础版法</div>
                <div class="pay-time">
                    <span class="label">付款时间</span> 2018-12-17 01:54:14
                </div>
                <div class="order-no">
                    <span class="label">订单号</span> 010000000000111111000
                </div>
            </div>
            <div class="order-price">
                <p class="price">价格 ¥299</p>
                <p class="pay">实付 <span>¥229</span></p>
            </div>
        </div>
    </ClassPanel>
</template>

<script>
    import {ClassPanel, ClassBanner} from '@/components'

    export default {
        components: {
            ClassPanel,
            ClassBanner
        },
        props: {
            type: {
                type: String,
                default: 'voice'
            },
        },
        data() {
            return {};
        },
    };
</script>

<style lang="scss" scoped>
    .m-order-item {
        margin-top: 3px;
        padding: 12px 21px;
        background-color: #fff;
        &-content {
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            .title {
                font-size: $font-size-md;
                color: $color-important;
            }
            .pay-time,
            .order-no {
                margin-top: 4px;
                font-size: $font-size-mini;
                color: #666;
            }
            .order-price {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: $font-size-sm;
                color: $color-important;
                .pay {
                    color: $color-lighting;
                    span {
                        font-size: $font-size-md;
                    }
                }
            }
        }
    }
</style>
