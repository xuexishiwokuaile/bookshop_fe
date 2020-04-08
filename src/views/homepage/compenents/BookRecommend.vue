<template>
	<div class="bookrecommend">
		<div class="bookrecommend-titlediv">
			<h1 class="bookrecommend-title">推荐/猜你喜欢</h1>
			<el-button type="text" style="padding: 0px; font-size: large; display: inline; width: auto;" >换一批</el-button>
		</div>
		<el-divider style = "margin-top: 12px; margin-bottom: 12px;"></el-divider>
		<div class="bookrecommend-imagediv">
			<BookELImage class = "bookrecommend-image"  v-for = "book in books" v-bind:key = "book" v-bind:book = "book"></BookELImage>
		</div>
		
	</div>
</template>

<script>
	import BookELImage from "../../../components/BookELImage.vue";
	export default{
		props:['books'],
		components:{
			BookELImage
		},
		data(){
			return{
			}
		}
	}
</script>

<style>
	.bookrecommend{
		width: 70%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	
	.bookrecommend-titlediv{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
	}
	
	.bookrecommend-title{
		margin-block-end: 0px;
	}
	
	.bookrecommend-imagediv{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.bookrecommend-image{
		width: 20%;
		height: auto;
	}
</style>
