<template>
    <div class="exercise-res">
        <div class="exercise-res-main">
            <img class="exercise-res-main-award" :src="require('@/assets/img/icon_gold_award.png')" alt="award">
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
    .exercise-res {
        @include flr();
        height: 100vh;
        &-main {
            position: relative;
            margin-top: 109px;
            width:335px;
            height:388px;
            box-shadow: 0 0 7px 1px rgba(77, 45, 95, 0.5);
            border-radius: 12px;
            background-color: #fff;
            background: url("~@/assets/img/exercise_bg.png") no-repeat center;
            background-size: cover;
            &-award {
                @include lr();
                top: -46.5px;
                width: 105px;
                height: 93px;
            }
        }
    }
</style>
