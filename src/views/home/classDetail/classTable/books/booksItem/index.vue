<template>
    <div class="class-books-item">
        <div class="class-books-item-title">
            <p class="title">{{title}}</p>
            <p class="value">{{value?'购买后可查看详情':''}}</p>
        </div>
        <div class="class-books-item-content">
            <template v-for="item in 3">
                <div class="class-info">
                    <p class="title">1、法律英语基础版课程一</p>
                    <p class="desc">法律英语基础 练习一</p>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: {
            title: {
                type: String,
                default: ''
            },
            value: {
                type: Boolean,
                default: true
            }
        }
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
                color: #5F626F;
            }
            .value {
                color: $color-gary;
                font-size: $font-size-mini;
            }
        }
        &-content {
            padding-left: 21px;
            padding-right: 19px;
            .class-info {
                padding-top: 4px;
                padding-bottom: 6px;
                @include border-bottom();
                .title {
                    margin-top: 4px;
                    @include height(14px);
                    font-size: $font-size-mini;
                }
                .desc {
                    margin-top: 3px;
                    font-size: 8px;
                    text-indent: 15px;
                }
                &:nth-last-child(1):after {
                    display: none;
                }
            }
        }
    }
</style>
