<template>
    <div class="class-detail">
        <ClassIntro/>
        <ClassTable/>
        <ClassBar/>
    </div>
</template>

<script>
    import ClassIntro from "./classIntro/index";
    import ClassTable from "./classTable/index";
    import ClassBar from "./classBar/index";

    export default {
        components: {
            ClassIntro,
            ClassTable,
            ClassBar
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
