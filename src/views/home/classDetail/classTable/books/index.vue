<!-- 课程目录 -->
<template>
    <div class="class-books">
        <!-- 试听课 -->
        <template v-for="item in classDetail.chapters">
            <van-collapse :style="{ order: item.order }" :key="item.id" v-model="activeName" accordion>
                <van-collapse-item title="试听课" name="1">
                    <ClassInfo :isTest="true" />
                </van-collapse-item>
            </van-collapse>
        </template>
        <!-- 未购买样式 -->
        <!--<ClassInfoSimple />-->
        <!-- 已购买样式 -->
        <!--<BooksItem title="第一章 法律英语第一章名" />-->
    </div>
</template>

<script>
    import BooksItem from "./booksItem";
    import ClassInfo from "./booksItem/classInfo";
    import ClassInfoSimple from "./booksItem/classInfoSimple";

    export default {
        name: "classDetailTableBooks",
        components: {
            BooksItem,
            ClassInfo,
            ClassInfoSimple,
        },
        props: {
            classDetail: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {
                activeName: '1'
            };
        }
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
        }
    }
</style>

