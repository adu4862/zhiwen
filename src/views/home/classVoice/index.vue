<template>
    <div class="class-voice">
        <audio
            ref="audio"
            class="audio"
            :src="musicSrc"
            controls
            @play="onPlay"
            @pause="onPause"
            @timeupdate="onTimeupdate"
            @loadedmetadata="onLoadedmetadata"
        ></audio>
        <div class="class-voice-audio">
            <div class="class-voice-audio-process">
                <span>{{audio.currentTime | formatSecond}}</span>
                <div class="class-voice-audio-process-slider">
                    <van-slider v-model="value" @change="onChange" >
                        <div slot="button" class="slider-button"></div>
                    </van-slider>
                </div>
                <span>{{audio.maxTime | formatSecond}}</span>
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
                musicList: [
                    'http://sc1.111ttt.cn:8282/2018/1/03m/13/396131232171.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3',
                    'http://sc1.111ttt.cn:8282/2018/1/03m/13/396131229550.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3',
                    'http://sc1.111ttt.cn:8282/2018/1/03m/13/396131225385.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3',
                ],
                musicSrc: 'http://sc1.111ttt.cn:8282/2018/1/03m/13/396131229550.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3',
                control: '播放',
                isPlaying: false,
                currentIndex: 0,
                value: 0,
                audio: {
                    currentTime: 0,
                    maxTime: 0,
                    playing: false,
                    muted: false,
                    speed: 1,
                    waiting: true,
                    preload: 'auto'
                },
            }
        },
        methods: {
            onChange() {

            },
            startPlayOrPause() {
                return this.audio.playing ? this.pausePlay() : this.startPlay()
            },
            // 开始播放
            startPlay() {
                this.$refs.audio.play()
            },
            // 暂停
            pausePlay() {
                this.$refs.audio.pause()
            },
            onPlay() {
                this.audio.playing = true;
            },
            onPause() {
                this.audio.playing = false;
            },
            onTimeupdate(res) {
                this.audio.currentTime = res.target.currentTime;
                this.sliderTime = parseInt(this.audio.currentTime / this.audio.maxTime * 100);
            },
            onLoadedmetadata(res) {
                this.audio.maxTime = parseInt(res.target.duration);
            }
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
                @include fct();
                margin-top: 10px;
                img {
                    width: 15px;
                    height: 15px;
                }
                &-main {
                    margin: 0 37px;
                    img {
                        width: 20px;
                        height: 20px;
                    }
                }
                &-last-img {

                }
                &-next-img {
                    transform: rotate(180deg);
                }
            }
        }
    }
</style>
