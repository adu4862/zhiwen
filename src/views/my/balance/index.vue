<template>
    <div class="my-balance">
        <div class="my-balance-account">
            <p>我的余额（元）</p>
            <p>8789.00</p>
        </div>
        <div class="my-balance-income">
            <div class="my-balance-income-item">
                <p>今日收益（元）</p>
                <p>878.00</p>
            </div>
            <div class="my-balance-income-item">
                <p>累计收益（元）</p>
                <p>18789.00</p>
            </div>
        </div>
        <div class="my-balance-btns">
            <button>提现</button>
            <button>查看提现记录</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
    .my-balance {
        padding: 15px 20px;
        text-align: center;
        background-color: #fff;
        &-account {

        }
        &-income {
            display: flex;
            justify-content: space-between;
        }
        &-btns {
            display: flex;
            flex-flow: column;
        }
    }
</style>
