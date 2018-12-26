<template>
    <div class="my-balance-withdraw">
        <div class="my-balance-withdraw-balance">
            <p class="title">微信提现</p>
            <div>
                <p>您当前可提现金额（元）</p>
                <p>8789.00</p>
            </div>
        </div>
        <div class="my-balance-withdraw-input">
            <P>提现金额（元）</P>
            <div class="action-container">
                <div class="input-container">
                    <input type="text" placeholder="123">
                </div>
                <button>全部提现</button>
            </div>
            <div class="btns">
                <button>确认提现</button>
                <p>7个工作日内到账</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
    .my-balance-withdraw {
        > div {
            padding: 15px;
            background-color: #fff;
        }
        &-balance {
            margin-bottom: 15px;
        }
        &-input {
            .action-container {
                display: flex;
                justify-content: space-around;
                margin: 20px auto;
                width: 100%;
                .input-container {
                    display: flex;
                    width: 220px;
                    height: 30px;
                    padding: 1px;
                    @include border();
                    input {
                        flex: 1;
                        z-index: 9;
                        border: initial;
                    }
                }
            }
            .btns {
                text-align: center;
                p {
                    margin-top: 10px;
                }
            }
        }
    }
</style>
