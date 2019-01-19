<template>
    <div class="my-balance-records-empty">
        <p class="my-balance-records-empty-title">微信提现记录</p>
        <img class="my-balance-records-empty-img" :src="require('@/assets/img/my/balance/withdraw_empty.png')" alt="records-empty">
        <p class="my-balance-records-empty-tips">暂无提现记录</p>
    </div>
</template>

<script>
    export default {
        name: "recordEmpty"
    }
</script>

<style scoped lang="scss">
    .my-balance-records-empty {
        display: flex;
        flex-flow: column;
        align-items: center;
        &-title {
            padding: 16px;
            width: 100%;
            font-size: $font-size-md;
            color: #828282;
            background-color: #fff;
        }
        &-img {
            margin-top: 80px;
            width: 186px;
        }
        &-tips {
            margin-top: 40px;
            font-size: $font-size-sm;
            color: $color-gary;
        }
    }
</style>
