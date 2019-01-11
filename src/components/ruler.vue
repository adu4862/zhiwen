<template>
    <div class="m-ruler">
        <div class="m-ruler-line" v-for="item in 100"></div>
    </div>
</template>

<script>
    export default {
        name: "ruler"
    }
</script>

<style scoped lang="scss">
    .m-ruler {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 1px 9px;
        width: 156px;
        height: 21px;
        border: 1px solid #666666;
        border-radius: 4px;
        &-line {
            margin-right: 1px;
            width: 1px;
            height: 4px;
            background: #666666;
        }
        &-line:nth-child(9n+2) {
            height: 6px;
        }
        &-line:last-child {
            margin-right: initial;
        }
    }
    .m-ruler:after {
        content: '';
        width: 10px;
        height: 4px;
        background-color: #F5F5F5;
        position: absolute;
        bottom: -2px;
        right: 10px;
    }
    .m-ruler:before {
        content: '';
        width: 5px;
        height: 3px;
        background-color: #F5F5F5;
        position: absolute;
        top: -2px;
        left: 15px;
    }
</style>
