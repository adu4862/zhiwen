<template>
    <div class="class-books">
        <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="试听课" name="1">
                <div class="class-info-buyed">
                    <div class="class-info-buyed-desc">
                        <div class="info-banner">
                            <img :src="require('@/assets/img/demo_banner.png')" alt="class_banner">
                        </div>
                        <div class="info-content">
                            <div class="info-content-title ellipsis">1、法律英语基础版课程一法律英语基础版课程法律英语基础版课程</div>
                            <div class="info-content-info">
                                <p>时长<span>10:36</span></p>
                                <p>播放<span>376次</span></p>
                            </div>
                        </div>
                        <!--<div class="info-arrow">-->
                            <!--<img class="arrow-icon" :src="require('@/assets/img/my/cell_arrow_gary.png')" alt="allow">-->
                        <!--</div>-->
                    </div>
                    <div class="class-info-buyed-practice">
                        <div class="left">
                            <div class="practice-icon">练</div>
                            <div class="practice-title ellipsis">法律英语基础法律英语基础法律英语基础法律英语基础 练习一</div>
                        </div>
                        <!--<div class="right">-->
                            <!--<img class="cup-icon" :src="require('@/assets/img/class_cup.png')" alt="class_cup">-->
                            <!--<img class="arrow-icon" :src="require('@/assets/img/my/cell_arrow_gary.png')" alt="allow">-->
                        <!--</div>-->
                    </div>
                </div>
            </van-collapse-item>
        </van-collapse>
        <BooksItem title="第一章 法律英语第一章名" />
    </div>
</template>

<script>
    import BooksItem from "./booksItem";

    export default {
        name: "index",
        components: {
            BooksItem
        },
        data() {
            return {
                activeName: '1'
            };
        }
    }
</script>

<style lang="scss" scoped>
    .class-books {
        /deep/ .van-cell {
            padding: 3px 20px;
            font-size: $font-size-sm;
            color: #4A4A4A;
            background: #EBF0FF;
            &:after {
                display: none;
            }
            .van-icon {
                font-size: 18px;
                font-weight: 500;
                color: $color-link;
            }
        }
        /deep/ .van-collapse-item__content {
            padding: initial;
        }
        .class-info-buyed {
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
                .info-banner {
                    width: 70px;
                    height: 40px;
                    border-radius: 4px;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .info-content {
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
                        display: flex;
                        font-size: $font-size-mini;
                        span {
                            color: $color-link;
                        }
                        span:nth-child(1) {
                            margin-right: 15px;
                        }
                    }
                }
                .info-arrow {
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
                        height: 15px;
                        line-height: 13px;
                        border: 1px solid $color-link;
                        border-radius:8px;
                        font-size: $font-size-mini;
                        color: $color-gary;
                        text-align: center;
                    }
                    .practice-title {
                        flex: 1;
                        margin-left: 4px;
                        font-size: $font-size-sm;
                        color: #666;
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
    }
</style>

