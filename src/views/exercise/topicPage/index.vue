<template>
    <div class="exercise-topic">
        <div class="exercise-topic-container"></div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
    .exercise-topic {
        position: relative;
        width: 335px;
        min-height: 456px;
        &-container {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 3;
            border-radius: 12px;
            background: url("~@/assets/img/exercise_bg.png") no-repeat center;
            background-size: cover;
            background-color: #fff;
        }
        &:before,
        &:after {
            content: '';
            @include lr();
            bottom: -10px;
            z-index: 2;
            width: 315px;
            height: 26px;
            background-color: red;
        }
        &:after {
            bottom: -20px;
            z-index: 1;
            width: 305px;
            background-color: blue;
        }
    }
</style>
