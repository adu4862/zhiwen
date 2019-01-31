<template>
    <div class="class-media">
        <div class="class-media-video">
            <video-player class="vjs-custom-skin vjs-big-play-centered"
                          ref="videoPlayer"
                          :options="playerOptions"
                          :playsinline="true"
                          customEventName="customstatechangedeventname"

                          @play="onPlayerPlay($event)"
                          @pause="onPlayerPause($event)"

                          @statechanged="playerStateChanged($event)"
                          @ready="playerReadied">
            </video-player>
        </div>
        <div class="class-media-info">
            <div class="class-media-info-title ellipsis">法律英语基础版</div>
            <div class="class-media-info-content">
                <p class="times">播放155次</p>
                <p class="source">打开课件<i class="icon icon--2"></i></p>
            </div>
        </div>
        <div class="class-media-point">
            <p class="class-media-point-title">本节课程知识点</p>
            <p class="class-media-point-sub-title">点击相应的知识点可以快速跳转到该处进行观看</p>
            <div class="class-media-point-list">
                <div
                    v-for="item in lessonDetail.knowledge_points"
                    :key="item.id"
                    class="class-media-point-list-item"
                    :style="{order: item.order}"
                    @click="handlePoint(item.point)"
                >
                    <p>{{item.subject}}</p>
                    <p>{{item.point | realFormatSecond}}</p>
                </div>
            </div>
        </div>
        <PunchEnter :lessonDetail="lessonDetail"/>
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
    import 'video.js/dist/video-js.css'
    import {videoPlayer} from 'vue-video-player'
    import PunchEnter from "../punchEnter"
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

    export default {
        name: "classMedia",
        components: {
            videoPlayer,
            Modal,
            PunchEnter,
        },
        data() {
            return {
                playerOptions: {
                    width: window.innerWidth,
                    height: 200,
                    loop: false,
                    muted: true,    // 静音
                    // bigPlayButton: false,
                    controlBar: {
                        // timeDivider: true,
                        // durationDisplay: true,
                        remainingTimeDisplay: false,
                        playbackRateMenuButton: false,
                        fullscreenToggle: true  //全屏按钮
                    },
                    language: 'zh-CN',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: "https://vjs.zencdn.net/v/oceans.mp4"
                    }],
                    poster: require('@/assets/img/demo_banner.png'),
                },
                checkWifiVisible: false,
                lessonDetail: {},
            }
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        },
        mounted() {
            // this.checkWifi();
            // console.log('this is current player instance object', this.player)
            this.getResourseUrl({
                id: this.$route.params.lessonId
            }).then((res) => {
                this.playerOptions.sources[0].src = res.url;
            });
            this.getSingleClassInfo({
                id: this.$route.params.lessonId
            }).then((res) => {
                let {img_uri} = res;
                this.playerOptions.sources[0].poster = img_uri;
                this.lessonDetail = res;
            });
        },
        methods: {
            ...mapActions('home', ['getResourseUrl', 'getSingleClassInfo']),
            // listen event
            onPlayerPlay(player) {
                // console.log('player play!', player)
            },
            onPlayerPause(player) {
                // console.log('player pause!', player)
            },
            // ...player event

            // or listen state event
            playerStateChanged(playerCurrentState) {
                // console.log('player current update state', playerCurrentState)
            },

            // player is ready
            playerReadied(player) {
                console.log('the player is readied', player)
                // you can use it to do something...
                // player.[methods]
            },
            handlePoint(currentTime) {
                this.player.play();
                this.player.currentTime(currentTime);
                this.player.pause();
            },
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
        &-info {
            padding: 14px 20px;
            background-color: #fff;
            &-title {
                @include height(22px);
                font-size: $font-size-md;
                color: $color-important;
            }
            &-content {
                @include ftb();
                justify-content: space-between;
                margin-top: 4px;
                font-size: $font-size-mini;
                color: $color-gary;
                .source {
                    @include ftb();
                    color: $color-link;
                    .icon {
                        margin-left: 6px;
                        font-size: 18px;
                    }
                }
            }
        }
        &-point {
            margin-top: 12px;
            padding: 14px 20px;
            background-color: #fff;
            &-title {
                @include height(22px);
                font-size: $font-size-md;
                color: $color-important;
            }
            &-sub-title {
                @include height(14px);
                font-size: $font-size-mini;
                color: #666666;
            }
            &-list {
                display: flex;
                flex-flow: column;
                margin-top: 3px;
                &-item {
                    @include ftb();
                    justify-content: space-between;
                    padding: 10px 0 1px 0;
                    @include border-bottom($border-color: rgba(101, 135, 248, .36));
                    font-size: 12px;
                    p:nth-child(1) {
                        @include height(17px);
                    }
                    p:nth-child(2) {
                        font-size: $font-size-sm;
                        color: #989BA0;
                    }
                }
            }
        }
    }
</style>

<style>
    @import "video.scss";
</style>
