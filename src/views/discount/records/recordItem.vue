<template>
    <div class="discount-records-list-item">
        <div class="left">
            <img :src="require('@/assets/img/demo_class_banner.png')" alt="header" class="head-img">
            <div class="info">
                <p class="name">西门大官人</p>
                <p class="time">2018.11.15 15:24:55</p>
            </div>
        </div>
        <div class="right">砍掉1.76元</div>
    </div>
</template>

<script>
    export default {
        name: "recordItem"
    }
</script>

<style lang="scss" scoped>
    .discount-records-list-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        font-size: $font-size-sm;
        .left {
            display: flex;
            align-items: center;
            .head-img {
                width: 45px;
                height: 45px;
                border-radius: 50%;
            }
            .info {
                margin-left: 10px;
                .name {
                    @include height(17px);
                    color: #606060;
                }
                .time {
                    margin-top: 3px;
                    @include height(14px);
                    font-size: $font-size-mini;
                    color: $color-gary;
                }
            }
        }
        .right {
            color: #606060;
        }
        &:nth-child(1) {
            margin-top: initial;
        }
    }
</style>
