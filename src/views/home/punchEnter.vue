<template>
    <div class="class-punch-enter" @click="handlePunch">
        <img class="class-punch-enter-img" :src="require('@/assets/img/icon_punch_circle.png')" alt="icon_punch">
    </div>
</template>

<script>
    export default {
        name: "classPunch",
        props: {
            lessonDetail: {
                type: Object,
                default: {}
            }
        },
        methods: {
            handlePunch() {
                this.$router.push({
                    name: 'punch',
                    params: {
                        lessonDetail: this.lessonDetail
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .class-punch-enter {
        position: fixed;
        right: 0;
        bottom: 25px;
        width: 58px;
        height: 58px;
        &-img {
            width: 100%;
            height: 100%;
        }
    }
</style>
