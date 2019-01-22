<template>
    <div class="exercise">
        <TitlePage />
    </div>
</template>

<script>
    import TitlePage from "./titlePage"
    import Bar from "./bar"

    export default {
        name: "index",
        components: {
            TitlePage,
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
