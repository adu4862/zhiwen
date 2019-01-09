<template>
    <!-- 课程展示图片组件 -->
    <div :class="['m-class-banner', bannerRadius?'m-class-banner-radius':'']">
        <img class="banner" :src="require('@/assets/img/demo_class_banner.png')"
             alt="class-banner">
        <div class="icon-wrap">
            <img v-if="type === 'video'" class="class-type-icon"
                 :src="require('@/assets/img/icon_video.png')" alt="video_icon">
            <img v-if="type === 'voice'" class="class-type-icon"
                 :src="require('@/assets/img/icon_voice.png')" alt="video_icon">
        </div>
    </div>
</template>

<script>
    export default {
        name: "classBanner",
        props: {
            type: {
                type: String,
                default: 'video'
            },
            bannerRadius: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .m-class-banner {
        position: relative;
        overflow: hidden;
        width: 114px;
        height: 80px;
        .banner {
            width: 100%;
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

    .m-class-banner-radius {
        border-radius: 6px;
    }
</style>
