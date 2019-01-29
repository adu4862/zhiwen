<template>
    <div class="punch-success">
        <div class="punch-success-card">
            <img :src="imgSrc" alt="punch-card" class="punch-success-card-img">
            <p class="punch-success-card-tips">长按图片即可保存</p>
            <p class="punch-success-card-rules-title">
                打卡规则
            </p>
            <img :src="require('@/assets/img/punch/demo_qr.png')" alt="qr" class="punch-success-card-qr">
            <p class="punch-success-card-qr-tips">长按二维码添加助教</p>
            <div class="punch-success-card-rules">
                <p>1.分享打卡图片后，系统会自动识别为打卡成功，否则算作打卡失败</p>
                <p>2.请坚持每天连续打卡，如有一天未打卡，系统将重新计算连续打卡天数</p>
                <p>3.成功连续打卡XX天后，请联系课程班主任免费领取XX，班主任将检查你的打卡分享情况，如发现没有连续分享打卡海报或已删除海报，则打卡作废，不能领取奖励</p>
            </div>
        </div>
        <div class="punch-success-bottom">
            <button class="blue-btn-48">继续学习</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "punchSuccess",
        data() {
            return {
                imgSrc: ''
            }
        },
        mounted() {
            if (this.$route.params.imgSrc) {
                this.imgSrc = this.$route.params.imgSrc;
            } else {
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .punch-success {
        padding: 11px 0 135px 0;
        min-height: 100vh;
        background: url("~@/assets/img/punch_success_bg.png") no-repeat center;
        background-size: cover;
        overflow-y: scroll;
        &-card {
            @include ftb();
            flex-flow: column;
            margin: 0 auto;
            padding: 20px 25px;
            width: 347px;
            font-size: 12px;
            color: $color-gary;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
            border: 1px solid rgba(4, 4, 4, 0.11);
            background-color: #fff;
            &-img {
                width: 143px;
                height: 207px;
            }
            &-tips {
                position: relative;
                margin-top: 12px;
                @include height(17px);
                color: $color-important;
                &:before,
                &:after {
                    content: '';
                    display: inline-block;
                    @include tb();
                    width: 15px;
                    height: 15px;
                    background: url("~@/assets/img/arrow.png") no-repeat center;
                    background-size: contain;
                }
                &:before {
                    left: -21px;
                }
                &:after {
                    right: -21px;
                }
            }
            &-rules-title {
                position: relative;
                margin-top: 21px;
                color: $color-important;
                &:before,
                &:after {
                    content: '';
                    display: inline-block;
                    @include tb();
                    width: 80px;
                    height: 1px;
                    background-color: $color-link;
                }
                &:before {
                    left: -93px;
                }
                &:after {
                    right: -93px;
                }
            }
            &-qr {
                margin-top: 16px;
                width: 56px;
                height: 56px;
            }
            &-qr-tips {
                margin-top: 5px;
                @include height(17px);
            }
            &-rules {
                margin-top: 12px;
                line-height: 18px;
            }
        }
        &-bottom {
            position: fixed;
            bottom: 0;
            padding: 8px 25px;
            width: 100%;
            height: 65px;
            background-color: #fff;
            box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.51);
            border: 1px solid rgba(220, 220, 220, 1);
        }
    }
</style>
