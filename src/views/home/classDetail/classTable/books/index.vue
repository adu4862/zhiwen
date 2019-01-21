<template>
    <div class="class-books">
        <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="试听课" name="1">
                <ClassInfo :isTest="true" />
            </van-collapse-item>
        </van-collapse>
        <BooksItem title="第一章 法律英语第一章名" />
    </div>
</template>

<script>
    import BooksItem from "./booksItem";
    import ClassInfo from "./booksItem/classInfo";

    export default {
        name: "index",
        components: {
            BooksItem,
            ClassInfo,
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

