<template>
    <div class="punch">
        <div class="punch-card" ref="we">
            <div class="punch-card-head">
                <img :src="userInfo.headimgurl" alt="wx_header">
                <span>{{userInfo.nickname}}</span>
            </div>
            <div class="punch-card-title">
                <p class="punch-card-title-day">我已连续21天学习</p>
                <p class="punch-card-title-class">法律英语基础版法律英语基础版法律英语基础版法律英语基础版法律英语基础版法律英语基础版法律英语基础版-诉讼部分</p>
            </div>
            <div class="punch-card-info">
                <p class="punch-card-info-word">
                    <i><!--这个标签只有一个作用——html2canvas保证布局--></i>statutestatute
                </p>
                <p class="punch-card-info-symbol">
                    <i><!--这个标签只有一个作用——html2canvas保证布局--></i>/'atenia/
                </p>
                <p class="punch-card-info-mean">n.律师释词汇解释词汇解</p>
                <p class="punch-card-info-content">
                    释词汇解释词汇解释释词汇解释词汇解释释词汇解释词汇解释释词汇解释词汇解释释词汇解释词汇解释释词汇解释词汇解释
                </p>
            </div>
            <img class="punch-card-img" :src="require('@/assets/img/punch/punch_01.png')" alt="punch_img"/>
            <div class="punch-card-qr">
                <div class="punch-card-qr-img" ref="qrCodeUrl"></div>
                <p class="punch-card-qr-tips">长按识别左边二维码<br/>马上加入该课程学习！</p>
            </div>
        </div>
        <div class="punch-operates">
            <span class="punch-operates-title">选择皮肤：</span>
            <div class="punch-operates-cards">
                <div class="punch-operates-cards-item">
                    <img :src="require('@/assets/img/punch/icon_punch_01.png')" alt="icon_punch">
                </div>
                <!--<div class="punch-operates-cards-item"></div>-->
                <!--<div class="punch-operates-cards-item"></div>-->
                <!--<div class="punch-operates-cards-item"></div>-->
                <!--<div class="punch-operates-cards-item"></div>-->
            </div>
            <button class="blue-btn-48" @click="handleCreateImg">打卡</button>
        </div>
    </div>
</template>

<script>
    import html2canvas from 'html2canvas'
    import QRCode from 'qrcodejs2'
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

    export default {
        name: "Punch",
        data() {
            return {
            }
        },
        computed: {
            ...mapState(['userInfo'])
        },
        mounted() {
            this.$nextTick(() => {
                this.creatQrCode()
            });
            this.getPunchInfo({
                product_id: 'e75fa570-0678-484a-b79f-890010398d0d'
            }).then((res) => {
                console.log(res)
            })
        },
        methods: {
            ...mapActions('my', ['getPunchInfo', 'setPunch']),
            creatQrCode() {
                let qrcode = new QRCode(this.$refs.qrCodeUrl, {
                    text: 'www.baidu.com',
                    width: 74,
                    height: 74,
                    colorDark: '#000000',
                    colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.H
                })
            },
            handleCreateImg() {
                this.setPunch({
                    product_id: 'e75fa570-0678-484a-b79f-890010398d0d'
                }).then((res) => {
                    if (res.statusCode) {
                        this.$toast({
                            msg: res.message
                        });
                        return
                    }
                    // this.toImage();
                });
            },
            toImage() {
                let dom = this.$refs.we;
                let width = dom.offsetWidth;
                let height = dom.offsetHeight;
                let canvasBox = document.createElement("canvas");
                let scale = window.devicePixelRatio;
                canvasBox.width = width * scale;
                canvasBox.height = height * scale;

                canvasBox.style.width = width + "px";
                canvasBox.style.height = height + "px";
                canvasBox.getContext("2d").scale(scale, scale);
                html2canvas(this.$refs.we, {
                    backgroundColor: null,
                    // allowTaint: true,
                    useCORS: true,
                    // width: 300,
                    // height: 480,
                    // scale: scale,
                }).then((canvas) => {
                    let dataURL = canvas.toDataURL("image/png");
                    this.$router.push({name: 'punchSuccess', params: { imgSrc: dataURL }})
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .punch {
        padding: 15px 0;
        padding-bottom: 86px;
        min-height: 100vh;
        background: url("~@/assets/img/punch/punch_bg.png") no-repeat center;
        background-size: cover;
        overflow-y: scroll;
        > div {
            margin: 0 auto;
        }
        &-card {
            @include ftb();
            flex-flow: column;
            padding: 0 30px;
            padding-bottom: 28px;
            width: 346px;
            flex: 0 0 346px;
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
                line-height: 25px;
                font-size: 18px;
                font-weight: 500;
                color: $color-important;
                overflow: hidden;
            }
            &-info {
                margin-top: 17px;
                word-break: break-all;
                &-word {
                    line-height: 26px;
                    font-size: 26px;
                    font-weight:600;
                    color: $color-link;
                }
                &-symbol {
                    margin-top: 8px;
                    line-height: 16px;
                    font-size: $font-size-md;
                    color: $color-gary;
                }
                &-mean {
                    margin-top: 18px;
                    line-height: 18px;
                    color: $color-gary;
                }
                &-content {
                    margin-top: 11px;
                    font-size: $font-size-sm;
                    color: $color-gary;
                    line-height: 18px;
                    overflow: hidden;
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
        &-operates {
            position: fixed;
            bottom: 0;
            @include ftb();
            justify-content: space-between;
            padding: 9px 10px;
            width: 100%;
            font-size: 12px;
            color: $color-gary;
            background-color: #fff;
            &-title {
                flex: 0 0 65px;
            }
            &-cards {
                display: flex;
                flex-wrap: nowrap;
                flex: 1;
                overflow-x: scroll;
                &-item {
                    margin-left: 13px;
                    width: 38px;
                    height: 36px;
                    flex: 0 0 38px;
                    background-color: #969FAF;
                    &:nth-child(1) {
                        margin-left: initial;
                    }
                }
            }
            button {
                margin-left: 29px;
                width: 111px;
                flex: 0 0 111px;
            }
        }
    }
</style>
