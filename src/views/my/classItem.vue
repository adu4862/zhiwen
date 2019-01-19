<template>
    <ClassPanel class="my-class-item">
        <ClassBanner slot="banner"/>
        <div class="my-class-item-content">
            <div class="info">
                <p class="class-item-title ellipsis">法律英语基础版法律英语基础版法律英语基础版</p>
                <p class="desc">熟悉法律条文,具有法律思维,能够把各种生活关系转换熟悉法律条文,具有法律思维,能够把各种生活关系转换</p>
            </div>
            <div class="process">
                学习进度37%
            </div>
        </div>
    </ClassPanel>
</template>

<script>
    import {SectionTitle, ClassPanel, ClassBanner} from '@/components'

    export default {
        name: "classItem",
        components: {
            ClassPanel,
            ClassBanner,
        }
    }
</script>

<style scoped lang="scss">
    .my-class-item {
        box-shadow: 0 2px 6px 2px rgba(219, 228, 242, 1);
        border-radius: 4px;
        &-content {
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            padding: 8px 8px 8px 2px;
            .info {
                @include ellipsis();
                font-size: $font-size-mini;
                .desc {
                    margin-top: 4px;
                }
            }
            .process {
                font-size: $font-size-mini;
                color: $color-lighting;
            }
        }
    }
</style>
