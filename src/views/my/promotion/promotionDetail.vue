<template>
    <div class="my-promotion-detail">
        <div class="my-promotion-detail-info">
            <ClassPanel>
                <div class="info">
                    <p class="title ellipsis">法律英语基础版法律英语基础版法律英语基础版法律英语基础版</p>
                    <p class="reward">
                        总邀请奖励：
                        <span>¥3432.00</span>
                    </p>
                </div>
            </ClassPanel>
        </div>
        <div class="my-promotion-detail-list">
            <p class="title">
                订购人列表
            </p>
            <p class="list-title">
                <span>用户名称</span>
                <span>奖励金额</span>
            </p>
            <p class="list-item">
                <span>xxxxx</span>
                <span>¥ 876</span>
            </p>
            <div class="list-empty">
                暂时还没有人响应您的邀请哦～
            </div>
        </div>
        <div class="my-promotion-detail-btn">
            <button>继续推广</button>
        </div>
    </div>
</template>

<script>
    import {ClassPanel} from '@/components'

    export default {
        name: "promotionItem",
        components: {
            ClassPanel
        }
    }
</script>

<style scoped lang="scss">
    .my-promotion-detail {
        > div {
            padding: 14px 21px;
            background-color: #fff;
        }
        &-info {
            display: flex;
            margin-bottom: 15px;
            .banner-img {
                width: 160px;
                height: 90px;
            }
            .info {
                display: flex;
                flex-flow: column;
                justify-content: space-around;
                margin-left: 10px;
                overflow: hidden;
                .title {
                    font-size: $font-size-md;
                    color: #4A4A4A;
                }
                .reward {
                    margin-top: 19px;
                    font-size: $font-size-sm;
                    color: #666;
                    span {
                        font-size: $font-size-lg;
                        color: #F09300;
                    }
                }
            }
        }
        &-list {
            .title {

            }
            .list-title,
            .list-item {
                display: flex;
                justify-content: space-between;
            }
            .list-empty {
                text-align: center;
            }
        }
        &-btn {
            position: fixed;
            bottom: 20px;
            width: 100%;
            text-align: center;
        }
    }
</style>
