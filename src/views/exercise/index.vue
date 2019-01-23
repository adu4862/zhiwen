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
        name: "Exercise",
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
        height: 100vh;
        background-color: $color-link;
        overflow-y: scroll;
        > div {
            margin: 0 auto;
        }
    }
</style>
