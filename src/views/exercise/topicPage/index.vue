<template>
    <div class="exercise-topic">
        <div class="exercise-topic-container"></div>
    </div>
</template>

<script>
    export default {
        name: "TopicPage"
    }
</script>

<style lang="scss" scoped>
    .exercise-topic {
        position: relative;
        width: 335px;
        height: 456px;
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
            width: 325px;
            height: 46px;
            border-radius: 12px;
            background-color: rgba(255, 255, 255, .8);
        }
        &:after {
            bottom: -20px;
            z-index: 1;
            width: 315px;
            background-color: rgba(255, 255, 255, .6);
        }
    }
</style>
