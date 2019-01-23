<!-- 封面 -->
<template>
    <div class="exercise-title-page">
        <div class="exercise-title-page-content">
            <div class="exercise-title-page-content-title">法律英语基础：练习一</div>
            <div class="exercise-title-page-content-info">
                <p>共10道题</p>
                <p>参考用时：13分钟</p>
            </div>
            <div class="exercise-title-page-content-congratulations">真棒！你已经完成 <span>所有</span> 测试题了哦</div>
        </div>
        <div class="exercise-title-page-btns">
            <button class="blue-btn-48">开始练习</button>
            <button class="white-btn-48">再做一遍</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
    .exercise-title-page {
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
