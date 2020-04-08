<template>
	<div>
		<BookShopToolBar></BookShopToolBar>
		<div class="mAdmin">
			<el-menu style="width: 15%; margin-right: 20px;">
				<el-menu-item index="1">统计概览</el-menu-item>
				<el-menu-item index="2">管理书目</el-menu-item>
			</el-menu>
			<router-view></router-view>
		</div>
	</div>
	
</template>

<script>
	import BookShopToolBar from '../../components/BookShopToolBar.vue'
	export default{
		components:{
			BookShopToolBar
		}
	}
</script>

<style>
	.mAdmin{
		display: flex;
	}
</style>
