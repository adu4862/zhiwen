<template>
    <div class="m-dialog">
        <transition
            enter-active-class="animated fadeIn faster"
            leave-active-class="animated fadeOut faster"
        >
            <div class="m-dialog-mask" v-show="visible"></div>
        </transition>
        <transition
            enter-active-class="animated fadeIn faster"
            leave-active-class="animated fadeOut faster"
        >
            <div class="m-dialog-wrap" v-show="visible">
                <div class="m-dialog-container">
                    <p class="m-dialog-container-title">
                        {{title}}
                    </p>
                    <p class="m-dialog-container-content">
                        {{content}}
                    </p>
                    <div class="m-dialog-container-footer">
                        <p class="left-btn" @click="handelCancel">
                            {{cancel}}
                        </p>
                        <p class="right-btn" @click="handelConfirm">
                            {{confirm}}
                        </p>
                    </div>
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
                default: false
            },
            isMaskClose: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ''
            },
            content: {
                type: String,
                default: ''
            },
            cancel: {
                type: String,
                default: '取消'
            },
            confirm: {
                type: String,
                default: '确认'
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
            console.log(this.isMaskClose)
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
                this.$emit('on-cancel')
            },
            handelCancel() {
                this.closeDialog();
            },
            handelConfirm() {
                this.$emit('on-confirm');
            },
        }
    }
</script>

<style lang="scss" scoped>
    .m-dialog {
        &-mask {
            @include modalbg();
            z-index: 1999;
        }
        &-wrap {
            position: fixed;
            overflow: auto;
            z-index: 2000;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            outline: 0;
            @include fct();
            .m-dialog-container {
                z-index: 2001;
                display: flex;
                flex-flow: column;
                min-width: 270px;
                min-height: 162px;
                background: #fff;
                border-radius: 5px;
                text-align: center;
                &-title {
                    margin-top: 20px;
                    margin-bottom: 8px;
                    font-size: 18px;
                }
                &-content {
                    @include ftb();
                    flex: 1;
                    margin: 0 auto;
                    margin-bottom: 24px;
                    max-width: 70%;
                    line-height: 1.6;
                    color: #888888;
                }
                &-footer {
                    @include border-top();
                    display: flex;
                    align-items: center;
                    height: 49px;
                    line-height: 49px;
                    align-items: center;
                    > p {
                        flex: 1;
                        position: relative;
                        height: 100%;
                        &:active {
                            opacity: .6;
                        }
                    }
                    .left-btn {
                        @include border-right();
                        &:after {
                            top: 4px;
                        }
                        color: #606060;
                    }
                    .right-btn {
                        color: #5C86FB;
                    }
                }
            }
        }
    }
</style>
