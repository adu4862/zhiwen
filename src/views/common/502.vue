<template>
    <div class="bad-way">
        <img class="bad-way-img" :src="require('@/assets/img/502.png')" alt="404">
        <div class="bad-way-tips">
            <p>您需要允许获取微信信息才打开</p>
            <p>这个链接哦～</p>
        </div>
        <button class="blue-btn-48">再次进入</button>
    </div>
</template>

<script>
    export default {
        name: "404"
    }
</script>

<style lang="scss" scoped>
    .bad-way {
        @include ftb();
        flex-flow: column;
        height: 100vh;
        background-color: #fff;
        &-img {
            margin-top: 50px;
            width: 173px;
        }
        &-tips {
            margin-top: 41px;
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
