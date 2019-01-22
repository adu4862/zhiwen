<template>
    <div class="discount">
        <Bargain />
        <Records/>
    </div>
</template>

<script>
    import Bargain from './bargain'
    import Records from "./records"

    export default {
        name: "index",
        components: {
            Bargain,
            Records,
        }
    }
</script>

<style lang="scss" scoped>
    .discount {
        display: flex;
        flex-flow: column;
        align-items: center;
        padding-bottom: 12px;
        min-height: 100vh;
        background: url("~@/assets/img/discount/discount_bg.png") no-repeat center;
        background-size: cover;
        overflow-y: scroll;
        > div {
            margin-top: 12px;
            padding: 20px 16px;
            width: 350px;
            background: #fff;
            box-shadow: 0 2px 6px 2px rgba(88, 136, 234, 1);
            border-radius: 10px;
        }
    }
</style>
