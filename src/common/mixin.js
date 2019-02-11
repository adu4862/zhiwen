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
        }
    },
}
