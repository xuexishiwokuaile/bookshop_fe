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
		},
		created:function(){
			
			var Mock = require('mockjs')
			Mock.mock("/homepage/books", {
				"carousal|5": [{
					"id": Mock.Random.string(8),
					"name": Mock.Random.cword( 1, 6 ),
					"intro": Mock.Random.cparagraph(2,6),
					"image": "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
				}],
				"rank|10": [{
					"id": Mock.Random.string(8),
					"name": Mock.Random.cword( 1, 6 ),
					"intro": Mock.Random.cparagraph(20,60),
					"image": 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
				}],
				"hot|4": [{
					"id": Mock.Random.string(8),
					"name": Mock.Random.cword( 1, 6 ),
					"intro": Mock.Random.cparagraph(20,60),
					"image": 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
				}],
				"bookkinds":{
					"literature|4": [{
						"id": Mock.Random.string(8),
						"name": Mock.Random.cword( 1, 6 ),
						"intro": Mock.Random.cparagraph(20,60),
						"image": 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
					}],
					"sci-fi|4": [{
						"id": Mock.Random.string(8),
						"name": Mock.Random.cword( 1, 6 ),
						"intro": Mock.Random.cparagraph(20,60),
						"image": 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
					}],
					"suspense|4": [{
						"id": Mock.Random.string(8),
						"name": Mock.Random.cword( 1, 6 ),
						"intro": Mock.Random.cparagraph(20,60),
						"image": 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
					}]
				}
			})
			const axios = require('axios');
			var that = this;
			axios.get("/homepage/books").then(function(response) {
				// alert(JSON.stringify(response.data, null, 4));
				that.homepageData = response.data
				// alert(JSON.stringify(that.homepageData));
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
	
