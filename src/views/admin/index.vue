<template>
	<div>
		<BookShopToolBar></BookShopToolBar>
		<div class="mAdmin">
			<el-menu style="width: 20%; margin-right: 20px;"  @select="handleSelect">
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
		},
		methods:{
			handleSelect(key, keyPath){
				console.log(key,keyPath);
				switch (key){
					case '1':
						this.$router.push("Statistics");
						break;
					case '2':
						this.$router.push("Manage");
						break;
				}
			}
		}
	}
</script>

<style>
	.mAdmin{
		width: 100%;
		display: flex;
	}
</style>
