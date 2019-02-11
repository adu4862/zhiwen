<template>
    <div class="discount-records">
        <DividerTitle class="discount-records-title">砍价记录</DividerTitle>
        <div class="discount-records-list" v-if="bargainDetail.records.length">
            <RecordItem v-for="(item, idx) in 100" :key="idx"/>
        </div>
        <div class="discount-records-empty">
            <p>还没有人给你砍价</p>
            <p>快请好友来砍价吧～</p>
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
        &-empty {
            padding: 20px 0 10px 0;
            font-size: $font-size-md;
            line-height: 22px;
            color: $color-gary;
            text-align: center;
        }
    }
</style>
