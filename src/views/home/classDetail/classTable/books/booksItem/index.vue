<template>
    <div class="class-books-item">
        <div class="class-books-item-title">
            <p class="title">{{title}}</p>
            <p class="value">{{value?'购买后可查看详情':''}}</p>
        </div>
        <div class="class-books-item-content">
            <!-- 未购买 -->
            <!--<template v-for="item in 3">-->
                <!--<div class="class-info">-->
                    <!--<p class="title">1、法律英语基础版课程一</p>-->
                    <!--<p class="desc">法律英语基础 练习一</p>-->
                <!--</div>-->
            <!--</template>-->
            <!-- 已购买 -->
            <template v-for="item in 3">
                <div class="class-info-buyed">
                    <div class="class-info-buyed-desc">
                        <div class="info-banner">
                            <img :src="require('@/assets/img/demo_banner.png')" alt="class_banner">
                        </div>
                        <div class="info-content">
                            <p class="info-content-title ellipsis">1、法律英语基础版课程一法律英语基础版课程法律英语基础版课程</p>
                            <p class="info-content-info">
                                <span>时长10:36</span>
                                <span>播放376次</span>
                            </p>
                        </div>
                        <div class="info-arrow">
                            <img class="arrow-icon" :src="require('@/assets/img/my/cell_arrow_gary.png')" alt="allow">
                        </div>
                    </div>
                    <div class="class-info-buyed-practice">
                        <div class="left">
                            <div class="practice-icon">练</div>
                            <div class="practice-title ellipsis">法律英语基础法律英语基础法律英语基础法律英语基础 练习一</div>
                        </div>
                        <div class="right">
                            <img class="cup-icon" :src="require('@/assets/img/class_cup.png')" alt="class_cup">
                            <img class="arrow-icon" :src="require('@/assets/img/my/cell_arrow_gary.png')" alt="allow">
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: {
            title: {
                type: String,
                default: ''
            },
            value: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .class-books-item {
        &-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 5px 0 20px;
            height: 30px;
            background: rgba(235, 240, 255, 0.54);
            .title {
                font-size: $font-size-sm;
                color: $color-important;
            }
            .value {
                color: $color-gary;
                font-size: $font-size-mini;
            }
        }
        &-content {
            background-color: $color-bg;
            .class-info {
                padding: 0 19px 0 21px;
                background-color: #fff;
                .title {
                    padding-top: 8px;
                    @include height(14px);
                    font-size: $font-size-mini;
                    box-sizing: content-box;
                }
                .desc {
                    padding-top: 3px;
                    padding-bottom: 6px;
                    @include border-bottom();
                    font-size: 8px;
                    text-indent: 15px;
                }
                &:nth-last-child(1) .desc:after {
                    display: none;
                }
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
                            font-size: $font-size-mini;
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
                            @include height(15px);
                            background-color: $color-link;
                            border-radius:8px;
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
        }
    }
</style>
