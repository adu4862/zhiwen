<template>
    <div class="my-order-empty">
        您还没有推广订单哦<br/>
        赶快去发起推广吧～
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
