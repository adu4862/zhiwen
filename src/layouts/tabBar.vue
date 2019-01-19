<template>
    <div class="tab-bar">
        <div
            v-for="(item, idx) in tabs"
            :key="idx"
            :class="['bar-item', tabBar === item.name ? 'active':'']"
            @click="clickHandler(item.name)"
        >
            <i :class="['icon', tabBar === item.name ? item.activeIcon:item.icon]"></i>
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
                        name: "home"
                    },
                    {
                        label: "我的",
                        icon: "icon--11",
                        activeIcon: "icon--12",
                        name: "my"
                    }
                ],
                tabBar: sessionGetItem('tabBar') || 'home'
            };
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
        box-shadow: 0 -2px 2px 0 rgba(101, 135, 248, 0.04);
        .bar-item {
            flex: 1;
            font-size: $font-size-mini;
            text-align: center;
            .icon {
                font-size: 24px;
            }
            .label {
                margin-top: 4px;
            }
        }
        .bar-item.active {
            color: #6587F8;
        }
    }
</style>
