<template>
    <div class="home">
        <div class="home-swipe">
            <van-swipe :autoplay="3000" indicator-color="#ff6632" :height="180">
                <van-swipe-item><div class="swipe-item">1</div></van-swipe-item>
                <van-swipe-item><div class="swipe-item">2</div></van-swipe-item>
                <van-swipe-item><div class="swipe-item">3</div></van-swipe-item>
                <van-swipe-item><div class="swipe-item">4</div></van-swipe-item>
            </van-swipe>
        </div>
        <ClassItem/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import ClassItem from "./classItem";
    import Dialog from "@/components/dialog";
    import {mapState, mapMutations, mapActions, mapGetters} from "vuex";
    import {getUserInfo} from "@/api/common";

    export default {
        name: "home",
        components: {
            ClassItem,
            Dialog,
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
    @import "~@/assets/iconfont/iconfont.css";

    .home {
        p {
            margin: 20px auto;
        }
        &-swipe {
            .swipe-item {
                line-height: 180px;
                text-align: center;
                background-color: cornflowerblue;
            }
        }
        .border {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100px;
            height: 200px;
            margin: 20px auto;
            position: relative;
            @include border();
        }
    }

    .dialog-content {
        width: 300px;
        height: 180px;
        background-color: #fff;
    }
</style>
