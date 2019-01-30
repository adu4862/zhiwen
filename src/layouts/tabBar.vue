<template>
    <div class="tab-bar">
        <div
            v-for="(item, idx) in tabs"
            :key="idx"
            :class="['bar-item', tabBar === item.name ? 'active':'']"
            @click="clickHandler(item.name)"
        >
            <i :class="['icon', tabBar === item.name ? item.activeIcon:item.icon]"></i>
            <!--<img class="icon" :src="tabBar === item.name ? item.activeImgSrc: item.imgSrc" alt="">-->
            <div class="label">{{item.label}}</div>
        </div>
    </div>
</template>

<script>
    import {sessionGetItem} from "../common/util";

    export default {
        data() {
            return {
                tabs: [
                    {
                        label: "首页",
                        icon: "icon--10",
                        activeIcon: "icon--13",
                        imgSrc: require('@/assets/img/icon_home.png'),
                        activeImgSrc: require('@/assets/img/icon_home_active.png'),
                        name: "home"
                    },
                    {
                        label: "我的",
                        icon: "icon--11",
                        activeIcon: "icon--12",
                        imgSrc: require('@/assets/img/icon_my.png'),
                        activeImgSrc: require('@/assets/img/icon_my_active.png'),
                        name: "my"
                    }
                ],
                tabBar: sessionGetItem('tabBar') || 'home',
            };
        },
        watch: {
            '$route' (to, from) {
                if (["home", "my"].includes(to.name)) {
                    this.tabBar = to.name;
                }
            }
        },
        methods: {
            clickHandler(routerName) {
                this.tabBar = routerName;
                this.$router.push({name: routerName});
            }
        }
    };
</script>

<style lang="scss" scoped>
    .tab-bar {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 56px;
        background-color: #fff;
        box-shadow: 0 -2px 2px 0 rgba(101, 135, 248, 0.04);
        .bar-item {
            @include ftb();
            flex-flow: column;
            flex: 1;
            font-size: $font-size-mini;
            text-align: center;
            .icon {
                width: 28px;
                height: 28px;
                font-size: 28px;
            }
            .label {
                margin-top: 4px;
            }
        }
        .bar-item.active {
            color: $color-link;
        }
    }
</style>
