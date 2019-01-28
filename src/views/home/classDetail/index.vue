<template>
    <div class="class-detail">
        <EarnMoney />
        <ClassIntro/>
        <ClassTable/>
        <ClassBar/>
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
            return {};
        },
        mounted() {
            this.getClassDetail(1);
        },
        methods: {
            ...mapActions('home', ['getClassDetail'])
        }
    };
</script>

<style lang="scss" scoped>
    .class-detail {
        padding-bottom: 90px;
    }
</style>
