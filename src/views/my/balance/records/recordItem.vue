<template>
    <div class="my-balance-records-item">
        <div>
            <p>提现时间 2018-09-12 12:00:00</p>
            <p>到账时间 2018-09-12 12:00:00</p>
        </div>
        1000.00元
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
        padding: 15px 20px;
        @include border-bottom();
    }
</style>
