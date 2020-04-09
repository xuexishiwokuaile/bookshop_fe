<template>
	<div style="width: 100%;">
		<div class="searchpanel-booksdiv">
			<BookFlash v-for="book in tablebooks" v-bind:key="book.id" v-bind:book = "book"></BookFlash>
		</div>
		<el-pagination layout="prev, pager, next" :total="books.length" :current-page.sync="cp">
		</el-pagination>

	</div>
</template>

<script>
	import BookFlash from './BookFlash.vue'
	
	export default {
		props: ["books","itemcountperpage"],
		components: {
			BookFlash,
			
		},
		data() {
			return {
				cp: 1,
			}
		},
		computed: {
			tablebooks: function() {
				return this.books.slice((this.cp - 1) * this.itemcountperpage, this.cp * this.itemcountperpage)
			}
		},
		created: function() {

		},
		methods: {

		}
	}
</script>

<style>
	.searchpanel-booksdiv {
		margin-left: 20px;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-bottom: 20px;
		margin-top: 20px;
	}
</style>
