<template>
    <div class="my">
        <div class="my-head">
            <img class="img" src="http://cdn.zmqnw-images.zmqnw.com.cn/2017/12/28/132806689309a1.jpg?width=640&amp;height=640" alt="head-img">
            我是袁哲
        </div>
        <van-cell title="手机绑定" is-link value="内容" />
        <van-cell title="我的余额" is-link value="内容" />
        <van-cell title="推广中心" is-link value="内容" />
        <van-cell title="我的订单" is-link value="内容" />
        <van-cell title="我的收藏" is-link value="内容" />
    </div>
</template>

<script>
   export default {
     data () {
       return {}
   },
   components: {},
 }
</script>

<style lang="scss" scoped>
    .my {
        &-head {
            padding-top: 50px;
            padding-bottom: 50px;
            display: flex;
            flex-flow: column;
            align-items: center;
            img {
                margin-bottom: 15px;
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
        }
    }
</style>
