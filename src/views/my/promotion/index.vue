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
                <button class="blue-btn-48">提现</button>
            </div>
        </div>
        <div class="my-promotion-list">
            <SectionTitle title="推广订单"/>
            <!--<PromotionEmpty />-->
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <PromotionItem
                    v-for="(item, idx) in list"
                    :key="idx"
                    :class="idx+1 === list.length?'last-item':''"
                />
            </van-list>
        </div>
    </div>
</template>

<script>
    import PromotionItem from './promotionItem'
    import PromotionEmpty from './promotionEmpty'
    import {SectionTitle} from '@/components'

    export default {
        name: "promotion",
        components: {
            PromotionEmpty,
            PromotionItem,
            SectionTitle,
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
            height: 157px;
            background: url("../../../assets/img/my/promotion/bg.png") no-repeat center;
            background-size: cover;
            overflow: hidden;
            .balance {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
                padding: 0 34px;
                text-align: center;
                font-size: $font-size-sm;
                color: $color-gary;
                .money-item p:nth-child(2) {
                    margin-top: 10px;
                    height: 42px;
                    line-height: 42px;
                    font-size: 30px;
                    color: $color-lighting;
                }
            }
            .withdraw-btn {
                display: flex;
                justify-content: flex-end;
                margin-top: 20px;
                padding: 0 34px;
                button {
                    width: 70px;
                    height: 28px;
                    line-height: 26px;
                    font-size: $font-size-base;
                }
            }
        }
        &-list {
            margin-top: 8px;
            padding: 18px 20px;
            background-color: #fff;
            .last-item:after {
                background-color: initial;
            }
        }
    }
</style>
