<template>
    <div class="home">
        <div class="home-swipe">
            <van-swipe :autoplay="3000" indicator-color="white" :height="150">
                <template v-for="item in banners">
                    <van-swipe-item :key="item.id"><img :src="item.uri" alt="banner"></van-swipe-item>
                </template>
            </van-swipe>
        </div>
        <div class="home-classes">
            <SectionTitle title="法律英语课程"/>
            <div class="class-list">
                <template v-for="item in classList.list">
                    <ClassItem :key="item.id" :classDetail="item" @click.native="handleClassItem"/>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import {Dialog, SectionTitle} from "@/components";
    import ClassItem from './classItem'
    import {mapState, mapMutations, mapActions, mapGetters} from "vuex";
    import {getUserInfo} from "@/api/common";
    import {GetRequest, sessionSetItem} from '@/common/util'

    export default {
        name: "home",
        components: {
            ClassItem,
            Dialog,
            SectionTitle,
        },
        data() {
            return {
                banners: [],
                classList: []
            }
        },
        beforeRouteEnter(to, from, next) {
            if (GetRequest().authorization) sessionSetItem('token', GetRequest().authorization);
            next();
        },
        mounted() {
            this.getBanner().then((res) => {
                this.banners = res;
            });
            this.getClassList({
                skip: 0,
                limit: 10
            }).then((res) => {
                this.classList = res;
            });
        },
        methods: {
            ...mapActions('home', ['getBanner', 'getClassList']),
            handleClassItem() {
                this.$router.push({name: 'classDetail', params: {id: '1'}})
            }
        }
    };
</script>

<style lang="scss" scoped>
    .home {
        &-swipe {
            img {
                width: 100%;
                height: 100%;
            }
            .swipe-item {
                text-align: center;
                background-color: cornflowerblue;
            }
        }
        &-classes {
            padding: 13px 20px;
            background-color: #fff;
        }
    }
</style>
