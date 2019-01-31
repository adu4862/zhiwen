<!-- 课程目录 -->
<template>
    <div class="class-books">
        <!-- 试听课 -->
        <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="试听课" name="1">
                <ClassInfo
                    v-for="item in classDetail.trial_lessons"
                    :key="item.id"
                    :lesson="item"
                    :isTest="true"
                    :style="{order: item.order}"
                />
            </van-collapse-item>
        </van-collapse>
        <BooksItem :classDetail="classDetail" />
    </div>
</template>

<script>
    import BooksItem from "./booksItem";
    import ClassInfo from "./booksItem/classInfo";
    import ClassInfoSimple from "./booksItem/classInfoSimple";
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

    export default {
        name: "classDetailTableBooks",
        components: {
            BooksItem,
            ClassInfo,
            ClassInfoSimple,
        },
        data() {
            return {
                activeName: '1'
            };
        },
        computed: {
            ...mapState('home', ['classDetail'])
        },
    }
</script>

<style lang="scss" scoped>
    .class-books {
        display: flex;
        flex-flow: column;
        /deep/ .van-cell {
            padding: 3px 20px;
            font-size: $font-size-sm;
            color: #4A4A4A;
            background: #EBF0FF;
            &:after {
                display: none;
            }
            .van-icon {
                font-size: 18px;
                font-weight: 500;
                color: $color-link;
            }
        }
        /deep/ .van-collapse-item__content {
            padding: initial;
            background-color: $color-bg;
        }
    }
</style>

