<template>
	<div>
		<BookShopToolBar></BookShopToolBar>
		<FixPanel></FixPanel>
		<div class="mAdmin">
			<el-menu style="width: 20%; margin-right: 20px;" @select="handleSelect">
				<el-menu-item index="1">个人资料</el-menu-item>
				<el-menu-item index="2">购买历史</el-menu-item>
			</el-menu>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import BookShopToolBar from '../../components/BookShopToolBar.vue'
	import FixPanel from '../../components/FixPanel.vue'
	export default{
		components:{
			BookShopToolBar,
			FixPanel
		},
		methods:{
			handleSelect(key, keyPath){
				console.log(key,keyPath);
				switch (key){
					case '1':
						this.$router.push("Information");
						break;
					case '2':
						this.$router.push("History");
						break;
					
					
				}
			}
		}
	}
</script>

<style>
	.mAdmin{
		display: flex;
	}
</style>
