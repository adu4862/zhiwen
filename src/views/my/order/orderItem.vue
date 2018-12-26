<template>
    <div class="my-order-item" @click="handleClass">
        <img class="my-order-item-banner" src="http://ww1.sinaimg.cn/large/0069osmDly1fxgv7wf2ypj30jk0cun0d.jpg" alt="class-banner">
        <div class="my-order-item-content">
            <div class="title">
                课程标题课程标题课程标题课程标题
            </div>
            <div class="info">
                <p><span class="label">付款时间</span>2018-12-17 01：54：14</p>
                <p><span class="label">订单号</span>00032828934792374</p>
            </div>
            <p class="prices">
                <span>价格 ¥299</span>
                <span>实付 ¥269</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "order-item",
        data() {
            return {}
        },
        methods: {
            handleClass() {

            }
        }
    }
</script>

<style scoped lang="scss">
    .my-order-item {
        display: flex;
        margin-bottom: 15px;
        padding: 20px 15px;
        overflow: hidden;
        background-color: #fff;
        &-banner {
            width: 160px;
            height: 100%;
        }
        &-content {
            margin-left: 5px;
            display: flex;
            flex: 1;
            flex-flow: column;
            justify-content: space-between;
            min-width: 0;
            .title {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: $text-title-size;
            }
            .info {
                color: red;
                font-size: $text-mini-size;
            }
            .prices {
                display: flex;
                justify-content: space-between;
                width: 100%;
                font-size: $text-title-size;
            }
        }
    }
</style>
