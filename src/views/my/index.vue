<template>
    <div class="my">
        <div class="my-head">
            <img class="header"
                 src="http://cdn.zmqnw-images.zmqnw.com.cn/2017/12/28/132806689309a1.jpg?width=640&amp;height=640"
                 alt="head-img">
            <span class="name">
                我是袁哲
            </span>
        </div>
        <div class="my-cell-group">
            <CellItem label="手机绑定" link="bindPhone">
                <i class="icon icon--7" slot="icon"></i>
                <p class="cell-content">未验证</p>
            </CellItem>
            <CellItem label="推广中心" link="promotion">
                <i class="icon icon--9" slot="icon"></i>
                <p class="cell-content">可提现 <span class="cell-content-withdraw">110.13元</span></p>
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
            <!--<ClassEmpty />-->
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <template v-for="(item, idx) in list">
                    <ClassItem :class="idx+1 === list.length?'last-item':''"/>
                </template>
            </van-list>
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
                finished: false
            }
        },
        mounted() {
            this.userLogin();
            this.getUserInfo();
        },
        methods: {
            ...mapActions(['userLogin', 'getUserInfo']),
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

<style lang="scss" scoped>
    .my {
        &-head {
            padding-top: 18px;
            padding-bottom: 31px;
            display: flex;
            flex-flow: column;
            align-items: center;
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
