// 微信分享
import wx from 'weixin-js-sdk'
import {wechatShare} from '@/api/common'
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

export default {
    data() {
        return {
            skip: 0,
            limit: 10,
            step: 10
        }
    },
    methods: {
        ...mapActions('home', ['setClassCollection']),
        // 分页
        nextPage() {
            this.skip = this.skip + this.step;
            this.limit = this.limit + this.step;
        },
        // 回首页
        toHome() {
            this.$router.push({name: 'home'});
        },
        // 添加收藏
        addCollect() {
            this.setClassCollection({
                product_id: this.classDetail.id
            }).then((res) => {
                if (res.statusCode) {
                    this.$toast({
                        msg: res.message
                    });
                    return
                }
                this.$toast({
                    msg: '收藏成功',
                    type: 'collection'
                })
            })
        },
        // 处理order排序后首个item的向上、向下间距
        initialSpace(order) {
            if (order === 1) {
                return 'initial'
            }
        },
        // 微信分享初始化
        initWxConfig() {
            let isDebug = true;     // 是否开启调试模式
            wechatShare({
                url: encodeURIComponent(location.href.split('#')[0]),
                jsApiList: [
                    'checkJsApi',
                    'onMenuShareTimeline',              // 分享到朋友圈（即将废弃）
                    'onMenuShareAppMessage',            // 分享给朋友（即将废弃）
                    'updateAppMessageShareData',        // 分享给朋友
                    'updateTimelineShareData',          // 分享到朋友圈
                    'chooseWXPay',                      // 微信支付
                ]
            }).then((res) => {
                let {appId, timestamp, nonceStr, signature, jsApiList} = res;
                wx.config({
                    debug: isDebug,   // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: appId,   // 必填，公众号的唯一标识
                    timestamp,      // 必填，生成签名的时间戳
                    nonceStr,       // 必填，生成签名的随机串
                    signature,      // 必填，签名
                    jsApiList       // 必填，需要使用的JS接口列表
                });
                wx.error(function (res) {
                    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                    console.log('error', res)
                });
            })
        }
    },
}
