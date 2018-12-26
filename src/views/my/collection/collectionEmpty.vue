<template>
    <div class="my-collection-empty">
        暂无收藏记录
        <button>去商城逛逛</button>
    </div>
</template>

<script>
    export default {
        name: "collection-empty"
    }
</script>

<style scoped lang="scss">
    .my-collection-empty {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>
