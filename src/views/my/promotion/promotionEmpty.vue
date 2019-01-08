<template>
    <div class="my-order-empty">
        <img class="my-order-empty-img" :src="require('../../../assets/img/my/promotion/promotion_empty.png')" alt="promotion_empty">
        <p class="my-order-empty-tips">
            您还没有推广订单哦<br/>
            赶快去发起推广吧～
        </p>
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
        padding: 70px 0;
        height: 100%;
        &-img {
            width: 166px;
        }
        &-tips {
            margin-top: 50px;
            font-size: $text-small-size;
            color: #909090;
        }
    }
</style>
