<template>
    <div class="class-info-simple">
        <p class="class-info-simple-title">1、法律英语基础版课程一</p>
        <p class="class-info-simple-desc">法律英语基础 练习一</p>
    </div>
</template>

<script>
    export default {
        name: "classInfoSimple",
        props: {
            isLast: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .class-info-simple {
        padding: 0 19px 0 21px;
        background-color: #fff;
        &-title {
            padding-top: 8px;
            @include height(14px);
            font-size: $font-size-mini;
            box-sizing: content-box;
        }
        &-desc {
            padding-top: 3px;
            padding-bottom: 6px;
            @include border-bottom();
            font-size: 8px;
            text-indent: 15px;
        }
        &:nth-last-child(1) &-desc:after {
            display: none;
        }
    }
</style>
