<template>
    <div class="discount-records">
        <DividerTitle class="discount-records-title">砍价记录</DividerTitle>
        <div class="discount-records-list">
            <RecordItem v-for="item in 100" />
        </div>
    </div>
</template>

<script>
    import {DividerTitle} from '@/components'
    import RecordItem from './recordItem'

    export default {
        name: "index",
        components: {
            DividerTitle,
            RecordItem,
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
        &-list {
            margin-top: 20px;
        }
    }
</style>
