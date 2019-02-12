<template>
    <div class="my-balance-withdraw">
        <div class="my-balance-withdraw-balance">
            <p class="title">
                <span>微信提现</span>
                <span @click="handleRecords">提现记录</span>
            </p>
            <div class="balance">
                <p>您当前可提现金额（元）</p>
                <p>{{userInfo.balance | formatFloat}}</p>
            </div>
        </div>
        <div class="my-balance-withdraw-form">
            <p class="title">提现金额（元）</p>
            <div class="input-container">
                <span class="unit">¥</span>
                <input v-model="withdrawAccount" type="number">
            </div>
            <p class="withdraw-tips">
                当前可提现金额{{userInfo.balance | formatFloat}}元，<span @click="handleAll(userInfo.balance)">全部提现</span>
            </p>
        </div>
        <button class="my-balance-withdraw-btn blue-btn-48" @click="handleWithdraw">确认提现</button>
    </div>
</template>

<script>
    import NP from 'number-precision'
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

    export default {
        name: "balanceWithdraw",
        data() {
            return {
                withdrawAccount: ''
            }
        },
        computed: {
            ...mapState(['userInfo'])
        },
        methods: {
            ...mapActions('my', ['withDraw']),
            // 全部提现
            handleAll(balance) {
                this.withdrawAccount = NP.divide(balance, 100);
            },
            // 查看提现记录
            handleRecords() {
                this.$router.push({name: 'balanceRecord'})
            },
            // 提现
            handleWithdraw() {
                this.withDraw({
                    price: NP.times(this.withdrawAccount, 100),
                    true_name: this.userInfo.username
                })
            }
        }
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
                color: $color-gary;
                span:nth-child(1) {
                    font-size: $font-size-md;
                    font-weight: 500;
                    color: $color-important;
                }
            }
            .balance {
                margin-top: 45px;
                p:nth-child(2) {
                    margin-top: 4px;
                    font-size: 32px;
                    color: $color-lighting;
                }
            }
        }
        &-form {
            margin-top: 8px;
            padding: 12px 19px 21px 19px;
            .title {
                color: $color-gary;
            }
            .input-container {
                margin-top: 14px;
                padding: 4px 0;
                display: flex;
                @include border-bottom();
                .unit {
                    font-size: 28px;
                    color: $color-important;
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
                color: $color-gary;
                span {
                    color: $color-link;
                }
            }
        }
        &-btn {
            position: absolute;
            bottom: 15px;
        }
    }
</style>
