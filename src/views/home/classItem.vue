<template>
    <div class="home-class-item">
        <ClassPanel class="home-class-item-panel">
            <ClassBanner slot="banner" :uri="classDetail.image_uri" :type="classDetail.type" />
            <div class="home-class-item-panel-content">
                <div class="info">
                    <div class="title ellipsis">{{classDetail.subject}}</div>
                    <div class="content">{{classDetail.introduction}}</div>
                </div>
                <div class="saled" v-if="!isLearn">
                    <p class="saled-num"><span>{{classDetail.pay_count}}</span>人开通</p>
                    <div class="saled-price">
                        <p class="new-price">¥{{classDetail.price | formatWechatPrice}}</p>
                        <p class="old-price">¥{{classDetail.old_price | formatWechatPrice}}</p>
                    </div>
                </div>
                <div class="process" v-if="isLearn">学习进度0%</div>
            </div>
        </ClassPanel>
    </div>
</template>

<script>
    import {ClassPanel, ClassBanner} from '@/components'

    export default {
        name: "homeClassItem",
        components: {
            ClassPanel,
            ClassBanner,
        },
        props: {
            classDetail: {
                type: Object,
                default: {}
            },
            type: {
                type: String,
                default: 'voice'
            },
            isLearn: {
                type: Boolean,
                default: false
            }
        },
    }
</script>

<style scoped lang="scss">
    .home-class-item {
        padding: 10px 0;
        @include border-bottom();
        &-panel {
            box-shadow: 0 2px 6px 2px rgba(219, 228, 242, 1);
            border-radius: 4px;
            overflow: hidden;
            &-content{
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                flex: 1;
                padding: 5px 5px 5px 2px;
                .title {
                    @include height(22px);
                    font-size: $font-size-md;
                    color: $color-important;
                }
                .content {
                    margin-top: 4px;
                    font-size: $font-size-mini;
                    @include ellipsis();
                }
                .saled {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-top: 1px;
                    width: 100%;
                    &-num {
                        font-size: $font-size-mini;
                        color: #666;
                        span {
                            color: $color-lighting;
                        }
                    }
                    &-price {
                        display: flex;
                        align-items: flex-end;
                        .old-price {
                            margin-left: 8px;
                            font-size: $font-size-mini;
                            text-decoration: line-through;
                            color: $color-gary;
                        }
                        .new-price {
                            font-size: $font-size-md;
                            color: $color-lighting;
                        }
                    }
                }
                .process {
                    font-size: $font-size-sm;
                    color: #ff6632;
                }
            }
        }
    }
</style>
