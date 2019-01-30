import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

export default {
    data() {
        return {
            skip: 0,
            limit: 10
        }
    },
    methods: {
        ...mapActions('home', ['setClassCollection']),
        nextPage() {
            this.skip = this.skip + 10;
            this.limit = this.limit + 10;
        },
        toHome() {
            this.$router.push({name: 'home'});
        },
        addCollect() {
            this.setClassCollection({
                product_id: this.classDetail.id
            }).then((res) => {
                this.$toast({
                    msg: '收藏成功',
                    type: 'collection'
                })
            })
        }
    },
}
