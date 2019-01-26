<template>
    <div class="country">
        <div class="country-list" ref="listView">
            <!-- 列表 -->
            <ul>
                <li v-for="group in code" class="country-list-group" :key="group.id" ref="listGroup">
                    <template v-if="group.items.length">
                        <h2 class="country-list-group-title">{{ group.title }}</h2>
                        <ul class="country-list-group-box">
                            <li v-for="item in group.items" class="country-list-group-box-item"
                                :key="item.id" @click="handleCode(item.code)">
                                <span class="name">{{ item.label }}</span>
                                <span class="name">{{ item.code }}</span>
                            </li>
                        </ul>
                    </template>
                </li>
            </ul>
        </div>
        <!-- 右侧导航 -->
        <div class="country-guide">
            <ul>
                <li v-for="(item, index) in shortcutList"
                    class="country-guide-item"
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
        <!--上方搜索-->
        <div class="country-search">
            <input id="q" v-model="searchVal" type="text" class="country-search-input">
            <div class="country-search-holder" v-show="isHolder">
                <img class="country-search-holder-icon" :src="require('@/assets/img/icon_search.png')"
                     alt="icon_search">
                <label class="country-search-holder-label" for="q">搜索</label>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import code from './phoneCode'
    import {copyObj, trim, fistLetterUpper} from '@/common/util'
    import {mapState, mapMutations, mapActions, mapGetters} from "vuex";

    export default {
        name: "areaSelect",
        data() {
            return {
                code,
                scrollY: 0,
                currentIndex: 0,
                searchVal: '',
                isHolder: true
            }
        },
        computed: {
            shortcutList() {
                return this.code.map((group) => {
                    return group.title;
                })
            }
        },
        watch: {
            scrollY(newVal) {
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
            },
            searchVal(val) {
                let data = copyObj(code);
                let arr = [];
                if (trim(val)) {
                    this.isHolder = false;
                    data.map((group, idx) => {
                        if (JSON.stringify(group.items).toLowerCase().indexOf(val) !== -1) {
                            let array = {
                                title: group.title,
                                items: []
                            };
                            group.items.map((item, index) => {
                                if (JSON.stringify(item).toLowerCase().indexOf(val) !== -1) {
                                    array.items.push(item);
                                }
                            });
                            arr.push(array)
                        }
                    });
                    this.code = arr;
                } else {
                    this.isHolder = true;
                    this.code = data;
                }
            }
        },
        created() {
            this.touch = {};
            // 初始化 better-scroll 必须要等 dom 加载完毕
            setTimeout(() => {
                this._initSrcoll();
                this._calculateHeight();
            }, 20)
        },
        methods: {
            ...mapMutations({
                setPhoneCode: "SET_PHONE_CODE"
            }),
            _initSrcoll() {
                this.scroll = new BScroll(this.$refs.listView, {
                    probeType: 3,
                    click: true
                });

                this.scroll.on('scroll', (pos) => {
                    this.scrollY = pos.y;
                })
            },
            onShortcutStart(e) {
                // 获取到绑定的 index
                let index = e.target.getAttribute('data-index');
                // 使用 better-scroll 的 scrollToElement 方法实现跳转
                this.scrollToElement(index);

                // 记录一下点击时候的 Y坐标 和 index
                let firstTouch = e.touches[0].pageY;
                this.touch.y1 = firstTouch;
                this.touch.anchorIndex = index;
            },
            onShortcutMove(e) {
                // 再记录一下移动时候的 Y坐标，然后计算出移动了几个索引
                let touchMove = e.touches[0].pageY;
                this.touch.y2 = touchMove;
                // 这里的 16.7 是索引元素的高度
                let delta = Math.floor((this.touch.y2 - this.touch.y1) / 16.7);

                // 计算最后的位置
                // * 1 是因为 this.touch.anchorIndex 是字符串，用 * 1 偷懒的转化一下，转成数字
                let index = this.touch.anchorIndex * 1 + delta;
                this.scrollToElement(index);
            },
            scrollToElement(index) {
                // 处理边界情况
                // 因为 index 通过滑动距离计算出来的
                // 所以向上滑超过索引框框的时候就会 < 0，向上就会超过最大值
                if (index < 0) {
                    return
                } else if (index > this.listHeight.length - 2) {
                    index = this.listHeight.length - 2
                }
                // listHeight 是正的， 所以加个 -
                this.scrollY = -(this.listHeight[index] + 60);
                this.scroll.scrollToElement(this.$refs.listGroup[index]);
            },
            _calculateHeight() {
                this.listHeight = [];
                const list = this.$refs.listGroup;
                let height = 0;
                this.listHeight.push(height);
                for (let i = 0; i < list.length; i++) {
                    let item = list[i];
                    height += item.clientHeight;
                    this.listHeight.push(height);
                }
            },
            handleCode(code) {
                this.setPhoneCode(code);
                this.$router.go(-1);
            }
        },
    }
</script>

<style lang="scss">
    .country {
        position: fixed;
        width: 100%;
        height: 100%;
        &-list {
            position: relative;
            margin-top: 60px;
            margin-bottom: 20px;
            width: 100%;
            height: 88%;
            overflow: hidden;
            &-group {
                &-title {
                    height: 30px;
                    line-height: 30px;
                    padding-left: 16px;
                    font-size: 12px;
                    color: $color-gary;
                }
                &-box {
                    margin: 0 auto;
                    width: 357px;
                    background-color: #fff;
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
            }
        }
        &-guide {
            position: absolute;
            z-index: 30;
            right: 14px;
            top: 50%;
            transform: translateY(-50%);
            text-align: center;
            &-item {
                padding: 3px;
                line-height: 9px;
                font-size: $font-size-sm;
                color: $color-important;
                &.current {
                    color: #C20C0C;
                }
            }
        }
        &-search {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            padding: 14px 21px;
            background-color: #fff;
            &-input {
                width: 333px;
                height: 32px;
                text-align: center;
                background: rgba(129, 153, 252, .1);
            }
            &-holder {
                @include ct();
                @include ftb();
                &-icon {
                    width: 14px;
                    height: 14px;
                }
                &-label {
                    margin-left: 3px;
                    font-size: 15px;
                }
            }
        }
    }
</style>
