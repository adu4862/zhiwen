<template>
    <div class="class-table">
        <!-- TabBar -->
        <div class="class-table-header">
            <p :class="['class-table-header-item', activeHeader === '1'?'active':'']" @click="handleHeader('1')">
                课程概览</p>
            <p :class="['class-table-header-item', activeHeader === '2'?'active':'']" @click="handleHeader('2')">
                课程目录</p>
        </div>
        <div class="class-table-content">
            <!-- 课程概览 -->
            <div class="intro" v-show="activeHeader === '1'">1</div>
            <!-- 课程目录 -->
            <div class="books" v-show="activeHeader === '2'">
                <ClassBooks />
            </div>
        </div>
    </div>
</template>

<script>
    import ClassBooks from "./books";

    export default {
        components: {
            ClassBooks
        },
        data() {
            return {
                activeHeader: "2"
            };
        },
        methods: {
            handleHeader(type) {
                this.activeHeader = type;
            }
        }
    };
</script>

<style lang="scss" scoped>
    .class-table {
        margin-top: 6px;
        background-color: #fff;
        &-header {
            display: flex;
            justify-content: space-around;
            @include border-bottom($height: 2px, $border-color: rgba(101, 135, 248, .36));
            &-item {
                position: relative;
                flex: 1;
                padding-top: 12px;
                padding-bottom: 5px;
                text-align: center;
                box-sizing: content-box;
                &:after {
                    content: '';
                    @include lr();
                    bottom: 1px;
                    width: 45px;
                    height: 2px;
                    background: $color-link;
                    border-radius: 2px;
                    display: none;
                }
                &.active {
                    color: $color-important;
                }
                &.active:after {
                    display: block;
                }
            }
        }
    }
</style>
