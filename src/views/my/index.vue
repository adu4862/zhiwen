<template>
    <div class="my">
        <div class="my-head">
            <img class="img"
                 src="http://cdn.zmqnw-images.zmqnw.com.cn/2017/12/28/132806689309a1.jpg?width=640&amp;height=640"
                 alt="head-img">
            我是袁哲
        </div>
        <SectionTitle
            title="我的课程"
        />
        <div class="my-cell-group">
            <div class="cell">
                <div class="cell-left">
                    <i class="iconfont icon-weibo"></i>
                    <span class="label">手机绑定</span>
                </div>
                <div class="cell-right">
                    <span class="label">未验证</span>
                    >
                </div>
            </div>
            <div class="cell">
                <div class="cell-left">
                    <i class="iconfont icon-weibo"></i>
                    <span class="label">推广中心</span>
                </div>
                <div class="cell-right">
                    <span class="label">未验证</span>
                    >
                </div>
            </div>
            <div class="cell">
                <div class="cell-left">
                    <i class="iconfont icon-weibo"></i>
                    <span class="label">我的订单</span>
                </div>
                <div class="cell-right">
                    >
                </div>
            </div>
            <div class="cell">
                <div class="cell-left">
                    <i class="iconfont icon-weibo"></i>
                    <span class="label">我的收藏</span>
                </div>
                <div class="cell-right">
                    >
                </div>
            </div>
            <div class="cell">
                <div class="cell-left">
                    <i class="iconfont icon-weibo"></i>
                    <span class="label">我的余额</span>
                </div>
                <div class="cell-right">
                    >
                </div>
            </div>
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
            padding-top: 50px;
            padding-bottom: 50px;
            display: flex;
            flex-flow: column;
            align-items: center;
            img {
                margin-bottom: 15px;
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
        }
        &-cell-group {
            padding: 0 20px;
            background-color: #fff;
            .cell {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 13px 0 10px 12px;
                @include border-bottom($border-color: rgba(101, 135, 248, 0.36));
                &-left {
                    .label {
                        margin-left: 11px;
                        color: #606060;
                    }
                }
                &-right {
                    .label {
                        margin-right: 9px;
                        color: #909090;
                    }
                }
            }
            .cell:nth-last-child(1):after {
                display: none;
            }
        }
    }
</style>
