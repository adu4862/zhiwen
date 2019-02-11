<!-- 我的页面cell -->
<template>
    <div class="cell">
        <div class="cell-left">
            <slot name="icon"></slot>
            <span class="label">{{label}}</span>
        </div>
        <router-link :to="{name: link}">
            <div class="cell-right">
                <p class="label">
                    <slot></slot>
                </p>
                <i class="cell-right-arrow"></i>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "cellItem",
        props: {
            label: {
                type: String,
                default: ''
            },
            link: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cell {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 13px 0 10px 12px;
        @include border-bottom();
        &-left {
            .icon {
                display: inline-block;
                vertical-align: middle;
                font-size: $font-size-md;
                color: #809CFF;
            }
            .label {
                margin-left: 8px;
                color: $color-important;
            }
        }
        &-right {
            display: flex;
            font-size: $font-size-sm;
            &-arrow {
                display: inline-block;
                width: 8px;
                height: 13px;
                background: url("~@/assets/img/my/cell_arrow.png") no-repeat center center;
                background-size: contain;
            }
        }
    }

    .cell:nth-last-child(1):after {
        display: none;
    }
</style>
