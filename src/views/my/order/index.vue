<template>
    <div class="my-order">
        <!--<OrderEmpty />-->
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <OrderItem
                v-for="(item, idx) in list"
                :key="idx"
                :class="idx+1 === list.length?'last-item':''"
            />
        </van-list>
    </div>
</template>

<script>
    import OrderEmpty from './orderEmpty'
    import OrderItem from './orderItem'

    export default {
        name: "index",
        components: {
            OrderEmpty,
            OrderItem
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
    .my-order {
        .last-item {
            margin-bottom: 0;
        }
    }
</style>
