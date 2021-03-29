<template>
	<el-container>
		<el-header style = "height: auto;">
		</el-header>
		<el-main>
			<div class="homepage">
				<BookCard v-bind:books = "homepageData.carousal"/>
				<RankingList v-bind:books = "homepageData.rank"/>
				<BookRecommend v-bind:books = "homepageData.hot"></BookRecommend>
				<BookKind v-bind:bookkinds = "homepageData.bookkinds"></BookKind>
			</div>
		</el-main>
		
	</el-container>
	<!-- <el-button></el-button> -->
</template>

<script>
	import RankingList from './compenents/RankingList.vue'
	import BookCard from './compenents/BookCard.vue'
	import BookKind from './compenents/BookKind.vue'
	// import BookKindItem from './compenents/BookKindItem.vue'
	import BookRecommend from './compenents/BookRecommend.vue'
	export default {
		data(){
			return{
				homepageData: {"a":2}
			}
		},
		components:{
			BookCard,
			RankingList,
			BookKind,
			BookRecommend,
			// BookKindItem
		},
		created:function(){
			const axios = require('axios');
			var that = this;
			// alert(this.$store.baseUrl+"/index");
			axios.get(this.$store.state.baseUrl+"/index").then(function(response) {
				var a = response.data
				a.bookkinds = {
					"literature":response.data.literature,
					"philosophy":response.data.philosophy,
					"politics":response.data.politics,
					"suspense":response.data.suspense,
					"military":response.data.military,
					"art":response.data.art,
					"geography":response.data.geography,
					"fiction":response.data.fiction,
					"science":response.data.science,
					"education":response.data.education,
					"history":response.data.history,
					// "others":response.data.others,
					// "none":response.data.none,
				}
				that.homepageData = a
			})
		}
	}
	
	
</script>

<style>
	.homepage{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
	
