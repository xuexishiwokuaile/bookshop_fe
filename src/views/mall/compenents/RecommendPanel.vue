<template>
	<div class="recommendpanel">
		<h1>榜单</h1>
		<ol>
			<li v-for="book in books" v-bind:key = "book.id" style="position: relative; right: 10px; margin-bottom: 3px;">
				<BookClickTitle v-bind:book = "book"></BookClickTitle>
			</li>
		</ol>
		<hr style="width: 80%; margin-top: 50px; margin-bottom: 50px;">
		<BookFlash v-bind:book = "books[0]"></BookFlash>
	</div>
	
</template>

<script>
	import BookFlash from './BookFlash.vue'
	import BookClickTitle from "../../../components/BookClickTitle.vue"
	export default{
		components:{
			BookFlash,
			BookClickTitle
		},
		data(){
			return{
				books : []
			}
		},
		created:function(){
			this.getRecommendBooks();
		},
		methods:{
			getRecommendBooks:function(){
				const axios = require('axios');
				var that = this;
				axios.get(this.$store.state.baseUrl+"/mall").then(function(response) {
					that.books = response.data;
				})
			}
		}
	}
</script>

<style>
	.recommendpanel{
		width: 30%;
		border-left: 2px solid #99A9BF;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
