<template>
    <ClassPanel class="m-order-item" @click.native="handleClassDetail(orderDetail.items[0].product.id)">
        <ClassBanner slot="banner" :uri="orderDetail.items[0].product.image_uri" :type="orderDetail.items[0].product.type" />
        <div class="m-order-item-content">
            <div class="info">
                <div class="title ellipsis">{{orderDetail.items[0].product.subject}}</div>
                <div class="pay-time">
                    <span class="label">付款时间</span> {{orderDetail.items[0].created_date | formatTime | timeFilter}}
                </div>
                <div class="order-no">
                    <span class="label">订单号</span> {{orderDetail.items[0].id}}
                </div>
            </div>
            <div class="order-price">
                <p class="price">价格 ¥{{orderDetail.items[0].product.old_price | formatWechatPrice}}</p>
                <p class="pay">实付 <span>¥{{orderDetail.items[0].product.price | formatWechatPrice}}</span></p>
            </div>
        </div>
    </ClassPanel>
</template>

<script>
    import {ClassPanel, ClassBanner} from '@/components'

    export default {
        name: "orderItem",
        components: {
            ClassPanel,
            ClassBanner
        },
        props: {
            orderDetail: {
                type: Object,
                default: {}
            },
            type: {
                type: String,
                default: 'voice'
            },
        },
        data() {
            return {};
        },
        filters: {
            formatTime(val) {
                return new Date(val).getTime()
            }
        },
        methods: {
            handleClassDetail(id) {
                this.$router.push({
                    name: 'classDetail',
                    params: {id}
                })
            }
        }
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
            }
            .order-price {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: $font-size-sm;
                color: $color-gary;
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
