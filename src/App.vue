<template>
    <div id="app">
        <Layout>
            <router-view/>
        </Layout>
    </div>
</template>

<script>
    import Layout from "@/layouts";

    export default {
        name: "App",
        components: {
            Layout
        }
    };
</script>

<style lang="scss">
    @import "./style/reset.scss";
    @import "./style/common.scss";
    @import "~@/assets/iconfont/styles.css";

    #app {
        font-size: $font-size-base;
        font-weight: $font-weight-base;
        color: $color-common;
        background-color: $color-bg;
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "SF UI Text",
        "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
        -webkit-font-smoothing: antialiased;
    }
</style>
