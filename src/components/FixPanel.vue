<template>
	<div class="fixpanel">
		<i class="el-icon-shopping-bag-2" v-on:click="clickToMall"></i>
		<i class="el-icon-shopping-cart-2" v-on:click="clickToTrolley"></i>
		<i class="el-icon-s-custom" v-on:click="clickToMe"></i>
	</div>
</template>

<script>
	export default{
		methods:{
			clickToMall:function(){
				this.$router.push("/general/Mall");
			},
			clickToTrolley:function(){
				this.$router.push("/general/Trolley");
			},
			clickToMe:function(){
				switch (this.$store.state.user.authority){
					case 0:
						this.$router.push("/customer/information");
						break;
					case 1:
						this.$router.push("/admin/manage");
						break;
					default:
						this.$router.push("/login");
						break;
				}
			},
		}
	}
</script>

<style>
	.fixpanel{
		font-size: 40px;
		height: 30%;
		position: fixed;
		right: 10px;
		top: 35%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		/* border: 2px solid #475669; */
		color: #99A9BF;
	}
	
	.fixpanel i{
		cursor: pointer;
	}
</style>
