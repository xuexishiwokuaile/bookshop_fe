<template>
	<div>
		<BookELImage v-bind:book = "book" style="width: 140px; height: 160px; margin-left: 20px; margin-right: 20px;"></BookELImage>
		<div style="margin: 15px auto;">
			<BookClickTitle v-bind:book = "book">禅意山水</BookClickTitle>
		</div>
	</div>
	
</template>

<script>
	import BookELImage from '../../../components/BookELImage.vue'
	import BookClickTitle from '../../../components/BookClickTitle.vue'
	export default{
		props:["book"],
		components:{
			BookELImage,
			BookClickTitle
		}
	}
</script>

<style>
</style>
