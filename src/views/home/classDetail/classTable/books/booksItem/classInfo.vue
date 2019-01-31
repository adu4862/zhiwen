<template>
    <div :class="['class-info', isTest?'class-info-test':'']">
        <div class="class-info-desc" @click="handleClass(lesson)">
            <div class="class-info-desc-banner">
                <img :src="lesson.img_uri" alt="class_banner">
            </div>
            <div class="class-info-desc-content">
                <p class="class-info-desc-content-title ellipsis">{{lesson.subject}}</p>
                <p class="class-info-desc-content-info">
                    <span>时长{{lesson.duration | realFormatSecond}}</span>
                    <span>播放376次</span>
                </p>
            </div>
            <div class="class-info-desc-arrow" v-if="!isTest">
                <img class="arrow-icon" :src="require('@/assets/img/my/cell_arrow_gary.png')" alt="allow">
            </div>
        </div>
        <div class="class-info-practice">
            <div class="left">
                <div class="practice-icon">练</div>
                <div class="practice-title ellipsis">法律英语基础法律英语基础法律英语基础法律英语基础 练习一</div>
            </div>
            <div class="right" v-if="!isTest">
                <img class="cup-icon" :src="require('@/assets/img/class_cup.png')" alt="class_cup">
                <img class="arrow-icon" :src="require('@/assets/img/my/cell_arrow_gary.png')" alt="allow">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "classInfo",
        props: {
            // 试听课样式
            isTest: {
                type: Boolean,
                default: false
            },
            lesson: {
                type: Object,
                default: {}
            }
        },
        methods: {
            handleClass(lesson) {
                let {type, id} = lesson;
                if (type === 'video') {
                    this.$router.push({
                        name: 'classMedia',
                        params: {
                            id
                        }
                    })
                } else {
                    this.$router.push({
                        name: 'classVoice',
                        params: {
                            id
                        }
                    })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .class-info {
        margin-top: 6px;
        padding-left: 21px;
        padding-right: 19px;
        background-color: #fff;
        &:nth-child(1) {
            margin-top: initial;
        }
        .arrow-icon {
            width: 6px;
            height: 10px;
        }
        &-desc {
            display: flex;
            padding-top: 14px;
            padding-bottom: 10px;
            @include border-bottom($border-color: #F3F6FE);
            &-banner {
                width: 70px;
                height: 40px;
                border-radius: 4px;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            &-content {
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                flex: 1;
                margin-left: 15px;
                overflow: hidden;
                &-title {
                    @include height(20px);
                    color: $color-important;
                }
                &-info {
                    font-size: $font-size-mini;
                    span:nth-child(1) {
                        margin-right: 15px;
                    }
                }
            }
            &-arrow {
                @include ftb();
                margin-left: 10px;
            }
        }
        &-practice {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 0;
            .left {
                @include ftb();
                max-width: 70%;
                .practice-icon {
                    width: 22px;
                    @include height(15px);
                    background-color: $color-link;
                    border-radius: 8px;
                    font-size: $font-size-mini;
                    color: #fff;
                    text-align: center;
                }
                .practice-title {
                    flex: 1;
                    margin-left: 4px;
                    font-size: $font-size-sm;
                    color: #222;
                }
            }
            .right {
                @include ftb();
                .cup-icon {
                    margin-right: 30px;
                    width: 33px;
                    height: 29px;
                }
            }
        }
    }

    .class-info-test {
        .left {
            .practice-icon {
                height: 15px;
                line-height: 13px;
                color: $color-gary;
                border: 1px solid $color-link;
                background-color: initial;
            }
        }
    }
</style>
