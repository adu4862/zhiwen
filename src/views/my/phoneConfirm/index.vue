<template>
    <div class="confirm-phone">
        <div class="confirm-phone-tips">
            <p>
                <i class="iconfont icon-weibo"></i>
                已验证
            </p>
            <p>如你的手机号已不使用，请及时更换</p>
        </div>
        <div class="confirm-phone-detail">
            <span>手机号</span>
            <span>15333690618</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "phoneConfirm"
    }
</script>

<style scoped lang="scss">
    .confirm-phone {
        &-tips {
            text-align: center;
        }
        &-detail {
            padding: 15px 15px;
            background-color: #fff;
            span {
                margin-right: 10px;
            }
        }
    }
</style>
