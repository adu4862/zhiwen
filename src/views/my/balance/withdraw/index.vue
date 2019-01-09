<template>
    <div class="my-balance-withdraw">
        <div class="my-balance-withdraw-balance">
            <p class="title">
                <span>微信提现</span>
                <span>提现记录</span>
            </p>
            <div class="balance">
                <p>您当前可提现金额（元）</p>
                <p>8789.00</p>
            </div>
        </div>
        <div class="my-balance-withdraw-form">
            <p class="title">提现金额（元）</p>
            <div class="input-container">
                <span class="unit">¥</span>
                <input type="number">
            </div>
            <p class="withdraw-tips">
                当前可提现金额8789.00元，<span>全部提现</span>
            </p>
        </div>
        <button class="my-balance-withdraw-btn blue-btn-48">确认提现</button>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
    .my-balance-withdraw {
        position: relative;
        display: flex;
        flex-flow: column;
        align-items: center;
        height: 100vh;
        > div {
            width: 100%;
            background-color: #fff;
        }
        &-balance {
            padding: 14px 16px 21px 16px;
            .title {
                display: flex;
                justify-content: space-between;
                color: #666;
                span:nth-child(1) {
                    font-size: $font-size-md;
                    color: #4A4A4A;
                }
            }
            .balance {
                margin-top: 45px;
                p:nth-child(2) {
                    margin-top: 4px;
                    font-size: 32px;
                    color: #F09300;
                }
            }
        }
        &-form {
            margin-top: 8px;
            padding: 12px 19px 21px 19px;
            .title {
                color: #4A4A4A;
            }
            .input-container {
                margin-top: 14px;
                padding: 4px 0;
                display: flex;
                @include border-bottom();
                .unit {
                    font-size: 28px;
                    color: #666;
                }
                input {
                    flex: 1;
                    padding-left: 10px;
                    font-size: $font-size-lg;
                }
            }
            .withdraw-tips {
                margin-top: 8px;
                font-size: $font-size-mini;
                color: #909090;
                span {
                    color: #6587F8;
                }
            }
        }
        &-btn {
            position: absolute;
            bottom: 15px;
        }
    }
</style>
