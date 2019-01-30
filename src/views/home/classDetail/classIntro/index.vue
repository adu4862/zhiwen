<template>
    <div class="class-intro">
        <div class="class-intro-banner">
            <img class="banner-img" :src="classDetail.image_uri" alt="banner">
        </div>
        <div class="class-intro-content">
            <div class="class-intro-content-head">
                <div class="ftb">
                    <i class="icon icon--5" v-if="classDetail.type === 'video'"></i>
                    <i class="icon icon-icon" v-else></i>
                    <p class="title ellipsis">{{classDetail.subject}}</p>
                </div>
                <p class="learned" v-if="classDetail.is_pay">已学习 {{classDetail.learn_count}}/{{classDetail.lesson_count}}节</p>
            </div>
            <div class="class-intro-content-desc">
                {{classDetail.introduction}}
            </div>
            <div class="class-intro-content-info" v-if="!classDetail.is_pay">
                <div class="saled">
                    <p class="people"><span>155</span>人开通</p>
                </div>
                <div class="price">
                    <span class="old-price">¥{{classDetail.old_price | formatWechatPrice}}</span>
                    <span class="now-price">¥{{classDetail.price | formatWechatPrice}}</span>
                </div>
            </div>
            <div class="class-intro-content-info-bought" v-else>
                <div class="left ftb">
                    <img class="icon-punch" :src="require('@/assets/img/icon_punch.png')" alt="打卡icon">
                    已连续打卡{{classDetail.punch_count}}天
                </div>
                <div class="right ftb">
                    收藏
                    <i class="icon icon--4"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

    export default {
        name: "classDetailIntro",
        props: {
            classDetail: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {};
        },
        watch: {
            classDetail(val) {
                console.log(888, val)
            }
        },
        methods: {

        }
    };
</script>

<style lang="scss" scoped>
    .class-intro {
        background-color: #fff;
        &-banner {
            position: relative;
            display: flex;
            .banner-img {
                width: 100%;
                height: 150px;
            }
        }
        &-content {
            padding: 13px 20px 9px 20px;
            &-head {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                color: $color-important;
                font-size: $font-size-md;
                .ftb {
                    overflow: hidden;
                }
                .icon {
                    margin-right: 8px;
                    color: #999;
                }
                .learned {
                    font-size: $font-size-mini;
                    white-space: nowrap;
                    color: $color-link;
                }
            }
            &-desc {
                margin-top: 10px;
                font-size: $font-size-mini;
                //@include ellipsis();
                line-height: 14px;
            }
            &-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 10px;
                .old-price {
                    margin-left: 5px;
                    text-decoration: line-through;
                    font-size: $font-size-mini;
                }
                .now-price {
                    margin-left: 4px;
                    font-size: 20px;
                    font-weight: 600;
                    color: $color-link;
                }
                .people {
                    font-size: $font-size-mini;
                    span {
                        color: $color-link;
                    }
                }
            }
            &-info-bought {
                display: flex;
                justify-content: space-between;
                margin-top: 12px;
                margin-bottom: -6px;
                font-size: $font-size-mini;
                color: $color-link;
                .left {
                    margin-left: -5px;
                    .icon-punch {
                        margin-right: 3px;
                        width: 32px;
                    }
                }
                .right {
                    color: $color-important;
                    .icon {
                        margin-left: 8px;
                        font-size: 21px;
                        color: $color-link;
                    }
                }
            }
        }
    }
</style>
