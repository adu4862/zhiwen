<template>
    <div class="my-balance-records-item">
        <div class="my-balance-records-item-time">
            <p>提现时间 2018-09-12 12:00:00</p>
            <p>到账时间 2018-09-12 12:00:00</p>
        </div>
        <div class="my-balance-records-item-balance">
            <span>1000.00</span> 元
        </div>
    </div>
</template>

<script>
    export default {
        name: "recordItem"
    }
</script>

<style scoped lang="scss">
    .my-balance-records-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 0;
        @include border-bottom();
        font-size: $font-size-sm;
        color: #828282;
        background-color: #fff;
        &-time {
            p:nth-child(2) {
                margin-top: 6px;
            }
        }
        &-balance span {
            font-size: 18px;
            color: #F09300;
        }
    }
</style>
