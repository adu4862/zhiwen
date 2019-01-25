<template>
    <div class="publish">
        <div class="publish-card">
            <div class="publish-card-user">
                <img class="publish-card-user-header" :src="require('@/assets/img/demo_class_banner.png')" alt="header">
                <div class="publish-card-user-info">
                    <p class="name">用户名称</p>
                    <p class="invite">邀请您来学习XXXX的知识</p>
                </div>
            </div>
            <div class="publish-card-title">
                <p>
                    课程名称课程名称课程名称课程名
                </p>
            </div>
            <div class="publish-card-banner">
                <img :src="require('@/assets/img/demo_banner.png')" alt="banner">
            </div>
            <div class="publish-card-content">
                推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则推广游戏规则
            </div>
        </div>
        <button class="blue-btn-48">分享链接</button>
    </div>
</template>

<script>
    export default {
        name: "publish"
    }
</script>

<style lang="scss" scoped>
    .publish {
        padding-bottom: 84px;
        height: 100vh;
        background: url("~@/assets/img/publish_bg.png") no-repeat center;
        background-size: cover;
        overflow-y: scroll;
        &-card {
            @include ftb();
            flex-flow: column;
            margin: 0 auto;
            margin-top: 53px;
            padding: 25px 30px;
            padding-bottom: 80px;
            width: 362px;
            min-height: 529px;
            font-size: $font-size-sm;
            color: $color-gary;
            background: url("~@/assets/img/publish_card_bg.png") no-repeat center;
            background-size: cover;
            &-user {
                @include ftb();
                width: 100%;
                &-header {
                    width: 43px;
                    height: 43px;
                    border-radius: 50%;
                }
                &-info {
                    margin-left: 8px;
                    .name {
                        @include height(17px);
                    }
                    .invite {
                        @include height(14px);
                    }
                }
            }
            &-title {
                margin-top: 28px;
                width: 274px;
                min-height: 38px;
                line-height: 19px;
                background: url("~@/assets/img/publish_title_bg.png") no-repeat center;
                background-size: contain;
                p {
                    margin: 0 auto;
                    width: 220px;
                    font-size: $font-size-md;
                    color: $color-important;
                    text-align: center;
                }
            }
            &-banner {
                margin-top: 44px;
                /*width: 291px;*/
                height: 151px;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 4px;
                }
            }
            &-content {
                margin-top: 30px;
                line-height: 17px;
            }
        }
        button {
            position: fixed;
            bottom: 14px;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 316px;
        }
    }
</style>
