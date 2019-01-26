<template>
    <div class="class-voice">
        <audio
            ref="audio"
            class="audio"
            :src="musicSrc"
            controls
            @play="onPlay"
            @pause="onPause"
            @error="onError"
            @timeupdate="onTimeupdate"
            @loadedmetadata="onLoadedmetadata"
        ></audio>
        <div class="class-voice-audio">
            <div class="class-voice-audio-process">
                <p class="time">{{audio.currentTime | formatSecond}}</p>
                <div class="class-voice-audio-process-slider">
                    <van-slider v-model="sliderTime" @change="changeCurrentTime">
                        <div slot="button" class="slider-button"></div>
                    </van-slider>
                </div>
                <p class="time">{{audio.maxTime | formatSecond}}</p>
            </div>
            <div class="class-voice-audio-control">
                <img class="class-voice-audio-control-last-img" :src="require('@/assets/img/icon_voice_arrow.png')"
                     alt="icon_voice_arrow" @click="">
                <div class="class-voice-audio-control-main">
                    <img class="" :src="require('@/assets/img/icon_voice_pause.png')"
                         alt="icon_voice_pause" @click="startPlayOrPause">
                </div>
                <img class="class-voice-audio-control-next-img" :src="require('@/assets/img/icon_voice_arrow.png')"
                     alt="icon_voice_arrow" @click="">
                <div class="class-voice-audio-control-speed" @click="changeSpeed">
                    {{audio.speed}}x
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    function realFormatSecond(second) {
        let secondType = typeof second;

        if (secondType === 'number' || secondType === 'string') {
            second = parseInt(second);

            let hours = Math.floor(second / 3600);
            second = second - hours * 3600;
            let mimute = Math.floor(second / 60);
            second = second - mimute * 60;

            return hours + ':' + ('0' + mimute).slice(-2) + ':' + ('0' + second).slice(-2)
        } else {
            return '0:00:00'
        }
    }

    export default {
        name: "AudioDemo",
        data() {
            return {
                musicSrc: 'http://sc1.111ttt.cn:8282/2018/1/03m/13/396131229550.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3',
                audio: {
                    currentTime: 0,
                    maxTime: 0,
                    playing: false,
                    muted: false,
                    speed: 1,
                    waiting: true,
                    preload: 'auto'
                },
                sliderTime: 0,
                speeds: [0.7, 1, 1.5, 2],
            }
        },
        methods: {
            startPlayOrPause() {
                return this.audio.playing ? this.pausePlay() : this.startPlay()
            },
            startPlay() {
                this.$refs.audio.play()
            },
            pausePlay() {
                this.$refs.audio.pause()
            },
            onPlay() {
                this.audio.playing = true;
            },
            onPause() {
                this.audio.playing = false;
            },
            onError() {
                this.$toast({
                    msg: '出错了'
                })
            },
            onTimeupdate(res) {
                this.audio.currentTime = res.target.currentTime;
                this.sliderTime = parseInt(this.audio.currentTime / this.audio.maxTime * 100);
            },
            onLoadedmetadata(res) {
                this.audio.maxTime = parseInt(res.target.duration);
            },
            changeCurrentTime(index) {
                this.$refs.audio.currentTime = parseInt(index / 100 * this.audio.maxTime);
            },
            changeSpeed() {
                let index = this.speeds.indexOf(this.audio.speed) + 1;
                this.audio.speed = this.speeds[index % this.speeds.length];
                this.$refs.audio.playbackRate = this.audio.speed;
            },
        },
        filters: {
            formatSecond(second = 0) {
                return realFormatSecond(second)
            },
        },
    }
</script>

<style scoped lang="scss">
    .class-voice {
        audio {
            height: 100px;
        }
        &-audio {
            position: fixed;
            bottom: 0;
            padding: 12px 20px;
            width: 100%;
            background: rgba(1, 16, 43, .8);
            &-process {
                @include fct();
                font-size: $font-size-mini;
                color: #fff;
                .time {
                    width: 40px;
                }
                &-slider {
                    margin: 0 10px;
                    width: 240px;
                    .slider-button {
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        background-color: #fff;
                    }
                }
            }
            &-control {
                position: relative;
                @include fct();
                margin-top: 15px;
                img {
                    width: 20px;
                    height: 20px;
                }
                &-main {
                    margin: 0 37px;
                    img {
                        width: 25px;
                        height: 25px;
                    }
                }
                &-last-img {

                }
                &-next-img {
                    transform: rotate(180deg);
                }
                &-speed {
                    @include tb();
                    right: 0;
                    width: 50px;
                    @include height(18px);
                    border-radius: 18px;
                    border: 1px solid #fff;
                    font-size: $font-size-sm;
                    text-align: center;
                }
            }
        }
    }
</style>
