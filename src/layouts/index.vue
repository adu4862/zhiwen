<template>
	<div class="layout-container">
		<div class="content-container">
			<slot></slot>
		</div>
		<TabBar v-show="isBar"/>
	</div>
</template>

<script>
	import TabBar from "./tabBar";

	export default {
		name: "Layout",
		components: {
			TabBar
		},
		data() {
			return {};
		},
		computed: {
			// 除首页、我的，其他页面不显示tabBar，需要显示的添加到白名单即可
			isBar() {
				let whiteNameList = ["home", "my"];
				if (whiteNameList.includes(this.$route.name)) {
					return true;
				}
				return false;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.layout-container {
        display: flex;
        flex-flow: column;
		height: 100vh;
		.content-container {
            display: flex;
            flex-flow: column;
            flex: 1;
			overflow-x: hidden;
			overflow-y: scroll;
            background-color: #F5F5F5;
        }
	}
</style>
