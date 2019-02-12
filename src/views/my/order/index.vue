<template>
    <div class="my-order">
        <template v-if="orderList.length">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="getMyOrders"
            >
                <OrderItem
                    v-for="(item, idx) in orderList"
                    :key="idx"
                    :class="idx+1 === orderList.length?'last-item':''"
                    :orderDetail="item"
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

    export default {
        name: "order",
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
            this.getMyOrders();
        },
        methods: {
            ...mapActions('my', ['getUserOrders']),
            getMyOrders() {
                // 加载状态开始
                this.loading = true;
                this.getUserOrders({
                    skip: this.skip,
                    limit: this.limit
                }).then((res) => {
                    this.orderList = res.list;
                    // 加载状态结束
                    this.loading = false;
                    // 数据全部加载完成
                    if (res.list.length < 10) {
                        this.finished = true;
                    }
                });
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
