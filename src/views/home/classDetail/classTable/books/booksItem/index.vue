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
            <div class="class-info-buyed">
                <div class="class-info-buyed-info">
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
                        <img :src="require('@/assets/img/my/cell_arrow_gary.png')" alt="">
                    </div>
                </div>
                <div class="class-info-buyed-practice">

                </div>
            </div>
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
            padding-left: 21px;
            padding-right: 19px;
            .class-info {
                padding-top: 4px;
                padding-bottom: 6px;
                @include border-bottom();
                .title {
                    margin-top: 4px;
                    @include height(14px);
                    font-size: $font-size-mini;
                }
                .desc {
                    margin-top: 3px;
                    font-size: 8px;
                    text-indent: 15px;
                }
                &:nth-last-child(1):after {
                    display: none;
                }
            }
            .class-info-buyed {
                &-info {
                    display: flex;
                    /*align-items: center;*/
                    padding-top: 14px;
                    padding-bottom: 10px;
                    @include border-bottom($border-color: #F3F6FE)
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
                        img {
                            width: 6px;
                            height: 10px;
                        }
                    }
                }
                &-practice {
                    padding-top: 12px;
                    padding-bottom: 10px;
                }
            }
        }
    }
</style>
