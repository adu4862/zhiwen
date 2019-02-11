<template>
    <div class="exercise-res">
        <div class="exercise-res-mask"></div>
        <div class="exercise-res-main">
            <img class="exercise-res-main-award" :src="require('@/assets/img/icon_gold_award.png')" alt="award">
            <p class="exercise-res-main-title">{{score}}%</p>
            <p class="exercise-res-main-sub-title">本次练习正确率为 {{score}}%</p>
            <div class="exercise-res-main-btns">
                <button class="blue-btn-48">¥299购买课程</button>
                <button class="white-btn-48">¥299购买课程</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                score: 0
            }
        },
        mounted() {
            if (this.$route.params.score) {
                this.score = this.$route.params.score;
            } else {
                this.$router.go(-2);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .exercise-res {
        @include flr();
        height: 100vh;
        background: url("~@/assets/img/exercise_res_bg.png") no-repeat center;
        background-size: cover;
        &-mask {
            @include modalbg($bg-color: rgba(96, 96, 96, .4));
            z-index: 1999;
        }
        &-main {
            position: relative;
            z-index: 2001;
            margin-top: 149px;
            width: 335px;
            height: 388px;
            box-shadow: 0 0 7px 1px rgba(77, 45, 95, 0.5);
            border-radius: 12px;
            background: url("~@/assets/img/exercise_bg.png") no-repeat center;
            background-size: cover;
            background-color: #fff;
            text-align: center;
            &-award {
                @include lr();
                top: -46.5px;
                width: 105px;
                height: 93px;
            }
            &-title {
                margin-top: 83px;
                @include height(84px);
                font-size: 60px;
                font-weight: 500;
                color: #F5A623;
            }
            &-sub-title {
                margin-top: 13px;
                @include height(25px);
                font-size: $font-size-lg;
                font-weight: 300;
                color: $color-important;
            }
            &-btns {
                margin-top: 36px;
                button {
                    margin: 0 auto;
                    width: 200px;
                    &:nth-child(2) {
                        margin-top: 20px;
                    }
                }
            }
        }
    }
</style>
