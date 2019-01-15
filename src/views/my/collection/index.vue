<template>
    <div class="my-collection">
        <!--<CollectionEmpty />-->
        <div class="my-collection-head">
            <div class="left" v-if="isSelect">
                <van-checkbox v-model="selectAll"></van-checkbox>
                <span>全选</span>
            </div>
            <div class="right" @click="handelSelect">
                <template v-if="!isSelect">
                    管理
                    <i data-icon="a" class="icon"></i>
                </template>
                <template v-else>
                    完成
                </template>
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
        .van-checkbox {
            display: flex;
        }
        &-head {
            margin: 6px 0;
            padding: 0 21px;
            height: 33px;
            line-height: 33px;
            background: #fff;
            font-size: $font-size-sm;
            color: #909090;
            .left {
                display: flex;
                align-items: center;
                line-height: 33px;

                font-size: $font-size-sm;
                span {
                    margin-left: 11px;
                }
            }
            .right {
                color: #6587F8;
                .icon {
                    font-size: $font-size-lg;
                    vertical-align: sub;
                }
            }
        }
    }
</style>
