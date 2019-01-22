<template>
    <div class="m-dialog">
        <transition name="fade">
            <div class="m-dialog-mask" v-if="showMask" v-show="visible"></div>
        </transition>
        <transition name="fade">
            <div class="m-dialog-wrap" v-show="visible">
                <div class="m-dialog-container">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import animate from 'animate.css';

    export default {
        props: {
            isVisible: {
                type: Boolean,
                default: false
            },
            showMask: {
                type: Boolean,
                default: true
            },
            isMaskClose: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                visible: false
            }
        },
        watch: {
            isVisible(val) {
                this.visible = this.isVisible;
            }
        },
        mounted() {
            if (this.isMaskClose) {
                document.addEventListener('click', (e) => {
                    if (e.target.className === 'm-dialog-wrap') this.closeDialog();
                })
            }
        },
        beforeDestroy() {
            if (this.isMaskClose) {
                document.removeEventListener('click', (e) => {
                    if (e.target.className === 'm-dialog-wrap') this.closeDialog();
                });
            }
        },
        methods: {
            closeDialog() {
                this.$emit('on-close');
            }
        }
    }
</script>

<style scoped lang="scss">
    .m-dialog {
        &-mask {
            @include modalbg();
            z-index: 1998;
        }
        &-wrap {
            position: fixed;
            overflow: auto;
            z-index: 1999;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            outline: 0;
            @include fct();
            .m-dialog-container {
                z-index: 2000;
            }
        }
    }
</style>
