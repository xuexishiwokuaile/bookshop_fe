<template>
	<div class="rankinglistitem">
		<!-- {{book}} -->
		<p class="rankinglistitem-text"></p>
		<BookELImage  v-bind:book = "book" class='rankinglistitem-image'>
		</BookELImage>
		<p class="rankinglistitem-text" v-on:click="holdClick">{{rank+"."+book.name}}</p>
	</div>
	
	
</template>

<script>
	import BookELImage from "../../../components/BookELImage.vue";
	export default{
		props:{
			'book':Object,
			'rank':Number,
		},
		components:{
			BookELImage
		},
		data(){
			return{
				url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
				title:'书籍1'
			}
		},
		methods:{
			holdClick:function(){
				this.$router.push({name:'Book',params:{id:this.book.id}});
			}
		}
	}
</script>

<style>
	.rankinglistitem{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	
	.rankinglistitem-image{
		width: 80px;
		height: 80px;
		margin-left: 20px;
		padding: 20px;
	}
	
	.rankinglistitem-text{
		font-size: x-large;
		cursor: pointer;
	}
</style>
