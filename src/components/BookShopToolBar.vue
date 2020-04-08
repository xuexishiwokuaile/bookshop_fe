<template>
	<div class = "bookshoptoolbar">
		
		<el-menu :default-active="activeIndex" mode = "horizontal" @select="handleSelect" class="bookshoptoolbar-menu">
			<span><h1 style="font-size: xx-large">网上书店</h1></span>
			<el-menu-item index="1">首页</el-menu-item>
			<el-menu-item index="2">商城</el-menu-item>
			<el-menu-item index="3">购物车</el-menu-item>
			<el-menu-item index="4">{{lastItemText}}</el-menu-item>
		</el-menu>

	</div>
</template>

<script>
	export default{
		data(){
			return {
				activeIndex: '1',
			};
		},
		computed:{
			lastItemText:function(){
				switch (this.$store.state.user.authority){
					case 0:
						return "我的"
					case 1:
						return "管理"
					default:
						return "登录/注册"
				}
			}
		},
		methods:{
			handleSelect(key, keyPath){
				console.log(key,keyPath);
				switch (key){
					case '1':
						this.$router.push("/general/homepage");
						break;
					case '2':
						this.$router.push("/general/mall");
						break;
					case '3':
						this.$router.push("/general/trolley");
						break;
					case '4':
						// this.$router.push("/general/me");
						// break;
						switch (this.$store.state.user.authority){
							case 0:
								this.$router.push("/me");
								break;
							case 1:
								this.$router.push("/admin/manage");
								break;
							default:
								this.$router.push("/login");
								break;
						}
					
				}
			}
		}
	}
</script>

<style>
	.bookshoptoolbar{
		width: 90%;
		height: autp; 
		margin: 0 auto;
		
	}
	
	.bookshoptoolbar-menu{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
</style>
