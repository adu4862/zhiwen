<template>
    <div class="my-balance">
        <div class="my-balance-wrap">
            <div :class="['container', isDisabled?'container-disabled':'container-normal']">
                <div class="account">
                    <p class="title">我的余额（元）</p>
                    <p class="balance">{{userInfo.price | formatFloat}}</p>
                </div>
                <div class="income">
                    <div class="income-item">
                        <p class="title">今日收益（元）</p>
                        <p class="balance">{{balance.today_amount | formatFloat}}</p>
                    </div>
                    <div class="income-item">
                        <p class="title">累计收益（元）</p>
                        <p class="balance">{{balance.amount | formatFloat}}</p>
                    </div>
                </div>
            </div>
        </div>
        <button
            :class="['blue-btn-48', 'my-balance-btn', isDisabled?'disabled-btn':'']"
            :disabled="isDisabled"
            @click="handleWithdraw"
        >
            提现
        </button>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

    export default {
        name: "balance",
        data() {
            return {
                balance: {}
            }
        },
        computed: {
            ...mapState(['userInfo']),
            isDisabled() {
                if (!this.userInfo.price) return true;
                return false;
            }
        },
        mounted() {
            this.getUserRewardAmount().then((res) => {
                this.balance = res;
            });
        },
        methods: {
            ...mapActions('my', ['getUserRewardAmount']),
            handleWithdraw() {
                this.$router.push({name: 'balanceWithdraw'})
            }
        }
    }
</script>

<style scoped lang="scss">
    .my-balance {
        display: flex;
        flex-flow: column;
        align-items: center;
        text-align: center;
        &-wrap {
            position: relative;
            padding: 15px 20px;
            width: 100%;
            height: 232px;
            text-align: center;
            background: url("../../../assets/img/my/balance/bg.png") no-repeat center;
            background-size: cover;
            .container {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                color: $color-gary;
                .account {
                    margin-top: 56px;
                    margin-bottom: 34px;
                    .title {
                        font-size: $font-size-md;
                    }
                    .balance {
                        margin-top: 4px;
                        @include height(47px);
                        font-size: 40px;
                        font-weight: 500;
                        color: $color-lighting;
                    }
                }
                .income {
                    display: flex;
                    justify-content: space-around;
                    font-weight: 300;
                    .title {
                        font-size: $font-size-sm;
                    }
                    .balance {
                        margin-top: 5px;
                        @include height(25px);
                        font-size: 18px;
                        color: $color-lighting;
                    }
                }
            }
            .container-disabled {
                background: rgba(255, 255, 255, .3);
            }
            .container-normal {
                background: rgba(255, 255, 255, 0);
            }
        }
        &-btn {
            margin-top: 60px;
        }
    }
</style>
