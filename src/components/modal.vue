<!-- 公共Modal -->
<template>
    <div class="m-dialog">
        <transition :name="isTransition?'fade':''">
            <div class="m-dialog-mask" v-if="showMask" v-show="visible"></div>
        </transition>
        <transition :name="isTransition?'fade':''">
            <div class="m-dialog-wrap" v-show="visible">
                <div class="m-dialog-container">
                    <p class="m-dialog-container-title">
                        {{title}}
                    </p>
                    <p class="m-dialog-container-content">
                        <slot>{{content}}</slot>
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
                default: true
            },
            isTransition: {
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
                width: 270px;
                min-height: 162px;
                background: #fff;
                border-radius: 5px;
                text-align: center;
                &-title {
                    margin-top: 20px;
                    font-size: 18px;
                    color: $color-important;
                }
                &-content {
                    @include ftb();
                    flex: 1;
                    margin: 0 auto;
                    margin-top: 8px;
                    max-width: 70%;
                    @include height(21px);
                    color: $color-gary;
                }
                &-footer {
                    @include border-top($border-color: rgba(101, 135, 248, .36));
                    display: flex;
                    align-items: center;
                    margin-top: 24px;
                    height: 49px;
                    line-height: 49px;
                    align-items: center;
                    > p {
                        flex: 1;
                        position: relative;
                        height: 100%;
                        font-size: $font-size-md;
                        &:active {
                            opacity: .6;
                        }
                    }
                    .left-btn {
                        @include border-right($border-color: rgba(101, 135, 248, .36));
                        &:after {
                            top: 4px;
                        }
                        color: #606060;
                    }
                    .right-btn {
                        color: $color-link;
                    }
                }
            }
        }
    }
</style>
