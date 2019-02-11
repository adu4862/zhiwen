<template>
    <div class="bind-phone-res">
        <img class="bind-phone-res-icon" :src="require('@/assets/img/icon_success.png')" alt="icon_success">
        <p class="bind-phone-res-tips">已验证</p>
        <div class="bind-phone-res-content">
            <template v-if="type==='normal'">
                <p>手机号 {{userInfo.phone}}</p>
            </template>
            <template v-else>
                <p>如你的手机号已不使用，请及时更换</p>
                <p>手机号 {{userInfo.phone}}</p>
            </template>
        </div>
        <button class="blue-btn-48" @click="handleFinish" v-if="type==='normal'">完成</button>
        <button class="blue-btn-48" @click="handleChange" v-else>更换手机号</button>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

    export default {
        name: "phoneBindRes",
        data() {
            return {
                type: 'normal'
            }
        },
        computed: {
            ...mapState(['userInfo'])
        },
        mounted() {
            if (this.$route.params.type) {
                this.type = this.$route.params.type;
            } else {
                this.type = '';
            }
        },
        methods: {
            // 更换手机号
            handleChange() {
                this.$router.push({
                    name: 'bindPhone',
                    params: {
                        type: 'change'
                    }
                })
            },
            // 完成
            handleFinish() {
                this.$router.go(-2);
            }
        }
    }
</script>

<style scoped lang="scss">
    .bind-phone-res {
        display: flex;
        flex-flow: column;
        align-items: center;
        height: 100vh;
        color: $color-important;
        background: #fff;
        &-icon {
            margin-top: 45px;
            width: 50px;
            height: 50px;
        }
        &-tips {
            margin-top: 12px;
            font-size: $font-size-md;
        }
        &-content {
            margin-top: 44px;
            text-align: center;
            font-size: $font-size-sm;
            p:nth-child(2) {
                margin-top: 7px;
            }
        }
        .blue-btn-48 {
            margin-top: 100px;
        }
    }
</style>
