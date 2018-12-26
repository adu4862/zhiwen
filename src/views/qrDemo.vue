<template>
    <div class="qr">
        <!--<div id="qrcode" ref="qrcode"></div>-->
        <div class="qrcode" ref="qrCodeUrl"></div>
    </div>
</template>

<script>
    import QRCode from 'qrcodejs2'

    export default {
        name: "qrDemo",
        mounted() {
            this.$nextTick(() => {
                this.creatQrCode()
            })
        },
        methods: {
            creatQrCode() {
                let qrcode = new QRCode(this.$refs.qrCodeUrl, {
                    text: 'www.qtshe.com',
                    width: 70,
                    height: 70,
                    colorDark: '#000000',
                    colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.H
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .qr {

    }
</style>
