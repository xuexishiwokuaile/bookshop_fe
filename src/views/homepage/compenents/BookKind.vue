<template>
	<div class="bookkind">
		<!-- {{bookkinds}} -->
		<BookKindItem v-for = "(books, kind) in bookkinds" v-bind:key = "kind" v-bind:books = "books" v-bind:kind = "kind"/>
	</div>
	
</template>

<script>
	import BookKindItem from './BookKindItem.vue';
	export default{
		props:['bookkinds'],
		components:{
			BookKindItem
		}
	}
</script>

<style>
	.bookkind{
		width: 70%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
</style>
