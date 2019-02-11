<template>
    <div class="exercise">
        <TitlePage @on-start="handleStart" v-if="status==='title'"/>
        <TopicPage v-if="status==='topic'"/>
        <ResPage v-if="status==='res'"/>
    </div>
</template>

<script>
    import TitlePage from "./titlePage"
    import TopicPage from "./topicPage"
    import ResPage from "./resPage"
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

    export default {
        name: "Exercise",
        components: {
            TitlePage,
            TopicPage,
            ResPage,
        },
        data() {
            return {
                status: 'title',     // title-封面，topic-联系，res-结束
            }
        },
        mounted() {
            this.getSingleClassInfo({
                id: this.$route.params.id
            });
        },
        methods: {
            ...mapActions('home', ['getSingleClassInfo']),
            handleStart() {
                this.status = 'topic'
            }
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
