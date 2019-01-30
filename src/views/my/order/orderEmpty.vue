<template>
    <div class="my-order-empty">
        <img class="my-order-empty-img" :src="require('@/assets/img/my/order/order-empty.png')" alt="order-empty">
        <span class="my-order-empty-tips">暂无订单记录</span>
        <button class="blue-btn-48" @click="toHome">去商城逛逛</button>
    </div>
</template>

<script>
    import commonMixin from '@/common/mixin'

    export default {
        name: "orderEmpty",
        mixins: [commonMixin],
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
            font-size: $font-size-base;
            font-weight: 300;
            color: $color-gary;
        }
    }
</style>
