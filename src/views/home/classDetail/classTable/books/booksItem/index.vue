<template>
    <div class="class-books-item">
        <div class="class-books-item-title">
            <p class="title">{{title}}</p>
            <p class="value">{{value?'购买后可查看详情':''}}</p>
        </div>
        <div class="class-books-item-content">
            <template v-for="(item, idx) in 3">
                <!-- 未购买 -->
                <ClassInfoSimple />
                <!-- 已购买 -->
                <!--<ClassInfo />-->
            </template>
        </div>
    </div>
</template>

<script>
    import ClassInfoSimple from "./classInfoSimple"
    import ClassInfo from "./classInfo"

    export default {
        name: "index",
        components: {
            ClassInfoSimple,
            ClassInfo,
        },
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
