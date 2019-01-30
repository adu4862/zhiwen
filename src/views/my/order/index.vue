<template>
    <div class="my-order">
        <template v-if="orderList.length">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <OrderItem
                    v-for="(item, idx) in orderList"
                    :key="idx"
                    :class="idx+1 === orderList.length?'last-item':''"
                />
            </van-list>
        </template>
        <OrderEmpty v-else />
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
    import OrderEmpty from './orderEmpty'
    import OrderItem from './orderItem'
    import commonMixin from '@/common/mixin'

    export default {
        name: "order",
        mixins: [commonMixin],
        components: {
            OrderEmpty,
            OrderItem
        },
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                orderList: [],
            }
        },
        mounted() {
            this.getUserOrders({
                skip: this.skip,
                limit: this.limit
            }).then((res) => {
                this.orderList = res.list
            });
        },
        methods: {
            ...mapActions('my', ['getUserOrders']),
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
    .my-order {
        .last-item {
            margin-bottom: 0;
        }
    }
</style>
