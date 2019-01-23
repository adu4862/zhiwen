<template>
    <div class="exercise">
        <TitlePage />
    </div>
</template>

<script>
    import TitlePage from "./titlePage"
    import TopicPage from "./topicPage"
    import Bar from "./bar"

    export default {
        name: "index",
        components: {
            TitlePage,
            TopicPage,
            Bar,
        }
    }
</script>

<style lang="scss" scoped>
    .exercise {
        position: relative;
        @include flr();
        height: 100vh;
        background-color: $color-link;
        overflow-y: scroll;
    }
</style>
