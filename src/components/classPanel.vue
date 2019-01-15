<template>
    <!-- 课程列表组件 -->
    <div class="m-class-panel" @click="handleClick">
        <div class="m-class-panel-select">
            <slot name="select"></slot>
            <!--<van-checkbox v-model="checked"></van-checkbox>-->
        </div>
        <div class="m-class-panel-banner">
            <slot name="banner"></slot>
        </div>
        <div class="m-class-panel-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {
        },
        data() {
            return {
                checked: false
            };
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
            /*margin: 0 8px;*/
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
