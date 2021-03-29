<template>
		<span v-on:click = "holdclick" class="my-click-title">{{book.name}}</span>
</template>

<script>
	export default{
		props:['book'],
		methods:{
			holdclick:function(){
				this.$router.push({name:'Book',params:{id:this.book.id}});
			}
		}
	}
</script>

<style>
	.my-click-title{
		cursor: pointer;
	}
</style>
