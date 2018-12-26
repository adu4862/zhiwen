<template>
    <div class="my-order-empty">
        暂无订单
        <button>去商城逛逛</button>
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
        height: 100vh;
    }
</style>
