<template>
    <div class="my-promotion-item">
        <img class="my-promotion-item-banner" src="http://ww1.sinaimg.cn/large/0069osmDly1fxgv7wf2ypj30jk0cun0d.jpg" alt="">
        <div class="my-promotion-item-info">
            <p class="title">
                课程标题课程标题课程标题课程标题课程标题
            </p>
            <p class="reward">
                邀请奖励：¥3432.00
            </p>
            <div class="btns">
                <button>继续推广</button>
                <button>查看详情</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "promotionItem"
    }
</script>

<style scoped lang="scss">
    .my-promotion-item {
        display: flex;
        padding: 10px;
        background-color: #fff;
        @include border-bottom();
        &-banner {
            width: 160px;
            height: 90px;
        }
        &-info {
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            flex: 1;
            min-width: 0;
            .title {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
</style>
