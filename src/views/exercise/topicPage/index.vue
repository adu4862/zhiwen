<template>
    <div class="exercise-topic">
        <div class="exercise-topic-main"></div>
        <div class="exercise-topic-prev"></div>
        <div class="exercise-topic-prev-prev"></div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
    .exercise-topic {
        > div {
            @include lr();
            height: 456px;
            border-radius: 12px;
        }
        &-main {
            top: 12px;
            z-index: 3;
            width: 335px;
            background: url("~@/assets/img/exercise_bg.png") no-repeat center;
            background-size: cover;
            background-color: #fff;
        }
        &-prev {
            top: 22px;
            z-index: 2;
            width: 325px;
            background-color: rgba(255, 255, 255, .8);
        }
        &-prev-prev {
            top: 32px;
            z-index: 1;
            width: 315px;
            background-color: rgba(255, 255, 255, .6);
        }
    }
</style>
