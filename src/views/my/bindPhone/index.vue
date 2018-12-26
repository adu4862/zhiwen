<template>
    <div class="bind-phone">
        <div class="bind-phone-title">
            <i class="iconfont icon-weibo"></i>
            为了您的帐号安全，请尽快绑定手机
        </div>
        <div class="bind-phone-form">
            <div class="form-item country-choose">
                <van-cell class="" is-link :border="false">
                    <template slot="title">
                        <span class="area">国家/地区</span>
                        <span class="country">中国</span>
                    </template>
                </van-cell>
            </div>
            <div class="form-item phone-input">
                <div class="pre">
                    +86
                </div>
                <div class="phone-code">
                    <input type="phone" placeholder="请输入您的手机号" maxlength="11">
                    <van-button
                        type="default"
                        :disabled="timer !== null"
                        class="code-btn"
                        @click="handleCode">
                        {{codeTxt}}
                    </van-button>
                </div>
            </div>
            <div class="form-item code-input">
                <input type="text" placeholder="请输入验证码">
            </div>
        </div>
        <div class="bind-phone-btn">

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                codeTxt: '获取验证码',
                countDown: 60,
                timer: null
            }
        },
        beforeDestroy() {
            clearInterval(this.timer)
        },
        methods: {
            handleCode() {
                console.log(111)
                this.timer = setInterval(() => {
                    this.countDown--;
                    this.codeTxt = this.countDown + '秒后重发';
                    if (this.countDown < 1) {
                        clearInterval(this.timer);
                        this.timer = null;
                        this.codeTxt = '获取验证码';
                    }
                }, 1000)
            }
        }
    }
</script>

<style scoped lang="scss">
    .bind-phone {
        height: 100%;
        &-title {
            margin-top: 30px;
            text-align: center;
        }
        &-form {
            margin: 0 auto;
            margin-top: 30px;
            width: 80%;
            .form-item {
                display: flex;
                margin-bottom: 20px;
                background-color: #F5F5F5;
                @include border-bottom();
                .van-cell {
                    padding: 0;
                    background-color: initial;
                }
                .country {
                    margin-left: 20px;
                }
                input {
                    background-color: #F5F5F5;
                    border: initial;
                }
            }
            .country-choose {
                padding: 10px 0;
            }
            .phone-input {
                &:after {
                    background-color: initial;
                }
                .pre {
                    padding: 10px 0;
                    @include border-bottom();
                }
                .phone-code {
                    margin-left: 10px;
                    padding: 10px 0;
                    width: 100%;
                    @include border-bottom();
                    .code-btn {
                        position: absolute;
                        bottom: 0;
                        right: 5px;
                    }
                }
            }
            .code-input {
                padding: 10px 0;
                input {
                    width: 100%;
                }
            }
        }
    }
</style>
