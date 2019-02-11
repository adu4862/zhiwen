<!-- 封面 -->
<template>
    <div class="exercise-title-page">
        <div class="exercise-title-page-content">
            <div class="exercise-title-page-content-title">{{lessonDetail.subject}}：练习题</div>
            <div class="exercise-title-page-content-info">
                <p>共{{lessonDetail.test_questions.length}}道题</p>
                <p>参考用时：{{lessonDetail.reference_time}}分钟</p>
            </div>
            <div class="exercise-title-page-content-congratulations" v-if="lessonDetail.score">真棒！你已经完成 <span>所有</span> 测试题了哦</div>
        </div>
        <div class="exercise-title-page-btns">
            <button class="blue-btn-48" @click="handleStart">开始练习</button>
            <button class="white-btn-48" v-if="lessonDetail.score">再做一遍</button>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

    export default {
        name: "TitlePage",
        computed: {
            ...mapState('home', ['lessonDetail'])
        },
        methods: {
            handleStart() {
                this.$emit('on-start')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .exercise-title-page {
        @include ct();
        width: 335px;
        height: 524px;
        background: url("~@/assets/img/exercise_bg.png") no-repeat center;
        background-size: cover;
        background-color: #fff;
        border-radius: 12px;
        &-content {
            @include fct();
            flex-flow: column;
            margin-top: 116px;
            font-size: $font-size-sm;
            color: $color-important;
            &-title {
                font-size: $font-size-md;
                text-align: center;
            }
            &-info {
                margin-top: 54px;
                color: $color-common;
                text-align: center;
                p {
                    @include height(17px);
                }
            }
            &-congratulations {
                margin-top: 36px;
                span {
                    font-size: $font-size-base;
                    font-weight: 500;
                    color: $color-link;
                }
            }
        }
        &-btns {
            margin-top: 90px;
            button {
                margin: 0 auto;
                width: 295px;
                &:nth-child(2) {
                    margin-top: 22px;
                }
            }
        }
    }
</style>
