<template>
    <ClassPanel :class="['my-collection-item', isSelect?'my-collection-item-select':'']"
                @handleClick="chooseClass(collectionDetail.id)">
        <div class="my-collection-item-check" slot="select" v-if="isSelect">
            <van-checkbox class="check-box" v-model="checked"></van-checkbox>
        </div>
        <ClassBanner slot="banner" :uri="collectionDetail.product.image_uri"/>
        <div class="my-collection-item-content">
            <div class="info">
                <div class="title ellipsis">{{collectionDetail.product.subject}}</div>
                <div class="content">{{collectionDetail.product.introduction}}</div>
                <div class="buy-num">
                    <span>{{collectionDetail.pay_count}}</span>人已购买
                </div>
            </div>
            <div class="sale-price">
                <div class="saled" v-if="collectionDetail.is_pay">
                    <img :src="require('@/assets/img/my/collection/icon_buy.png')" alt="icon_buy">
                    <span>已购买</span>
                </div>
                <div class="prices" v-else>
                    <span class="new-price">¥{{collectionDetail.product.price | formatWechatPrice}}</span>
                    <span class="old-price">¥{{collectionDetail.product.old_price | formatWechatPrice}}</span>
                </div>
            </div>
        </div>
    </ClassPanel>
</template>

<script>
    import {ClassPanel, ClassBanner} from '@/components'

    export default {
        name: "collectionItem",
        components: {
            ClassPanel,
            ClassBanner
        },
        props: {
            collectionDetail: {
                type: Object,
                default: {}
            },
            isSelect: {
                type: Boolean,
                default: false
            },
            selectAll: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                checked: false
            };
        },
        watch: {
            selectAll(val) {
                this.checked = val;
                this.chooseClass(this.collectionDetail.id, 'all')
            }
        },
        methods: {
            chooseClass(id, type = '') {
                if (this.isSelect) {
                    if (type = '') {
                        this.checked = !this.checked;
                    }
                    if (this.checked) {
                        this.$emit('addDelete', id)
                    } else {
                        this.$emit('removeDelete', id)
                    }
                } else {
                    this.$router.push({name: 'classDetail', params: {id}})
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .my-collection-item {
        margin-bottom: 6px;
        padding: 15px 21px;
        background: #fff;
        &-check {
            margin: 0 6px;
            .check-box {
                transform: scale(.8);
            }
        }
        &-content {
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            .title {
                font-size: $font-size-md;
                color: $color-important;
            }
            .content {
                margin-top: 8px;
                font-size: $font-size-mini;
                @include ellipsis($line: 1);
            }
            .buy-num {
                margin-top: 4px;
                font-size: $font-size-mini;
                color: #666666;
                span {
                    color: $color-lighting;
                }
            }
            .sale-price {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .saled {
                    @include ftb();
                    font-size: $font-size-sm;
                    color: $color-important;
                    img {
                        margin-right: 5px;
                        width: 18px;
                    }
                }
                .prices {
                    display: flex;
                    align-items: flex-end;
                    .new-price {
                        margin-right: 8px;
                        font-size: $font-size-md;
                        color: $color-lighting;
                    }
                    .old-price {
                        text-decoration: line-through;
                        font-size: $font-size-mini;
                        color: $color-gary;
                    }
                }
            }
        }
    }

    .my-collection-item-select {
        padding-left: initial;
    }
</style>
