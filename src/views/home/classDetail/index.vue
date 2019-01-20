<template>
    <div class="class-detail">
        <ClassIntro/>
        <ClassTable/>
        <ClassBar/>
    </div>
</template>

<script>
    import ClassIntro from "./classIntro";
    import ClassTable from "./classTable";
    import ClassBar from "./classBar";

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
