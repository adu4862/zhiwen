<template>
    <div class="canvas">
        <div class="imageWrapper" ref="imageWrapper">
            <img class="real_pic" :src="dataURL"/>
            <slot>
                <div @click="toImage">
                    123
                </div>
            </slot>
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
                html2canvas(this.$refs.imageWrapper, {
                    backgroundColor: null,
                    allowTaint: true,
                    dpi: window.devicePixelRatio,
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
    }
</style>
