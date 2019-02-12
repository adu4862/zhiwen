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
                     :style="{order: item.number}" @click="handleOption(item.subject, idx)">
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
        <div class="exercise-topic-guide-bar" v-if="isCheck">
            <p :class="['exercise-topic-guide-bar-prev', currentTest===0?'disabled':'']" @click="handlePrev">
                上一题
            </p>
            <p class="exercise-topic-guide-bar-next" @click="handleNext">
                <button class="blue-btn-48">
                    {{lessonDetail.test_questions.length === currentTest+1?'查看成绩':'下一题'}}
                </button>
            </p>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
    import NP from 'number-precision';

    export default {
        name: "TopicPage",
        props: {
            type: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                isCheck: false,
                currentTest: 0,
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'],
                selectOptionIdx: null,
                result: '',
                historyData: {},
                selectHistory: [],
                correctNum: 0,
            }
        },
        computed: {
            ...mapState('home', ['lessonDetail'])
        },
        watch: {
            selectHistory(val) {
                console.log(val)
            }
        },
        mounted() {
            // 查看解析
            if (this.type === 'analysis') {
                this.getTestRecords({
                    id: this.lessonDetail.test_questions[this.currentTest].id
                }).then((res) => {
                    // console.log(res)
                    
                })
            }
        },
        methods: {
            ...mapActions('home', ['getSingleTest', 'setTestRecord', 'setTestScore', 'updateTestScore', 'getTestRecords']),
            // 选项
            handleOption(option, idx) {
                if (this.selectHistory[this.currentTest]) {
                    return
                }
                this.selectOptionIdx = idx;
                this.historyData = {
                    option,
                    idx
                };
            },
            // 查看答案
            async handleCheckAnswer(id) {
                this.isCheck = true;
                await this.getSingleTest({
                    id
                }).then((res) => {
                    this.result = res;

                    // 答题记录
                    let {option, idx} = this.historyData;
                    this.$set(this.selectHistory, this.currentTest, {
                        option,
                        idx,
                        result: res
                    });

                    // 选择正确数量
                    if (this.selectHistory[this.currentTest].option === res.answer) {
                        this.correctNum = this.correctNum + 1;
                    }
                });
                // 储存用户答题记录
                this.setTestRecord({
                    test_question_id: this.result.id,
                    answer: this.selectHistory[this.currentTest].option
                })
            },
            // 判断正确答案
            checkAnswer(option, idx) {
                if (!this.isCheck) return;
                if (this.result && this.result.answer === option) {
                    return 'correct'
                } else if (this.selectOptionIdx === idx) {
                    return 'mistake'
                }
            },
            // 上一题
            handlePrev() {
                if (this.currentTest === 0) {
                    return
                }
                this.currentTest = this.currentTest - 1;
                this.init();
            },
            // 下一题
            handleNext() {
                if (this.currentTest + 1 === this.lessonDetail.test_questions.length) {
                    let score = NP.times(NP.divide(this.correctNum, this.lessonDetail.test_questions.length), 100);
                    // 创建答题总成绩记录
                    this.setTestScore({
                        lesson_id: this.lessonDetail.id,
                        score
                    }).then((res) => {
                        // 跳转结果页
                        this.$router.push({
                            name: 'exerciseRes',
                            params: {
                                score
                            }
                        })
                    });
                } else {
                    this.currentTest = this.currentTest + 1;
                    this.init();
                }
            },
            init() {
                if (this.selectHistory[this.currentTest]) {
                    this.isCheck = true;
                    this.selectOptionIdx = this.selectHistory[this.currentTest].idx;
                    this.result = this.selectHistory[this.currentTest].result;
                } else {
                    this.isCheck = false;
                    this.selectOptionIdx = null;
                    this.result = '';
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
    }
</style>
