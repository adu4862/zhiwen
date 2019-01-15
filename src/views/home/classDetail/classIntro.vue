<template>
	<div class="class-intro">
        <div class="class-intro-sale">赚¥10.2</div>
        <div class="class-intro-banner">
			<img class="banner-img" :src="require('@/assets/img/demo_banner.png')" alt="banner">
		</div>
		<div class="class-intro-content">
			<div class="title ftb">
                <i class="icon icon--5"></i>
				法律英语基础版
			</div>
			<div class="content">熟悉法律条文，具有法律思维，能够把各种生活关系转换为法律关系，以至于在法律层面能担负起真正的法律责任</div>
			<div class="info">
				<div class="saled">
					<p class="people"><span>155</span>人开通</p>
				</div>
                <div class="price">
                    <span class="old-price">¥599</span>
                    <span class="now-price">¥299</span>
                </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		components: {}
	};
</script>

<style lang="scss" scoped>
	.class-intro {
		background-color: #fff;
        &-sale {
            position: fixed;
            right: 0;
            top: 35px;
            width: 70px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background-color: #fff;
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
        }
        &-banner {
			position: relative;
			.banner-img {
				width: 100%;
			}
		}
		&-content {
            padding: 13px 20px;
			.title {
                color: #4A4A4A;
				font-size: $font-size-md;
                .icon {
                    margin-right: 8px;
                    color: #999;
                }
			}
			.content {
				margin: 10px 0;
                font-size: $font-size-mini;
                line-height: 14px;
			}
			.info {
				display: flex;
				justify-content: space-between;
                align-items: flex-end;
				.old-price {
                    margin-left: 5px;
                    text-decoration: line-through;
                    font-size: $font-size-mini;
				}
                .now-price {
                    margin-left: 4px;
                    font-size: 20px;
                    color: #F09300;
                }
				.people {
                    font-size: $font-size-mini;
                    span {
                        color: #F09300;
                    }
                }
			}
		}
	}
</style>
