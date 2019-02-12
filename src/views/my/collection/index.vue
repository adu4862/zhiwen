<template>
    <div class="my-collection">
        <template v-if="collectionList.length">
            <div class="my-collection-head">
                <div class="select" v-if="isSelect">
                    <van-checkbox class="check-box" v-model="selectAll"><span>全选</span></van-checkbox>
                </div>
                <div class="option ftb" @click="handelSelect">
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
                @load="getMyCollection"
            >
                <CollectionItem
                    v-for="(item, idx) in collectionList"
                    :key="idx"
                    :collectionDetail="item"
                    :class="idx+1 === list.length?'last-item':''"
                    :isSelect="isSelect"
                    :selectAll="selectAll"
                    @addDelete="addDelete"
                    @removeDelete="removeDelete"
                />
            </van-list>
            <div class="my-collection-remove" v-if="isSelect" @click="handleRemove">
                <i class="delete-icon"></i>
                移除
            </div>
        </template>
        <CollectionEmpty v-else />
        <Modal
            :showMask="true"
            :isVisible="isVisible"
            title="移除"
            content="所选课程将从我的收藏移除"
            cancel="以后再说"
            confirm="确认移除"
            @on-cancel="handleCancel"
            @on-confirm="handelConfirm"
        />
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
    import CollectionEmpty from './collectionEmpty'
    import CollectionItem from './collectionItem'
    import {Modal} from "@/components"

    export default {
        name: "collection",
        components: {
            CollectionEmpty,
            CollectionItem,
            Modal,
        },
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                isSelect: false,
                selectAll: false,
                isVisible: false,
                collectionList: [],
                deleteList: [],
            }
        },
        mounted() {
            this.getMyCollection();
        },
        watch: {
            deleteList(val) {
                console.log(val)
            }
        },
        methods: {
            ...mapActions('my', ['getUserCollections', 'deleteUserCollections']),
            getMyCollection() {
                // 加载状态开始
                this.loading = true;
                this.getUserCollections({
                    skip: this.skip,
                    limit: this.limit
                }).then((res) => {
                    this.collectionList = res.list;
                    // 加载状态结束
                    this.loading = false;
                    // 数据全部加载完成
                    if (res.list.length < 10) {
                        this.finished = true;
                    }
                });
            },
            handelSelect() {
                this.isSelect = !this.isSelect;
                if (!this.isSelect) {
                    console.log('完成')
                }
            },
            // 添加删除课程
            addDelete(id) {
                this.deleteList.push(id);
            },
            // 减少删除课程
            removeDelete(id) {
                let idx = this.deleteList.indexOf(id);
                this.deleteList.splice(idx, 1)
            },
            handleRemove() {
                this.isVisible = true;
            },
            handleCancel() {
                this.isVisible = false;
            },
            handelConfirm() {
                if (!this.deleteList.length) {
                    this.$toast({
                        msg: '请选择课程'
                    });
                    return
                }
                let success = 0;
                this.deleteList.map((item) => {
                    this.deleteUserCollections({
                        id: item
                    }).then((res) => {
                        if (res) success++;
                        if (success === this.deleteList.length) {
                            this.handleCancel();
                            this.$toast({
                                msg: '删除成功'
                            });
                            this.getMyCollection();
                        }
                    })
                })
            },
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
            font-weight: 500;
            color: #222222;
            .select {
                float: left;
                display: flex;
                align-items: center;
                height: 100%;
                font-size: $font-size-sm;
                span {
                    margin-left: -4px;
                    font-size: $font-size-sm;
                }
            }
            .option {
                float: right;
                .icon {
                    margin-left: 4px;
                    line-height: 33px;
                    font-size: $font-size-lg;
                    vertical-align: middle;
                }
            }
            /deep/ .van-checkbox__icon {
                transform: scale(.8);
            }
        }
        &-remove {
            @include fct();
            position: fixed;
            bottom: 0;
            width: 100%;
            @include height(50px);
            color: $color-gary;
            background-color: #fff;
            box-shadow: 0 2px 4px 0 rgba(101, 135, 248, 0.11);
            .delete-icon {
                margin-right: 4px;
                display: inline-block;
                width: 30px;
                height: 30px;
                background: url("../../../assets/img/my/collection/icon_delete.png") no-repeat center;
                background-size: contain;
            }
        }
    }
</style>
