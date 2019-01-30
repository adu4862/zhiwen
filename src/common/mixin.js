import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'

export default {
    data() {
        return {
            skip: 0,
            limit: 10
        }
    },
    methods: {
        nextPage() {
            this.skip = this.skip + 10;
            this.limit = this.limit + 10;
        },
        toHome() {
            this.$router.push({name: 'home'});
        }
    },
}
