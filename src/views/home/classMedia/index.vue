<template>
    <div class="class-media">
        <div class="class-media-video">
            <Xgplayer :config="config" @player="Player = $event"/>
        </div>
        <img class="class-media-punch" :src="require('@/assets/img/icon_punch_circle.png')" alt="icon_punch">
        <Modal
            :isVisible="checkWifiVisible"
            title="继续播放将消耗流量"
            content="当前网络并未连接无线网，是否继续播放？"
            cancel="继续播放"
            confirm="暂停播放"
            @on-cancel="handleContinue"
            @on-confirm="handlePause"
        />
    </div>
</template>

<script>
    import Xgplayer from 'xgplayer-vue'
    import {Modal} from "@/components"
    import {isWifi} from "@/common/util"

    export default {
        name: "classMedia",
        components: {
            Xgplayer,
            Modal,
        },
        data() {
            return {
                config: {
                    id: 'vs',
                    url: '/xgplayer-demo.mp4'
                },
                Player: null,
                checkWifiVisible: false,
            }
        },
        mounted() {
            // this.checkWifi();
            // this.checkWifiVisible = true;
        },
        methods: {
            checkWifi() {
                if (!isWifi) {
                    this.checkWifiVisible = true;
                }
            },
            handleContinue() {
                this.checkWifiVisible = false;
            },
            handlePause() {
                this.checkWifiVisible = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .class-media {
        &-punch {
            position: fixed;
            right: 0;
            bottom: 25px;
            width: 58px;
            height: 58px;
        }
    }
</style>
