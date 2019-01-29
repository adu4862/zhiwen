<template>
    <div class="class-bar">
        <div class="class-bar-features" v-if="!classDetail.is_pay">
            <div class="class-bar-features-item" @click="handleCollect">
                <i class="icon icon--4"></i>
                收藏
            </div>
            <div class="class-bar-features-item">
                <i class="icon icon--1"></i>
                砍价
            </div>
        </div>
        <button :class="['blue-btn-48', 'class-bar-btn', classDetail.is_pay?'payed-btn':'']">¥299购买课程</button>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

    export default {
        name: "classDetailTableBar",
        props: {
            classDetail: {
                type: Object,
                default: {}
            }
        },
        methods: {
            ...mapActions('home', ['setClassCollection']),
            handleCollect() {
                this.setClassCollection({
                    product_id: ''
                })
                // this.$toast({
                //     msg: '收藏成功',
                //     type: 'collection',
                //     // duration: 20000
                // })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .class-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        @include fct();
        height: 70px;
        background-color: #fff;
        &-features {
            @include fct();
            flex: 1;
            &-item {
                @include fct();
                padding: 0 20px;
                flex-flow: column;
                font-size: $font-size-mini;
                color: #606060;
                .icon {
                    margin-bottom: 4px;
                    font-size: 24px;
                    color: $color-link;
                }
                &:nth-child(1) {
                    border-right: 1px solid rgba(101, 135, 248, 0.36);
                }
            }
        }
        &-btn {
            margin: 0 18px 0 10px;
            width: 200px;
        }
        .payed-btn {
            width: 316px;
        }
    }
</style>
