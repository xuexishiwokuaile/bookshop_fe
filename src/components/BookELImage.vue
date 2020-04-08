<template>
	<div>
		<el-image v-bind:src="book.image" :fit="fill" class = "my-el-image" v-on:click = "holdclick"></el-image>
	</div>
	
</template>

<script>
	export default{
		props:['book'],
		methods:{
			holdclick:function(){
				// alert(this.book.id);
				this.$router.push({name:'Book',params:{id:this.book.id}});
			}
		}
	}
</script>

<style>
	.my-el-image{
		width: 100%;
		height: 100%;
		cursor: pointer;
	}
</style>
