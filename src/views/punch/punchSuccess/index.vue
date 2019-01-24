<template>
    <div class="punch-success">
        <img class="punch-success-icon" :src="require('@/assets/img/icon_success.png')" alt="icon_success">
        <p class="punch-success-title">打卡成功</p>
        <p class="punch-success-offer">连续打卡XX天，您将获得XXX优惠</p>
        <img :src="require('@/assets/img/punch/demo_qr.png')" alt="qr_code" class="punch-success-qr">
        <p class="punch-success-tips">长按识别二维码，加客服微信（如果不加……）</p>
        <div class="punch-success-btns">
            <button class="white-btn-48">完成</button>
            <button class="blue-btn-48">继续学习</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "punchSuccess"
    }
</script>

<style lang="scss" scoped>
    .punch-success {
        @include ftb();
        flex-flow: column;
        height: 100vh;
        color: $color-gary;
        background-color: #fff;
        text-align: center;
        &-icon {
            margin-top: 47px;
            width: 64px;
            height: 64px;
        }
        &-title {
            margin-top: 12px;
            @include height(33px);
            font-size: 24px;
            color: $color-important;
        }
        &-offer {
            margin-top: 19px;
            @include height(20px);
        }
        &-qr {
            margin-top: 11px;
            width: 175px;
            height: 175px;
        }
        &-tips {
            margin-top: 24px;
            width: 234px;
            line-height: 20px;
        }
        &-btns {
            @include ftb();
            margin-top: 76px;
            button {
                width: 160px;
            }
            button:nth-child(2) {
                margin-left: 20px;
            }
        }
    }
</style>
