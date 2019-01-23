<template>
    <div class="my-collection-empty">
        <img class="my-collection-empty-img"
             :src="require('@/assets/img/my/collection/collection_empty.png')" alt="collection_empty">
        <span class="my-collection-empty-tips">暂无收藏记录</span>
        <button class="my-collection-empty-btn blue-btn-48">去商城逛逛</button>
    </div>
</template>

<script>
    export default {
        name: "collectionEmpty"
    }
</script>

<style scoped lang="scss">
    .my-collection-empty {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        &-img {
            margin-top: 102px;
            width: 186px;
        }
        &-tips {
            margin-top: 60px;
            color: $color-gary;
        }
        &-btn {
            margin-top: 24px;
        }
    }
</style>
