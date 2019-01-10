<template>
    <div class="bind-phone">
        <div class="bind-phone-title">
            <span data-icon="h" class="icon">为了您的帐号安全，请尽快绑定手机</span>
        </div>
        <div class="bind-phone-form">
            <div class="cell-item">
                <span>中国(+86)</span>
                <i class="cell-item-right-arrow"></i>
            </div>
            <div class="cell-item">
                <input type="phone" placeholder="请输入您的手机号">
                <button
                    :class="['code-btn blue-btn-48', counting?'disabled-btn':'']"
                    :disabled="counting"
                    @click="startCountdown"
                >
                    <CountDown2 v-if="counting" :time="6000" @end="handleCountdownEnd">
                        <template slot-scope="props">{{ props.totalSeconds }} 秒后重试</template>
                    </CountDown2>
                    <span v-else>获取验证码</span>
                </button>
            </div>
            <div class="cell-item">
                <input type="phone" placeholder="请输入验证码">
            </div>
        </div>
        <div class="bind-phone-btn blue-btn-48 disabled-btn">
            立即绑定
        </div>
    </div>
</template>

<script>
    import {CountDown2} from '@/components'

    export default {
        components: {
            CountDown2
        },
        data() {
            return {
                counting: false,
            }
        },
        methods: {
            startCountdown: function () {
                this.counting = true;
            },
            handleCountdownEnd: function () {
                this.counting = false;
            },
        }
    }
</script>

<style scoped lang="scss">
    .bind-phone {
        display: flex;
        flex-flow: column;
        align-items: center;
        height: 100%;
        background-color: #fff;
        &-title {
            @include fct();
            margin-top: 30px;
            text-align: center;
            color: #4A4A4A;
            span:before {
                margin-right: 5px;
                vertical-align: middle;
                font-size: 24px;
                color: #6587F8;
            }
        }
        &-form {
            margin: 0 auto;
            margin-top: 30px;
            width: 80%;
            overflow: hidden;
            .cell-item {
                display: flex;
                justify-content: space-between;
                margin-top: 30px;
                padding: 10px 11px;
                @include border-bottom($border-color: #D2D2D2);
                font-size: $font-size-sm;
                color: #4A4A4A;
                &-right-arrow {
                    display: inline-block;
                    width: 8px;
                    height: 13px;
                    background: url("../../../assets/img/my/cell-arrow.png") no-repeat center center;
                    background-size: contain;
                }
            }
            .code-btn {
                width: 70px;
                height: 27px;
                line-height: 25px;
                font-size: $font-size-mini;
                font-weight: 300;
                border-radius: 2px;
            }
        }
        &-btn {
            margin-top: 114px;
        }
    }
</style>
