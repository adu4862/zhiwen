<template>
    <div class="class-detail">
        <EarnMoney @click.native="handleTest" />
        <ClassIntro :classDetail="classDetail"/>
        <ClassTable :classDetail="classDetail"/>
        <ClassBar :classDetail="classDetail"/>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
    import ClassIntro from "./classIntro/index";
    import ClassTable from "./classTable/index";
    import ClassBar from "./classBar/index";
    import {EarnMoney} from "@/components";

    export default {
        name: "classDetail",
        components: {
            ClassIntro,
            ClassTable,
            ClassBar,
            EarnMoney,
        },
        data() {
            return {
            };
        },
        computed: {
            ...mapState('home', ['classDetail'])
        },
        mounted() {
            this.getClassDetail(this.$route.params.id)
        },
        methods: {
            ...mapActions('home', ['getClassDetail']),
            handleTest() {
                this.$router.push({
                    name: 'publish',
                    query: {
                        productId: this.classDetail.id
                    }
                })
                // location.href = "#/publish" ;
            }
        }
    };
</script>

<style lang="scss" scoped>
    .class-detail {
        padding-bottom: 90px;
    }
</style>
