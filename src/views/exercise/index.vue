<template>
    <div class="exercise">
        <TitlePage @on-start="handleStart" @on-analysis="handleAnalysis" v-if="status==='title'"/>
        <TopicPage :type="topicType" v-if="status==='topic'" />
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
                status: 'title',     // title-封面，topic-练习，res-结束
                topicType: '',       // analysis-查看解析
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
                this.status = 'topic';
            },
            handleAnalysis() {
                this.topicType = 'analysis';
                this.status = 'topic';
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
