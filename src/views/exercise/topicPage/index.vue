<template>
    <div class="exercise-topic-container">
        <div class="exercise-topic">
            <p class="exercise-topic-title">
                <span>单选题</span><span class="no">{{currentTest + 1}}/{{lessonDetail.test_questions.length}}</span>
            </p>
            <p class="exercise-topic-question">
                {{lessonDetail.test_questions[currentTest].subject}}
            </p>
            <div class="exercise-topic-options">
                <div v-for="(item, idx) in lessonDetail.test_questions[currentTest].options"
                     :class="['exercise-topic-options-item', selectOptionIdx === idx?'active':'',
                     checkAnswer(item.subject, idx)]"
                     :style="{order: item.number}" @click="handleOption(idx)">
                    <p>
                        <span v-if="!checkAnswer(item.subject, idx)">{{options[item.number]}}</span>
                        <i class="icon icon-mistake" v-if="checkAnswer(item.subject, idx) === 'mistake'"></i>
                        <i class="icon icon-correct" v-if="checkAnswer(item.subject, idx) === 'correct'"></i>
                    </p>
                    <span>{{item.subject}}</span>
                </div>
            </div>
            <button v-if="!isCheck"
                    :disabled="selectOptionIdx===null"
                    :class="['blue-btn-48 exercise-topic-btn', selectOptionIdx===null?'disabled-btn':'']"
                    @click="handleCheckAnswer(lessonDetail.test_questions[currentTest].id)">
                查看答案
            </button>
            <div class="exercise-topic-analysis" v-if="isCheck">
                <p class="exercise-topic-analysis-title">答案解析：</p>
                <p class="exercise-topic-analysis-content">{{result.analysis}}</p>
            </div>
        </div>
        <GuideBar/>
    </div>
</template>

<script>
    import GuideBar from "./guideBar"
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

    export default {
        name: "TopicPage",
        components: {
            GuideBar,
        },
        data() {
            return {
                isCheck: false,
                currentTest: 0,
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'],
                selectOptionIdx: null,
                result: ''
            }
        },
        computed: {
            ...mapState('home', ['lessonDetail'])
        },
        methods: {
            ...mapActions('home', ['getSingleTest']),
            handleOption(idx) {
                this.selectOptionIdx = idx;
            },
            handleCheckAnswer(id) {
                this.isCheck = true;
                this.getSingleTest({
                    id
                }).then((res) => {
                    this.result = res;
                });
            },
            checkAnswer(option, idx) {
                if (!this.isCheck) return;
                if (this.result && this.result.answer === option) {
                    return 'correct'
                } else if (this.selectOptionIdx === idx) {
                    return 'mistake'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .exercise-topic-container {
        width: 100%;
        height: 100%;
        padding-bottom: 120px;
        overflow-x: hidden;
        overflow-y: scroll;
        .exercise-topic {
            position: relative;
            @include ftb();
            flex-flow: column;
            margin: 0 auto;
            margin-top: 10% !important;
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
            &-options {
                display: flex;
                flex-flow: column;
                margin-top: 20px;
                min-width: 200px;
                max-width: 100%;
                &-item {
                    @include ftb();
                    margin-top: 20px;
                    padding: 6px 20px;
                    line-height: 17px;
                    border-radius: 15px;
                    border: 1px solid rgba(227, 229, 233, 1);
                    background-color: #fff;
                    font-size: $font-size-sm;
                    p {
                        width: 24px;
                        .icon {
                            width: 8px;
                            height: 8px;
                        }
                        .icon-mistake {
                            background: url("~@/assets/img/icon_mistake.png") no-repeat center;
                            background-size: contain;
                        }
                        .icon-correct {
                            width: 11px;
                            background: url("~@/assets/img/icon_correct.png") no-repeat center;
                            background-size: contain;
                        }
                    }
                    span:nth-child(2) {
                        word-wrap: break-word;
                        overflow: hidden;
                    }
                    &:nth-child(1) {
                        margin-top: initial;
                    }
                }
                &-item.active {
                    color: #fff;
                    background-color: $color-link;
                }
                &-item.mistake {
                    color: #fff;
                    border-color: #F86565;
                    background-color: #F86565;
                }
                &-item.correct {
                    color: #fff;
                    border-color: #48D39A;
                    background-color: #48D39A;
                }
            }
            &-btn {
                margin-top: 30px;
                width: 295px;
                &.disabled {
                    background-color: $color-gary;
                }
            }
            &-analysis {
                margin-top: 40px;
                width: 100%;
                &-title {
                    @include height(17px);
                    font-size: $font-size-sm;
                }
                &-content {
                    margin-top: 10px;
                    line-height: 20px;
                    color: $color-important;
                    word-wrap: break-word;
                    overflow: hidden;
                }
            }
            &:before,
            &:after {
                content: '';
                position: absolute;
                bottom: -10px;
                width: 325px;
                height: 15px;
                border-bottom-left-radius: 12px;
                border-bottom-right-radius: 12px;
                background-color: rgba(255, 255, 255, .8);
            }
            &:after {
                bottom: -20px;
                width: 315px;
                height: 20px;
                background-color: rgba(255, 255, 255, .6);
            }
        }
    }
</style>
