<template>
    <div class="my-balance-withdraw-success">
        <img class="my-balance-withdraw-success-icon" :src="require('@/assets/img/my/balance/icon_withdraw_success.png')" alt="icon_withdraw_success">
        <p class="my-balance-withdraw-success-tips">提交成功</p>
        <button class="blue-btn-48 my-balance-withdraw-success-btn">查看记录</button>
    </div>
</template>

<script>
    export default {
        name: "withdrawSuccess"
    }
</script>

<style scoped lang="scss">
    .my-balance-withdraw-success {
        display: flex;
        flex-flow: column;
        align-items: center;
        height: 100vh;
        background-color: #fff;
        &-icon {
            margin-top: 64px;
            width: 64px;
        }
        &-tips {
            margin-top: 30px;
            font-size: 24px;
            color: #F09300;
        }
        &-btn {
            margin-top: 80px;
        }
    }
</style>
