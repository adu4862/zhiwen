<template>
    <div class="punch">
        <div class="punch-card">
            <div class="punch-card-head">
                <img :src="require('@/assets/img/demo_class_banner.png')" alt="wx_header">
                <span>用户名称</span>
            </div>
            <p class="punch-card-title">
                我已连续XX天学习XXXX X课程！
            </p>
            <div class="punch-card-info">
                <p class="punch-card-info-title">
                    statute
                </p>
                <p class="punch-card-info-content">
                    词汇解释词汇解释词汇解释词汇解释词汇解释词汇解释词汇解释词汇解释词汇解释词汇解释词汇解释
                </p>
            </div>
            <img class="punch-card-img" :src="require('@/assets/img/punch/punch_01.png')" alt="punch_img"/>
            <div class="punch-card-qr">
                <div class="punch-card-qr-img" ref="qrCodeUrl"></div>
                <p class="punch-card-qr-tips">长按识别左边二维码<br/>马上加入该课程学习！</p>
            </div>
        </div>
        <div class="punch-operate">
            <div class="punch-operate-selector">
                <p class="punch-operate-selector-title">选择皮肤</p>
                <div class="punch-operate-selector-cards">
                    <div class="punch-operate-selector-cards-item">

                    </div>
                </div>
            </div>
            <button class="blue-btn-48">保存</button>
            <p class="punch-operate-tips">保存海报并分享朋友圈，客服查看后，即可完成当日打卡</p>
        </div>
    </div>
</template>

<script>
    import QRCode from 'qrcodejs2'

    export default {
        name: "Punch",
        mounted() {
            this.$nextTick(() => {
                this.creatQrCode()
            })
        },
        methods: {
            creatQrCode() {
                let qrcode = new QRCode(this.$refs.qrCodeUrl, {
                    text: 'www.baidu.com',
                    width: 74,
                    height: 74,
                    colorDark: '#000000',
                    colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.H
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .punch {
        @include ftb();
        flex-flow: column;
        padding-bottom: 15px;
        height: 100vh;
        background: url("~@/assets/img/punch/punch_bg.png") no-repeat center;
        background-size: cover;
        &-card {
            @include ftb();
            flex-flow: column;
            margin-top: 13px;
            padding: 0 30px;
            width: 346px;
            height: 570px;
            background: url("~@/assets/img/punch/punch_card_bg.png") no-repeat center;
            background-size: cover;
            text-align: center;
            > div {
                width: 100%;
            }
            &-head {
                @include ftb();
                margin-top: 18px;
                font-size: $font-size-sm;
                color: #606060;
                img {
                    width: 43px;
                    height: 43px;
                    border-radius: 50%;
                }
                span {
                    margin-left: 14px;
                }
            }
            &-title {
                margin-top: 18px;
                @include height(25px);
                font-size: 18px;
                font-weight: 500;
                color: $color-important;
            }
            &-info {
                margin-top: 38px;
                &-title {
                    font-size: 26px;
                    font-weight: 600;
                    color: $color-link;
                }
                &-content {
                    margin-top: 17px;
                    line-height: 17px;
                    font-size: $font-size-sm;
                    color: #909090;
                }
            }
            &-img {
                margin-top: 28px;
                width: 181px;
                height: 151px;
            }
            &-qr {
                @include ftb();
                justify-content: center;
                margin-top: 3px;
                &-img {
                    width: 74px;
                    height: 74px;
                }
                &-tips {
                    margin-left: 9px;
                    line-height: 17px;
                    font-weight: 600;
                    color: $color-important;
                    text-align: left;
                }
            }
        }
        &-operate {
            font-size: $font-size-sm;
            color: #606060;
            &-selector {
                margin-top: 8px;
                padding: 11px 26px 15px 26px;
                width: 346px;
                background-color: #fff;
                &-title {
                    @include height(17px);
                }
            }
            button {
                margin-top: 20px;
                width: 346px;
            }
            &-tips {
                margin-top: 4px;
                text-align: center;
            }
        }
    }
</style>
