<template>
    <div class="class-books-item" v-if="classDetail.chapters.length">
        <template v-for="item in classDetail.chapters">
            <div :key="item.id" class="class-books-item-title">
                <p class="title">{{item.subject}}</p>
                <p class="value">{{classDetail.is_pay?'':'购买后可查看详情'}}</p>
            </div>
            <div class="class-books-item-content">
                <template v-for="lesson in item">
                    <!-- 未购买 -->
                    <ClassInfoSimple v-if="!classDetail.is_pay" :lesson="lesson" />
                    <!-- 已购买 -->
                    <ClassInfo v-else :lesson="lesson" />
                </template>
            </div>
        </template>
    </div>
</template>

<script>
    import ClassInfoSimple from "./classInfoSimple"
    import ClassInfo from "./classInfo"
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

    export default {
        name: "booksItem",
        components: {
            ClassInfoSimple,
            ClassInfo,
        },
        props: {
            value: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            ...mapState('home', ['classDetail'])
        },
    }
</script>

<style lang="scss" scoped>
    .class-books-item {
        &-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 5px 0 20px;
            height: 30px;
            background: rgba(235, 240, 255, 0.54);
            .title {
                font-size: $font-size-sm;
                color: $color-important;
            }
            .value {
                color: $color-gary;
                font-size: $font-size-mini;
            }
        }
        &-content {
            background-color: $color-bg;
        }
    }
</style>
