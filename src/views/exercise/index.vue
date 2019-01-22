<template>
    <div class="exercise">
        <TitlePage />
    </div>
</template>

<script>
    import TitlePage from "./titlePage"

    export default {
        name: "index",
        components: {
            TitlePage,
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
