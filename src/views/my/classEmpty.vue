<template>
    <div class="my-class-list-empty">
        <img class="my-class-list-empty-img" :src="require('@/assets/img/my/class_list_empty.png')" alt="class_list_empty">
        <div class="my-class-list-empty-content">
            <p>暂无记录</p>
            <p>快去 <router-link :to="{name: 'home'}">首页</router-link> 逛逛吧</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "classEmpty",
    }
</script>

<style lang="scss" scoped>
    .my-class-list-empty {
        @include fct();
        flex-flow: column;
        padding: 24px 0;
        &-img {
            width: 163px;
        }
        &-content {
            margin-top: 20px;
            text-align: center;
            font-size: $font-size-sm;
            color: $color-gary;
            p:nth-child(2) {
                margin-top: 6px;
                a {
                    color: $color-link;
                }
            }
        }
    }
</style>
