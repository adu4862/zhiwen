<template>
    <div class="home">
        <div class="home-swipe">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item><img :src="require('@/assets/img/demo_banner.png')" alt="banner"></van-swipe-item>
                <van-swipe-item><img :src="require('@/assets/img/demo_banner.png')" alt="banner"></van-swipe-item>
                <van-swipe-item><img :src="require('@/assets/img/demo_banner.png')" alt="banner"></van-swipe-item>
                <van-swipe-item><img :src="require('@/assets/img/demo_banner.png')" alt="banner"></van-swipe-item>
            </van-swipe>
        </div>
        <div class="home-classes">
            <SectionTitle title="法律英语课程" />
            <div class="class-list">
                <div class="class-list-item">
                    <ClassItem type="voice"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Dialog, SectionTitle} from "@/components";
    import ClassItem from './classItem'
    import {mapState, mapMutations, mapActions, mapGetters} from "vuex";
    import {getUserInfo} from "@/api/common";

    export default {
        name: "home",
        components: {
            ClassItem,
            Dialog,
            SectionTitle,
        },
        data() {
            return {
                showDialog: false,
            };
        },
        computed: {
            ...mapState("user", ["userInfo", "rank"]),
            ...mapGetters("user", ["getUserInfo"]),
        },
        mounted() {
            // getUserInfo().then(res => {
            // 	console.log("proxy", res);
            // });
            this.getRank();
        },
        methods: {
            ...mapActions("user", ["changeUserInfo", "getRank"]),
            timeStart() {
            },
            timeEnd() {
            },
            handleDialog() {
                this.showDialog = true;
            },
            handleI18n() {
                this.$i18n.locale = this.$i18n.locale === "en-US" ? "zh-CN" : "en-US";
            }
        }
    };
</script>

<style lang="scss" scoped>
    .home {
        &-swipe {
            img {
                width: 100%;
            }
            .swipe-item {
                text-align: center;
                background-color: cornflowerblue;
            }
        }
        &-classes {
            padding: 13px 20px;
            background-color: #fff;
            .class-list {
                &-item {
                    padding: 11px 0;
                    @include border-bottom();
                }
                &-item:nth-last-child(1):after {
                    background: initial;
                }
            }
        }
    }
</style>
