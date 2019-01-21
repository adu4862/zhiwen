<template>
    <div class="discount-records">
        <DividerTitle class="discount-records-title">砍价记录</DividerTitle>
    </div>
</template>

<script>
    import {DividerTitle} from '@/components'

    export default {
        name: "index",
        components: {
            DividerTitle
        }
    }
</script>

<style lang="scss" scoped>
    .discount-records {
        &-title {
            font-size: 20px;
            font-weight: 600;
            color: #222222;
        }
    }
</style>
