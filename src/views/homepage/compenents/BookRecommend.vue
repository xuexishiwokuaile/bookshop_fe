<template>
	<div class="bookrecommend">
		<div class="bookrecommend-titlediv">
			<h1 class="bookrecommend-title">推荐/猜你喜欢</h1>
			<el-button type="text" style="padding: 0px; font-size: large; display: inline; width: auto;" >换一批</el-button>
		</div>
		<el-divider style = "margin-top: 12px; margin-bottom: 12px;"></el-divider>
		<div class="bookrecommend-imagediv">
			<div v-for="book in books"  v-bind:key = "book.id" class="akindofbook-bookdiv">
				<BookELImage v-bind:book = "book" class = "akindofbook-image"></BookELImage>	
				<BookClickTitle style="margin-top: 5px; margin-bottom: 10px;" v-bind:book = "book"></BookClickTitle>
			</div>
		</div>
		
	</div>
</template>

<script>
	import BookELImage from "../../../components/BookELImage.vue";
	import BookClickTitle from "../../../components/BookClickTitle.vue"
	export default{
		props:['books'],
		components:{
			BookELImage,
			BookClickTitle
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
