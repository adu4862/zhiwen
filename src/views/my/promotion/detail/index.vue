<template>
    <div class="my-promotion-detail">
        <div class="my-promotion-detail-info">
            <ClassPanel>
                <ClassBanner slot="banner"/>
                <div class="class-panel-info">
                    <p class="title ellipsis">法律英语基础版法法律英语基础版法法律英语基础版法</p>
                    <p class="reward">
                        总邀请奖励：
                        <span>¥3432.00</span>
                    </p>
                </div>
            </ClassPanel>
        </div>
        <div class="my-promotion-detail-list">
            <SectionTitle title="订购人列表" />
            <!-- 有数据 -->
            <p class="list-title">
                <span>用户名称</span>
                <span>奖励金额</span>
            </p>
            <p class="list-item">
                <span>KKKKK</span>
                <span>¥ 876</span>
            </p>
            <!-- 无数据 -->
            <!--<DetailEmpty />-->
        </div>
        <div class="my-promotion-detail-btn">
            <button class="blue-btn-48">继续推广</button>
        </div>
    </div>
</template>

<script>
    import {ClassBanner, ClassPanel, SectionTitle} from '@/components'
    import DetailEmpty from './detailEmpty'

    export default {
        name: "promotionDetail",
        components: {
            ClassBanner,
            ClassPanel,
            SectionTitle,
            DetailEmpty
        }
    }
</script>

<style scoped lang="scss">
    .my-promotion-detail {
        > div {
            padding: 14px 21px;
            background-color: #fff;
        }
        &-info {
            display: flex;
            margin-bottom: 15px;
            .banner-img {
                width: 160px;
                height: 90px;
            }
            .class-panel-info {
                display: flex;
                flex-flow: column;
                flex: 1;
                overflow: hidden;
                .title {
                    font-size: $font-size-md;
                    color: $color-important;
                }
                .reward {
                    margin-top: 19px;
                    font-size: $font-size-sm;
                    span {
                        font-size: $font-size-lg;
                        color: $color-lighting;
                    }
                }
            }
        }
        &-list {
            color: $color-important;
            .list-title,
            .list-item {
                display: flex;
                justify-content: space-between;
                font-size: $font-size-sm;
                color: #666;
            }
            .list-title {
                margin-top: 14px;
                margin-bottom: 1px;
            }
            .list-item {
                margin-top: 5px;
                span:nth-child(2) {
                    font-weight: bold;
                }
            }
            .list-empty {
                text-align: center;
            }
        }
        &-btn {
            position: fixed;
            bottom: 0;
            @include ftb();
            width: 100%;
            height: 70px;
            text-align: center;
        }
    }
</style>
