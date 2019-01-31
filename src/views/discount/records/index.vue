<template>
    <div class="discount-records">
        <DividerTitle class="discount-records-title">砍价记录</DividerTitle>
        <div class="discount-records-list">
            <RecordItem v-for="(item, idx) in 100" :key="idx" />
        </div>
    </div>
</template>

<script>
    import {DividerTitle} from '@/components'
    import RecordItem from './recordItem'
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

    export default {
        name: "discountRecords",
        components: {
            DividerTitle,
            RecordItem,
        },
        computed: {
            ...mapState('home', ['bargainDetail'])
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
