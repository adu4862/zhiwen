<!-- 全局Toast组件 -->
<template>
    <transition name="fade">
        <div class="m-toast" v-show="show">
            <i class="icon icon--4" v-if="type === 'collection'"></i>
            <i class="icon icon--3" v-if="type === 'success'"></i>
            {{message}}
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                message: '',
                type: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .m-toast {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        z-index: 2099;
        display: flex;
        flex-flow: column;
        align-items: center;
        padding: 12px 18px;
        border-radius: 5px;
        color: #fff;
        font-size: $font-size-base;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.6);
        .icon {
            margin-top: 8px;
            margin-bottom: 14px;
            font-size: 24px;
            color: $color-link;
        }
    }
</style>
