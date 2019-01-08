<template>
    <div class="m-order-item">
        <div class="m-order-item-banner">
            <img class="banner" :src="require('@/assets/img/demo_class_banner.png')"
                 alt="class-banner">
            <div class="icon-wrap">
                <img v-if="type === 'video'" class="class-type-icon"
                     :src="require('@/assets/img/icon_video.png')" alt="video_icon">
                <img v-if="type === 'voice'" class="class-type-icon"
                     :src="require('@/assets/img/icon_voice.png')" alt="video_icon">
            </div>
        </div>
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
    </div>
</template>

<script>
    export default {
        components: {},
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
        display: flex;
        background-color: #fff;
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
                font-size: $text-medium-size;
                color: #4A4A4A;
            }
            .pay-time,
            .order-no {
                margin-top: 4px;
                font-size: $text-mini-size;
                color: #666;
            }
            .order-price {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: $text-small-size;
                color: #4A4A4A;
                .pay {
                    color: #F09300;
                    span {
                        font-size: $text-medium-size;
                    }
                }
            }
        }
    }
</style>
