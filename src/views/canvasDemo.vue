<template>
    <div class="canvas">
        <div class="imageWrapper" ref="imageWrapper">
            <img class="real_pic" :src="dataURL"/>
            <slot>
                <div class="container" ref="we">
                    <div class="top">
                        <img src="https://b-gold-cdn.xitu.io/v3/static/img/frontend.1dae74a.png" alt="">
                    </div>
                    <div class="middle">
                        welcome!
                    </div>
                    <div class="bottom">
                        sdfjlasdjflj
                    </div>
                </div>
            </slot>
            <div @click="toImage">
                生成图片
            </div>
        </div>
    </div>
</template>

<script>
    import html2canvas from 'html2canvas'

    export default {
        name: "canvasDemo",
        data() {
            return {
                dataURL: ''
            }
        },
        methods: {
            toImage() {
                html2canvas(this.$refs.we, {
                    backgroundColor: null,
                    // allowTaint: true,
                    useCORS: true,
                    dpi: window.devicePixelRatio,
                    width: 300,
                    // height: 480,
                }).then((canvas) => {
                    let dataURL = canvas.toDataURL("image/png");
                    this.dataURL = dataURL;
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .canvas {
        .real_pic {
            width: 100%;
        }
        .container {
            display: flex;
            flex-flow: column;
            position: relative;
            margin: 0 auto;
            width: 240px;
            height: 500px;
            .top {
                img {
                    width: 100%;
                }
            }
            .middle {
                position: absolute;
                @include ct();
                width: 200px;
                height: 180px;
                margin: 0 auto;
                background-color: cornflowerblue;
            }
            .bottom {
                display: flex;
                align-items: flex-end;
                flex: 1;
                background-color: #999999;
            }
        }
    }
</style>
