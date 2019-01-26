<template>
    <div class="box" >
        <div class="list-view" ref="listView">
            <!-- 列表 -->
            <ul>
                <li v-for="group in code" class="list-group" :key="group.id" ref="listGroup">
                    <template v-if="group.items.length">
                        <h2 class="list-group-title">{{ group.title }}</h2>
                        <ul class="list-group-box">
                            <li v-for="item in group.items" class="list-group-item" :key="item.id">
                                <span class="name">{{ item.label }}</span>
                                <span class="name">{{ item.code }}</span>
                            </li>
                        </ul>
                    </template>
                </li>
            </ul>
            <!-- 右侧导航 -->
            <div class="list-shortcut">
                <ul>
                    <li v-for="(item, index) in shortcutList"
                        class="item"
                        :data-index="index"
                        :key="item.id"
                        @touchstart="onShortcutStart"
                        @touchmove.stop.prevent="onShortcutMove"
                        :class="{'current': currentIndex === index}"
                    >
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import code from './phoneCode'

    export default {
        name: "areaSelect",
        data () {
            return {
                code,
                scrollY: 0,
                currentIndex: 0
            }
        },
        computed: {
            shortcutList () {
                return this.code.map((group) => {
                    return group.title
                })
            }
        },
        watch: {
            scrollY (newVal) {
                // 向下滑动的时候 newVal 是一个负数，所以当 newVal > 0 时，currentIndex 直接为 0
                if (newVal > 0) {
                    this.currentIndex = 0
                    return
                }

                // 计算 currentIndex 的值
                for (let i = 0; i < this.listHeight.length - 1; i++) {
                    let height1 = this.listHeight[i]
                    let height2 = this.listHeight[i + 1]

                    if (-newVal >= height1 && -newVal < height2) {
                        this.currentIndex = i
                        return
                    }
                }

                // 当超 -newVal > 最后一个高度的时候
                // 因为 this.listHeight 有头尾，所以需要 - 2
                this.currentIndex = this.listHeight.length - 2
            }
        },
        created () {
            this.touch = {}
            // 初始化 better-scroll 必须要等 dom 加载完毕
            setTimeout(() => {
                this._initSrcoll()
                this._calculateHeight()
            }, 20)
        },
        methods: {
            _initSrcoll () {
                this.scroll = new BScroll(this.$refs.listView, {
                    probeType: 3,
                    click: true
                })

                this.scroll.on('scroll', (pos) => {
                    this.scrollY = pos.y
                })
            },
            onShortcutStart (e) {
                // 获取到绑定的 index
                let index = e.target.getAttribute('data-index')
                // 使用 better-scroll 的 scrollToElement 方法实现跳转
                this.scrollToElement(index)

                // 记录一下点击时候的 Y坐标 和 index
                let firstTouch = e.touches[0].pageY
                this.touch.y1 = firstTouch
                this.touch.anchorIndex = index
            },
            onShortcutMove (e) {
                // 再记录一下移动时候的 Y坐标，然后计算出移动了几个索引
                let touchMove = e.touches[0].pageY
                this.touch.y2 = touchMove
                // 这里的 16.7 是索引元素的高度
                let delta = Math.floor((this.touch.y2 - this.touch.y1) / 16.7)

                // 计算最后的位置
                // * 1 是因为 this.touch.anchorIndex 是字符串，用 * 1 偷懒的转化一下，转成数字
                let index = this.touch.anchorIndex * 1 + delta
                this.scrollToElement(index)
            },
            scrollToElement (index) {
                // 处理边界情况
                // 因为 index 通过滑动距离计算出来的
                // 所以向上滑超过索引框框的时候就会 < 0，向上就会超过最大值
                if (index < 0) {
                    return
                } else if (index > this.listHeight.length - 2) {
                    index = this.listHeight.length - 2
                }
                // listHeight 是正的， 所以加个 -
                this.scrollY = -this.listHeight[index]
                this.scroll.scrollToElement(this.$refs.listGroup[index])
            },
            _calculateHeight () {
                this.listHeight = []
                const list = this.$refs.listGroup
                let height = 0
                this.listHeight.push(height)
                for (let i = 0; i < list.length; i++) {
                    let item = list[i]
                    height += item.clientHeight
                    this.listHeight.push(height)
                }
            }
        },
    }
</script>

<style lang="scss">
    .box {
        position: fixed;
        width: 100%;
        height: 100%;
    }
    .list-view {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: rgb(223, 223, 223);
        .list-group {
            &-title {
                height: 30px;
                line-height: 30px;
                padding-left: 20px;
                font-size: 12px;
                color: $color-gary;
            }
            &-box {
                margin: 0 auto;
                width: 357px;
                background-color: #fff;
            }
            &-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-left: 18px;
                padding: 10px 5px;
                width: 308px;
                @include border-bottom($border-color: #BCBCBC);
                color: $color-important;
                &:nth-last-child(1):after {
                    display: none;
                }
            }
        }
        .list-shortcut {
            position: absolute;
            z-index: 30;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            padding: 20px 0;
            border-radius: 10px;
            text-align: center;
            background: rgba(167, 167, 167, 0.5);
            .item {
                padding: 3px;
                line-height: 1;
                color: black;
                font-size: 11px;
                &.current {
                    color: #C20C0C;
                    // font-weight: bold;
                }
            }
        }
    }
</style>
