<template>
    <div class="not-found">
        <img class="not-found-img" :src="require('@/assets/img/404.png')" alt="404">
        <div class="not-found-tips">
            <p>您需要在微信中才能打开</p>
            <p>这个链接哦～</p>
        </div>
        <button class="blue-btn-48">前往微信</button>
    </div>
</template>

<script>
    export default {
        name: "404"
    }
</script>

<style lang="scss" scoped>
    .not-found {
        @include ftb();
        flex-flow: column;
        height: 100vh;
        background-color: #fff;
        &-img {
            margin-top: 50px;
            width: 173px;
        }
        &-tips {
            margin-top: 20px;
            p {
                @include height(22px);
                font-size: $font-size-md;
                color: $color-gary;
                text-align: center;
            }
        }
        button {
            margin-top: 30px;
            width: 332px;
        }
    }
</style>
