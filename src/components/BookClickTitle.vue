<template>
	<!-- <div class="my-click-title"> -->
		<span v-on:click = "holdclick" class="my-click-title">{{book.name}}</span>
	<!-- </div> -->
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
	.my-click-title{
		cursor: pointer;
	}
</style>
