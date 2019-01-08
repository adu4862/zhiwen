<template>
    <div class="home">
        <div class="home-swipe">
            <van-swipe :autoplay="3000" indicator-color="#ff6632">
                <van-swipe-item><img :src="require('@/assets/img/demo_banner.png')" alt="banner"></van-swipe-item>
                <van-swipe-item><img :src="require('@/assets/img/demo_banner.png')" alt="banner"></van-swipe-item>
                <van-swipe-item><img :src="require('@/assets/img/demo_banner.png')" alt="banner"></van-swipe-item>
                <van-swipe-item><img :src="require('@/assets/img/demo_banner.png')" alt="banner"></van-swipe-item>
            </van-swipe>
        </div>
        <div class="home-classes">
            <SectionTitle title="法律英语课程" />
            <div class="class-list">
                <ClassItem type="video"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {Dialog, ClassItem, SectionTitle} from "@/components";
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
            .swipe-item {
                text-align: center;
                background-color: cornflowerblue;
            }
        }
        &-classes {
            padding: 13px 20px;
            background-color: #fff;
            .class-list {
                margin-top: 12px;
            }
        }
    }
</style>
