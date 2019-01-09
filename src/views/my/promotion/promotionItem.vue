<template>
    <ClassPanel class="my-promotion-item">
        <ClassBanner slot="banner" />
        <div class="my-promotion-item-content">
            <div class="info">
                <div class="title ellipsis">法律英语基础版法法律英语基础版法法律英语基础版法</div>
                <div class="reward">
                    邀请奖励：<span>¥3432.00</span>
                </div>
            </div>
            <div class="btns">
                <button class="border-btn-20">继续推广</button>
                <button class="border-btn-20">查看详情</button>
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
            isLearn: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {};
        },
    };
</script>

<style lang="scss" scoped>
    .my-promotion-item {
        display: flex;
        padding: 10px 0;
        @include border-bottom();
        &-banner {
            position: relative;
            overflow: hidden;
            .banner {
                width: 114px;
                height: 100%;
            }
            .icon-wrap {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 14px;
                background-color: rgba(0, 0, 0, .6);
            }
            .class-type-icon {
                @include tb();
                right: 8px;
                width: 8px;
                height: 8px;
                color: #fff;
                font-size: 22px;
            }
        }
        &-content {
            margin-left: 8px;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            flex: 1;
            overflow: hidden;
            .title {
                font-size: $font-size-md;
                color: #4A4A4A;
                font-weight: bold;
            }
            .reward {
                margin-top: 6px;
                color: #666;
                font-weight: 300;
                @include ellipsis();
                span {
                    color: #F09300;
                }
            }
            .btns {
                display: flex;
                button:nth-child(1) {
                    margin-right: 20px;
                }
            }
        }
    }
</style>
