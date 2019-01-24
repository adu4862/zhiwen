<template>
    <div class="exercise-topic-container">
        <div class="exercise-topic">
            <p class="exercise-topic-title">
                <span>单选题</span><span class="no">1/10</span>
            </p>
            <p class="exercise-topic-question">
                这是一个问题这是一个问题这是一个问题这是一个问题这是一个问题这是一个问题
            </p>
            <div class="exercise-topic-options">
                <div class="exercise-topic-options-item mistake" @click="handleOption">
                    <p>
                        <!--<span>A</span>-->
                        <i class="icon icon-mistake"></i>
                        <!--<i class="icon icon-correct"></i>-->
                    </p>
                    <span>restraintrestraintrestrai</span>
                </div>
                <div class="exercise-topic-options-item correct" @click="handleOption">
                    <p>
                        <!--<span>A</span>-->
                        <!--<i class="icon icon-mistake"></i>-->
                        <i class="icon icon-correct"></i>
                    </p>
                    <span>123</span>
                </div>
                <div class="exercise-topic-options-item" @click="handleOption">
                    <p>
                        <span>C</span>
                        <!--<i class="icon icon-mistake"></i>-->
                        <!--<i class="icon icon-correct"></i>-->
                    </p>
                    <span>234234werfwe</span>
                </div>
                <div class="exercise-topic-options-item" @click="handleOption">
                    <p>
                        <span>D</span>
                        <!--<i class="icon icon-mistake"></i>-->
                        <!--<i class="icon icon-correct"></i>-->
                    </p>
                    <span>gxcbdsfg434sdf</span>
                </div>
            </div>
            <button class="blue-btn-48 exercise-topic-btn" v-if="!isCheck" @click="handleCheckAnswer">
                查看答案
            </button>
            <div class="exercise-topic-analysis" v-if="isCheck">
                <p class="exercise-topic-analysis-title">答案解析：</p>
                <p class="exercise-topic-analysis-content">答案解析答案解析答答</p>
            </div>
        </div>
        <GuideBar/>
    </div>
</template>

<script>
    import GuideBar from "./guideBar"

    export default {
        name: "TopicPage",
        components: {
            GuideBar,
        },
        data() {
            return {
                isCheck: true
            }
        },
        methods: {
            handleOption() {
                console.log('选项')
            },
            handleCheckAnswer() {
                this.isCheck = true;
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
