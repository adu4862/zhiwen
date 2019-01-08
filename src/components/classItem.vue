<template>
    <div class="m-class-item">
        <div class="m-class-item-banner">
            <img class="banner" :src="require('@/assets/img/demo_class_banner.png')"
                 alt="class-banner">
            <div class="icon-wrap">
                <img v-if="type === 'video'" class="class-type-icon"
                     :src="require('@/assets/img/icon_video.png')" alt="video_icon">
                <img v-if="type === 'voice'" class="class-type-icon"
                     :src="require('@/assets/img/icon_voice.png')" alt="video_icon">
            </div>
        </div>
        <div class="m-class-item-content">
            <div class="title ellipsis">法律英语基础版法法律英语基础版法法律英语基础版法</div>
            <div class="content">熟悉法律条文，具有法律思维，能够把各种生活关系转换为法律关系，以至于在法律层面能担负起真正的法律责任</div>
            <div class="saled">
                <p class="saled-num"><span>155</span>人开通</p>
                <div class="saled-price">
                    <p class="new-price">¥299</p>
                    <p class="old-price">¥599</p>
                </div>
            </div>
            <!--<div class="process">学习进度0%</div>-->
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {
            type: {
                type: String,
                default: 'voice'
            }
        },
        data() {
            return {};
        },
    };
</script>

<style lang="scss" scoped>
    .m-class-item {
        display: flex;
        &-banner {
            position: relative;
            border-radius: 6px;
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
                font-size: $text-btn-size;
                color: #4A4A4A;
            }
            .content {
                font-size: $text-mini-size;
                color: #666666;
                @include ellipsis();
            }
            .saled {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                width: 100%;
                &-num {
                    font-size: $text-mini-size;
                    color: #666666;
                    span {
                        color: #F09300;
                    }
                }
                &-price {
                    display: flex;
                    align-items: flex-end;
                    .old-price {
                        margin-left: 8px;
                        font-size: $text-mini-size;
                        text-decoration: line-through;
                        color: #909090;
                    }
                    .new-price {
                        font-size: $text-btn-size;
                        color: #F09300;
                    }
                }
            }
            .process {
                font-size: $text-mini-size;
                color: #ff6632;
            }
        }
    }
</style>
