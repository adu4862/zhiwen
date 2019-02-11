<template>
    <div class="my">
        <div class="my-head">
            <img class="header"
                 :src="userInfo.headimgurl"
                 alt="head-img">
            <span class="name">
                {{userInfo.nickname}}
            </span>
        </div>
        <div class="my-cell-group">
            <CellItem label="手机绑定" :link="userInfo.phone?'bindPhoneRes':'bindPhone'">
                <i class="icon icon--7" slot="icon"></i>
                <p class="cell-content">{{userInfo.phone?'已验证':'未验证'}}</p>
            </CellItem>
            <CellItem label="推广中心" link="promotion">
                <i class="icon icon--9" slot="icon"></i>
                <p class="cell-content">可提现 <span class="cell-content-withdraw">{{userInfo.balance}}元</span></p>
            </CellItem>
            <CellItem label="我的订单" link="order">
                <i class="icon icon-" slot="icon"></i>
            </CellItem>
            <CellItem label="我的收藏" link="collection">
                <i class="icon icon--14" slot="icon"></i>
            </CellItem>
            <CellItem label="我的余额" link="balance">
                <i class="icon icon-yue" slot="icon"></i>
            </CellItem>
        </div>
        <div class="my-class-list">
            <SectionTitle title="我的课程"/>
            <template v-if="userClassList.length">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                >
                    <template v-for="(item, idx) in userClassList">
                        <ClassItem :class="idx+1 === userClassList.length?'last-item':''"/>
                    </template>
                </van-list>
            </template>
            <ClassEmpty v-else/>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
    import {SectionTitle, CellItem} from '@/components'
    import ClassItem from './classItem'
    import ClassEmpty from './classEmpty'

    export default {
        name: "my",
        components: {
            CellItem,
            SectionTitle,
            ClassItem,
            ClassEmpty
        },
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                userClassList: [],
                bindPhone: 'bindPhone'
            }
        },
        async mounted() {
            this.getUserInfo();
            this.getUserProducts({
                skip: this.skip,
                limit: this.limit
            }).then((res) => {
                this.userClassList = res.list;
            });
        },
        computed: {
            ...mapState(['userInfo'])
        },
        methods: {
            ...mapActions(['userLogin', 'getUserInfo']),
            ...mapActions('my', ['getUserProducts']),
            // onLoad() {
            //     // 模拟异步更新数据
            //     setTimeout(() => {
            //         for (let i = 0; i < 5; i++) {
            //             this.list.push(this.list.length + 1);
            //         }
            //         // 加载状态结束
            //         this.loading = false;
            //
            //         // 数据全部加载完成
            //         if (this.list.length >= 10) {
            //             this.finished = true;
            //         }
            //     }, 500);
            // }
        }
    }
</script>

<style lang="scss" scoped>
    .my {
        &-head {
            padding-top: 18px;
            padding-bottom: 31px;
            display: flex;
            flex-flow: column;
            align-items: center;
            min-height: 160px;
            background: url("../../assets/img/my/head-bg.png") no-repeat center;
            background-size: cover;
            background-color: #fff;
            overflow: hidden;
            .header {
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
            .name {
                margin-top: 15px;
                font-size: 16px;
                font-weight: 600;
                color: #fff;
            }
        }
        &-cell-group {
            margin-bottom: 6px;
            padding: 0 20px;
            background-color: #fff;
            .cell-content {
                margin-right: 9px;
                color: $color-gary;
                &-withdraw {
                    color: $color-lighting;
                }
            }
        }
        &-class-list {
            padding: 14px 20px;
            background-color: #fff;
        }
    }
</style>
