<template>
    <div class="class-detail">
        <EarnMoney />
        <ClassIntro/>
        <ClassTable/>
        <ClassBar/>
    </div>
</template>

<script>
    import ClassIntro from "./classIntro/index";
    import ClassTable from "./classTable/index";
    import ClassBar from "./classBar/index";
    import {EarnMoney} from "@/components";

    export default {
        components: {
            ClassIntro,
            ClassTable,
            ClassBar,
            EarnMoney,
        },
        data() {
            return {};
        },
    };
</script>

<style lang="scss" scoped>
    .class-detail {

    }
</style>
