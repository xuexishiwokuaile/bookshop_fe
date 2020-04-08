<template >
	<div style="width: 100%;">
		<el-carousel :interval="4000" type="card" height="300px" style="width: 90%;margin: 0 auto;" >
			<el-carousel-item v-for="book in books" :key="book.id">
				<el-row gutter="20" style="padding: 30px; height: 100%;">
					<el-col :span="11" :offset="1" style="height: 100%;">
						<BookELImage v-bind:book = "book"  style="height: 100%;"></BookELImage>
					</el-col>
					<el-col :span="11" :offset="0" class="bookcard-textcol">
						<h2 v-on:click="chooseBook(book.id)">{{book.name}}</h2>
						<p style="margin: 0px; text-align: start;">{{book.intro}}</p>
					</el-col>
				</el-row>
			</el-carousel-item>
		</el-carousel>
	</div>
	
</template>

<script>
	
	// 输出结果
	// alert(JSON.stringify(data, null, 4))
	import BookELImage from "../../../components/BookELImage.vue";
	export default {
		props:['books'],
		components:{
			BookELImage
		},
		data() {
			return {
				src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
				// books: ['1', '2', '3', '4', '5'],
				// fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
				fits: ['fill', 'fill', 'fill', 'fill', 'fill'],
				url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
			}
		},
		methods: {
			chooseBook: function(id) {
				this.$router.push({name:'Book',params:{id:id}});
				
			}
		}
	}
</script>

<style>
	.el-card {}

	.el-carousel__item {
		/* background-color: #ffffff;
		border: 1px solid #e5e5e5;
		width: 30%;
		left: 10%;
		height: 240px; */

	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.time {
		font-size: 13px;
		color: #999;
	}

	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}

	.button {
		padding: 0;
		float: right;
	}

	.image {
		width: 100%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}
	
	.bookcard-textcol{
		height: 100%; 
		display: flex;
		flex-direction: column; 
		
		align-items: flex-start;
	}
</style>
