<template>
    <div class="exercise">
        <TopicPage />
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
        @include fct();
        height: 100vh;
        background-color: $color-link;
    }
</style>
