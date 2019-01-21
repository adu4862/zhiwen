<template>
    <div class="discount-records">
        <DividerTitle class="discount-records-title">砍价记录</DividerTitle>
        <div class="discount-records-list">
            <div class="discount-records-list-item">
                <div class="left">
                    <img src="" alt="" class="head-img">
                    <div class="info">
                        <p class="name">西门大官人</p>
                        <p class="time">2018.11.15 15:24:55</p>
                    </div>
                </div>
                <div class="right">砍掉1.76元</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {DividerTitle} from '@/components'

    export default {
        name: "index",
        components: {
            DividerTitle
        }
    }
</script>

<style lang="scss" scoped>
    .discount-records {
        &-title {
            font-size: 20px;
            font-weight: 600;
            color: #222222;
        }
        &-list {
            &-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: $font-size-sm;
                .left {
                    display: flex;
                    align-items: center;
                    .head-img {
                        width: 45px;
                        height: 45px;
                        border-radius: 50%;
                    }
                    .name {
                        color: #606060;
                    }
                    .time {
                        color: $color-gary;
                    }
                }
                .right {
                    color: #222222;
                }
            }
        }
    }
</style>
