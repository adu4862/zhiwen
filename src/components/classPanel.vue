<!-- 课程列表包裹组件 -->
<template>
    <div class="m-class-panel" @click="handleClick">
        <div class="m-class-panel-select">
            <slot name="select"></slot>
        </div>
        <div class="m-class-panel-banner">
            <slot name="banner"></slot>
        </div>
        <div class="m-class-panel-content">
            <slot></slot>
        </div>
        <slot name="more"></slot>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {
        },
        data() {
            return {};
        },
        methods: {
            handleClick() {
                this.$emit('handleClick')
            }
        }
    };
</script>

<style lang="scss" scoped>
    .m-class-panel {
        display: flex;
        width: 100%;
        &-select {
            display: flex;
            align-items: center;
        }
        &-banner {
            position: relative;
            overflow: hidden;
            .banner {
                width: 114px;
                height: 100%;
            }
            .icon-wrap {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 14px;
                background-color: rgba(0, 0, 0, .6);
            }
            .class-type-icon {
                @include tb();
                right: 8px;
                width: 8px;
                height: 8px;
                color: #fff;
                font-size: 22px;
            }
        }
        &-banner-radius {
            border-radius: 6px;
        }
        &-content {
            margin-left: 8px;
            flex: 1;
            overflow: hidden;
            > div {
                height: 100%;
            }
        }
    }
</style>
