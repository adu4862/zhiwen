<template>
    <div class="exercise-topic">
        <p class="exercise-topic-title">
            <span>单选题</span><span class="no">1/10</span>
        </p>
        <p class="exercise-topic-question">
            这是一个问题这是一个问题这是一个问题这是一个问题这是一个问题这是一个问题
        </p>
        <div class="exercise-topic-options">
            
        </div>
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
        @include ftb();
        flex-flow: column;
        margin-top: 15%!important;
        padding: 26px 20px;
        width: 335px;
        border-radius: 12px;
        background: url("~@/assets/img/exercise_bg.png") no-repeat center;
        background-size: cover;
        background-color: #fff;
        font-size: $font-size-md;
        color: $color-important;
        &-title {
            margin-top: 2px;
            @include height(22px);
            .no {
                margin-left: 14px;
            }
        }
        &-question {
            margin-top: 30px;
            line-height: 24px;
        }
    }
</style>
