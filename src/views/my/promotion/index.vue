<template>
    <div class="my-promotion">
        <div class="my-promotion-withdraw">
            <div class="balance">
                <div class="money-item">
                    <p>今日收益（元）</p>
                    <p>878.00</p>
                </div>
                <div class="money-item">
                    <p>累计收益（元）</p>
                    <p>1878.00</p>
                </div>
            </div>
            <div class="withdraw-btn">
                <button>提现</button>
            </div>
        </div>
        <div class="my-promotion-title">
            推广订单
        </div>
        <div class="my-promotion-list">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <PromotionItem
                    v-for="(item, idx) in list"
                    :class="idx+1 === list.length?'last-item':''"
                />
            </van-list>
        </div>
    </div>
</template>

<script>
    import PromotionItem from './promotionItem'

    export default {
        components: {
            PromotionItem,
        },
        data() {
            return {
                list: [],
                loading: false,
                finished: false
            }
        },
        methods: {
            onLoad() {
                // 模拟异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 5; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 10) {
                        this.finished = true;
                    }
                }, 500);
            }
        }
    }
</script>

<style scoped lang="scss">
    .my-promotion {
        &-withdraw {
            padding: 20px;
            background-color: #fff;
            .balance {
                display: flex;
                justify-content: space-around;
                text-align: center;
            }
            .withdraw-btn {
                display: flex;
                justify-content: flex-end;
            }
        }
        &-title {
            padding: 10px;
            background-color: #F5F5F5;
        }
        &-list {
            .last-item:after {
                background-color: initial;
            }
        }
    }
</style>
