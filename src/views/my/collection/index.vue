<template>
    <div class="my-collection">
        <!--<CollectionEmpty />-->
        <div :class="['my-collection-head', isSelect?'':'fe']">
            <div class="select-all" v-if="isSelect">
                <van-checkbox v-model="selectAll"></van-checkbox>
                <span>全选</span>
            </div>
            <div class="func" @click="handelSelect">
                <p v-if="!isSelect">
                    管理
                    <i data-icon="a" class="icon"></i>
                </p>
                <p v-if="isSelect">
                    完成
                </p>
            </div>
        </div>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <CollectionItem
                v-for="(item, idx) in list"
                :key="idx"
                :class="idx+1 === list.length?'last-item':''"
                :isSelect="isSelect"
                :selectAll="selectAll"
            />
        </van-list>
    </div>
</template>

<script>
    import CollectionEmpty from './collectionEmpty'
    import CollectionItem from './collectionItem'

    export default {
        components: {
            CollectionEmpty,
            CollectionItem,
        },
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                isSelect: false,
                selectAll: false
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
            },
            handelSelect() {
                this.isSelect = !this.isSelect;
                if (!this.isSelect) {
                    console.log('完成')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .my-collection {
        .fe {
            justify-content: flex-end;
        }
        &-head {
            display: flex;
            justify-content: space-between;
            margin: 6px 0;
            padding: 0 21px;
            height: 33px;
            line-height: 33px;
            background: #fff;
            font-size: $font-size-sm;
            color: #909090;
            .func {
                color: #6587F8;
            }
            .icon {
                font-size: $font-size-lg;
                vertical-align: sub;
            }
            .select-all {
                display: flex;
                align-items: center;
                font-size: $font-size-sm;
                span {
                    margin-left: 11px;
                }
            }
        }
    }
</style>
