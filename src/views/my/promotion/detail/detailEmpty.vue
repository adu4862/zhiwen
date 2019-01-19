<template>
    <div class="my-promotion-detail-empty">
        <img :src="require('@/assets/img/my/promotion/promotion_detail_empty.png')" alt="promotion_detail_empty">
        <span>您还没有推广订单哦<br/>赶快去发起推广吧～</span>
    </div>
</template>

<script>
    export default {
        name: "detailEmpty"
    }
</script>

<style scoped lang="scss">
    .my-promotion-detail-empty {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        img {
            margin-top: 40px;
            margin-bottom: 36px;
            width: 151px;
        }
        span {
            margin-bottom: 30px;
            font-size: $font-size-sm;
            color: $color-gary;
        }
    }
</style>
