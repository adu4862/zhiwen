<template>
    <div class="my-balance-records">
        <div class="my-balance-records-title">
            提现记录
        </div>
        <RecordEmpty />
        <!--<div class="my-balance-records-list">-->
            <!--<van-list-->
                <!--v-model="loading"-->
                <!--:finished="finished"-->
                <!--finished-text="没有更多了"-->
                <!--@load="onLoad"-->
            <!--&gt;-->
                <!--<RecordItem-->
                    <!--v-for="(item, idx) in list"-->
                    <!--:class="[idx+1 === list.length?'last-item':'']"-->
                <!--/>-->
            <!--</van-list>-->
        <!--</div>-->
    </div>
</template>

<script>
    import RecordEmpty from './recordEmpty'
    import RecordItem from './recordItem'

    export default {
        components: {
            RecordEmpty,
            RecordItem,
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
    .my-balance-records {
        display: flex;
        flex-flow: column;
        height: 100%;
        &-title {
            padding: 15px 20px;
            @include border-bottom();
            background-color: #fff;
        }
        &-list {
            background-color: #fff;
            .last-item:after {
                background-color: initial;
            }
        }
    }
</style>
