<template>
    <div class="bind-phone">
        <div class="bind-phone-title">
            <span data-icon="h" class="icon">为了您的帐号安全，请尽快绑定手机</span>
        </div>
        <div class="bind-phone-form">
            <div class="cell-item">
                <span class="phone-pre">中国({{phoneCode}})</span>
                <router-link :to="{name: 'areaSelect'}"><i class="cell-item-right-arrow"></i></router-link>
            </div>
            <div class="cell-item">
                <input v-model="phone" type="phone" placeholder="请输入您的手机号">
                <button
                    :class="['code-btn blue-btn-48', counting?'disabled-btn':'']"
                    :disabled="counting"
                    @click="startCountdown"
                >
                    <CountDown v-if="counting" :time="6000" @end="handleCountdownEnd">
                        <template slot-scope="props">{{ props.totalSeconds }} 秒后重试</template>
                    </CountDown>
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
    import {CountDown} from '@/components'
    import {mapState, mapMutations, mapActions, mapGetters} from "vuex";

    export default {
        name: "phoneBind",
        components: {
            CountDown
        },
        data() {
            return {
                phone: '',
                counting: false,
            }
        },
        computed: {
            ...mapState(['phoneCode'])
        },
        methods: {
            startCountdown: function () {
                if (!this.phone) {
                    this.$toast({
                        msg: '请先填写手机号'
                    })
                }
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
            color: $color-important;
            span:before {
                margin-right: 5px;
                vertical-align: middle;
                font-size: 24px;
                color: $color-link;
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
                color: $color-gary;
                &-right-arrow {
                    display: inline-block;
                    width: 8px;
                    height: 13px;
                    background: url("../../../assets/img/my/cell_arrow_gary.png") no-repeat center center;
                    background-size: contain;
                }
                .phone-pre {
                    font-weight: 300;
                    color: $color-important;
                }
            }
            .code-btn {
                width: 70px;
                height: 27px;
                line-height: 25px;
                font-size: $font-size-mini;
                font-weight: 300;
                border-radius: 2px;
                background: #8E9199;
                box-shadow: initial;
                border: none;
            }
        }
        &-btn {
            margin-top: 114px;
        }
    }
</style>
