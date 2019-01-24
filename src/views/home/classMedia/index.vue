<template>
    <div class="class-media">
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
    import {Modal} from "@/components"
    import {isWifi} from "@/common/util"

    export default {
        name: "classMedia",
        components: {
            Modal,
        },
        data() {
            return {
                checkWifiVisible: false,
            }
        },
        mounted() {
            // this.checkWifi();
            this.checkWifiVisible = true;
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

</style>
