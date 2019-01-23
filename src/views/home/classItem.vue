<template>
    <div class="home-class-item">
        <ClassPanel class="home-class-item-panel">
            <ClassBanner slot="banner" />
            <div class="home-class-item-panel-content">
                <div class="info">
                    <div class="title ellipsis">法律英语基础版法法律英语基础版法法律英语基础版法</div>
                    <div class="content">熟悉法律条文，具有法律思维，能够把各种生活关系转换为法律关系，以至于在法律层面能担负起真正的法律责任</div>
                </div>
                <div class="saled" v-if="!isLearn">
                    <p class="saled-num"><span>155</span>人开通</p>
                    <div class="saled-price">
                        <p class="new-price">¥299</p>
                        <p class="old-price">¥599</p>
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
