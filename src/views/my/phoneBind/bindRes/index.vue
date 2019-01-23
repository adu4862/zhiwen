<template>
    <div class="bind-phone-res">
        <img class="bind-phone-res-icon" :src="require('@/assets/img/icon_success.png')" alt="icon_success">
        <p class="bind-phone-res-tips">已验证</p>
        <div class="bind-phone-res-content">
            <!--<p>如你的手机号已不使用，请及时更换</p>-->
            <!--<p>手机号 13888888888</p>-->
            <p>如你的手机号已不使用，请及时更换</p>
            <p>手机号 13888888888</p>
        </div>
        <!--<button class="blue-btn-48">更换手机号</button>-->
        <button class="blue-btn-48">完成</button>
    </div>
</template>

<script>
    export default {
        name: "phoneBindRes"
    }
</script>

<style scoped lang="scss">
    .bind-phone-res {
        display: flex;
        flex-flow: column;
        align-items: center;
        height: 100vh;
        color: $color-important;
        background: #fff;
        &-icon {
            margin-top: 45px;
            width: 50px;
            height: 50px;
        }
        &-tips {
            margin-top: 12px;
            font-size: $font-size-md;
        }
        &-content {
            margin-top: 44px;
            text-align: center;
            font-size: $font-size-sm;
            p:nth-child(2) {
                margin-top: 7px;
            }
        }
        .blue-btn-48 {
            margin-top: 100px;
        }
    }
</style>
