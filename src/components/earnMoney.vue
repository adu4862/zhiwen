<!-- 固定推广图标 -->
<template>
    <div class="m-earn-money" @click="handleMoney">
        <img class="m-earn-money-img" :src="require('@/assets/img/earn_money_img.png')" alt="earn_money">
        <div class="m-earn-money-content">
            可赚¥10.2
        </div>
    </div>
</template>

<script>
    export default {
        name: "earnMoney",
        methods: {
            handleMoney() {
                this.$emit('on-click');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .m-earn-money {
        position: fixed;
        top: 52px;
        right: 0;
        z-index: 2089;
        width: 58px;
        height: 67px;
        &-img {
            width: 100%;
            height: 100%;
        }
        &-content {
            @include tb();
            right: 6px;
            font-size: 7px;
            font-weight: 600;
            color: #fff;
        }
    }
</style>
