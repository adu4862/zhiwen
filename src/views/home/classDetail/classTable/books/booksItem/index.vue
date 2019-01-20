<template>
    <div class="class-books-item">
        <div class="class-books-item-title">
            <p class="title">{{title}}</p>
            <p class="value"></p>
        </div>
        <div class="class-books-item-content">

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
                type
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
            padding: 0 20px;
            height: 30px;
            background: rgba(235, 240, 255, 0.54);
            .title {
                font-size: $font-size-sm;
                color: #5F626F;
            }
        }
    }
</style>
