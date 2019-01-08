<template>
    <div class="my-order-empty">
        <img class="my-order-empty-img" :src="require('@/assets/img/my/order/order-empty.png')" alt="order-empty">
        <span class="my-order-empty-tips">暂无订单记录</span>
        <button class="blue-btn-48">去商城逛逛</button>
    </div>
</template>

<script>
    export default {
        name: "collection-empty"
    }
</script>

<style scoped lang="scss">
    .my-order-empty {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        &-img {
            width: 189px;
        }
        &-tips {
            margin: 42px 0;
            font-size: $text-common-size;
            font-weight: 300;
            color: #909090;
        }
    }
</style>
