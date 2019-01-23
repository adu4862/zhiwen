<template>
    <div class="exercise-topic-guide-bar">
        <p class="exercise-topic-guide-bar-prev">
            上一题
        </p>
        <p class="exercise-topic-guide-bar-next">
            <button class="blue-btn-48">下一题</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
    .exercise-topic-guide-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        @include ftb();
        padding: 11px 0;
        font-size: $font-size-md;
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(101, 135, 248, 0.11);
        &-prev {
            padding: 4px 35px;
            color: $color-gary;
            border-right: 1px solid rgba(101, 135, 248, .36);
        }
        &-prev.disabled {
            color: #CFCFCF;
        }
        &-next {
            flex: 1;
            button {
                margin-left: 35px;
                width: 200px;
            }
        }
    }
</style>
