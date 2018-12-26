<template>
    <div class="my-promotion-detail">
        <div class="my-promotion-detail-info">
            <img class="banner-img" src="http://ww1.sinaimg.cn/large/0069osmDly1fxgv7wf2ypj30jk0cun0d.jpg" alt="">
            <div class="info">
                <p class="title">
                    商品名称商品名称商品名称商品名称商品名称商品名称
                </p>
                <p class="money">
                    总邀请奖励：<span>¥3420.00</span>
                </p>
            </div>
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
    export default {
        name: "promotionItem"
    }
</script>

<style scoped lang="scss">
    .my-promotion-detail {
        > div {
            padding: 10px 15px;
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
                min-width: 0;
                .title {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
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
