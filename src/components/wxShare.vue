<template>
    <div class="m-wx-share">
        <img class="m-wx-share-arrow" :src="require('@/assets/img/share/share_arrow.png')" alt="share_arrow">
        <div class="m-wx-share-content">
            <p>点击右上角按钮，</p>
            <p>选择“<span>发送给朋友</span>”，或“<span>分享到朋友圈</span>”</p>
        </div>
        <div class="m-wx-share-imgs">
            <div class="m-wx-share-imgs-item">
                <img :src="require('@/assets/img/share/share_friend.png')" alt="share_friend">
                发送给朋友
            </div>
            <div class="m-wx-share-imgs-item">
                <img :src="require('@/assets/img/share/share_box.png')" alt="share_box">
                分享到朋友圈
            </div>
        </div>
        <img :src="require('@/assets/img/share/share_bg.png')" alt="share_bg" class="m-wx-share-bg">
    </div>
</template>

<script>
    export default {
        name: "wxShare"
    }
</script>

<style lang="scss" scoped>
    .m-wx-share {
        display: flex;
        flex-flow: column;
        position: relative;
        height: 100vh;
        background-color: #fff;
        &-arrow {
            position: absolute;
            top: 1px;
            right: 11px;
            width: 44px;
            height: 72px;
        }
        &-content {
            margin-top: 59px;
            margin-right: 50px;
            font-size: $font-size-md;
            line-height: 22px;
            font-weight: 500;
            text-align: right;
            span {
                color: $color-lighting;
            }
        }
        &-imgs {
            @include fct();
            margin: 0 auto;
            margin-top: 30px;
            width: 223px;
            height: 93px;
            background-color: #EFEFEF;
            &-item {
                @include ftb();
                flex-flow: column;
                font-size: $font-size-sm;
                line-height: 14px;
                font-weight: 500;
                img {
                    margin-bottom: 6px;
                    width: 51px;
                    height: 52px;
                }
                &:nth-child(2) {
                    margin-left: 22px;
                }
            }
        }
        &-bg {
            margin: 0 auto;
            margin-top: 44px;
            width: 308px;
            height: 205px;
        }
    }
</style>
