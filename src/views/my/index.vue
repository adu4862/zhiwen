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
            <div class="cell">
                <div class="cell-left">
                    <i class="icon icon--7"></i>
                    <span class="label">手机绑定</span>
                </div>
                <div class="cell-right">
                    <p class="label">未验证</p>
                    <router-link :to="{name: 'bindPhone'}">
                        <i class="cell-right-arrow"></i>
                    </router-link>
                </div>
            </div>
            <div class="cell">
                <div class="cell-left">
                    <i class="icon icon--9"></i>
                    <span class="label">推广中心</span>
                </div>
                <div class="cell-right">
                    <p class="label">可提现 <span class="cell-right-withdraw">110.13元</span></p>
                    <router-link :to="{name: 'promotion'}">
                        <i class="cell-right-arrow"></i>
                    </router-link>
                </div>
            </div>
            <div class="cell">
                <div class="cell-left">
                    <i class="icon icon-"></i>
                    <span class="label">我的订单</span>
                </div>
                <div class="cell-right">
                    <router-link :to="{name: 'order'}">
                        <i class="cell-right-arrow"></i>
                    </router-link>
                </div>
            </div>
            <div class="cell">
                <div class="cell-left">
                    <i class="icon icon--14"></i>
                    <span class="label">我的收藏</span>
                </div>
                <div class="cell-right">
                    <router-link :to="{name: 'collection'}">
                        <i class="cell-right-arrow"></i>
                    </router-link>
                </div>
            </div>
            <div class="cell">
                <div class="cell-left">
                    <i class="icon icon-yue"></i>
                    <span class="label">我的余额</span>
                </div>
                <div class="cell-right">
                    <router-link :to="{name: 'balance'}">
                        <i class="cell-right-arrow"></i>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="my-class-list">
            <SectionTitle
                title="我的课程"
            />
        </div>
    </div>
</template>

<script>
    import {SectionTitle} from '@/components'

    export default {
        components: {
            SectionTitle
        },
        data() {
            return {}
        },
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
            background-size: contain;
            background-color: #fff;
            .header {
                margin-bottom: 15px;
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
            .name {
                font-size: 16px;
                font-weight: 600;
                color: #fff;
            }
        }
        &-cell-group {
            margin-bottom: 6px;
            padding: 0 20px;
            background-color: #fff;
            .cell {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 13px 0 10px 12px;
                @include border-bottom();
                &-left {
                    .icon {
                        display: inline-block;
                        vertical-align: middle;
                        font-size: $text-medium-size;
                        color: #809CFF;
                    }
                    .label {
                        margin-left: 8px;
                        color: #606060;
                    }
                }
                &-right {
                    display: flex;
                    font-size: $text-small-size;
                    .label {
                        margin-right: 9px;
                        color: #909090;
                    }
                    &-withdraw {
                        color: #F09300;
                    }
                    &-arrow {
                        display: inline-block;
                        width: 8px;
                        height: 13px;
                        background: url("../../assets/img/my/cell-arrow.png") no-repeat center center;
                        background-size: contain;
                    }
                }
            }
            .cell:nth-last-child(1):after {
                display: none;
            }
        }
        &-class-list {
            padding: 14px 20px;
            background-color: #fff;
        }
    }
</style>
