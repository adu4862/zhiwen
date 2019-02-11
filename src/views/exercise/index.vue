<template>
    <div class="exercise">
        <TitlePage />
    </div>
</template>

<script>
    import TitlePage from "./titlePage"
    import TopicPage from "./topicPage"
    import Bar from "./bar"
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

    export default {
        name: "Exercise",
        components: {
            TitlePage,
            TopicPage,
            Bar,
        },
        mounted() {
            this.getSingleClassInfo({
                id: this.$route.params.id
            });
        },
        methods: {
            ...mapActions('home', ['getSingleClassInfo'])
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
