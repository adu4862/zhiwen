<template>
    <div class="m-divider-title">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "divider-title",
    }
</script>

<style lang="scss" scoped>
    .m-divider-title {
        position: relative;
        margin: 0 auto;
        width: 160px;
        white-space: nowrap;
        text-align: center;
        font-weight: 500;
        font-size: 16px;
        &:before,
        &:after {
            content: "";
            @include tb();
            width: 45px;
            height: 2px;
            border-radius: 2px;
        }
        &:before {
            left: -45px;
            background: linear-gradient(90deg, #FAD961 0%, #F76B1C 100%);
        }
        &:after {
            right: -42px;
            background: linear-gradient(-90deg, #FAD961 0%, #F76B1C 100%);
        }
    }
</style>
