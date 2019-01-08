<template>
    <div class="m-section-title">
        <div class="m-section-title-before"></div>
        <div class="m-section-title-content">
            {{title}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "sectionTitle",
        props: {
            title: {
                type: String,
                default: '默认标题'
            }
        }
    }
</script>

<style scoped lang="scss">
    .m-section-title {
        display: flex;
        &-before {
            margin-right: 4px;
            width:4px;
            height:20px;
            background:linear-gradient(180deg,rgba(158,161,252,1) 0%,rgba(101,135,248,1) 100%);
        }
        &-content {
            font-size: 20px;
            font-weight:600;
            color: #4A4A4A;
        }
    }
</style>
