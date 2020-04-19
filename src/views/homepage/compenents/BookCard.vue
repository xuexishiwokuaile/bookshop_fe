<template >
	<div style="width: 100%;">
		<el-carousel :interval="4000" type="card" height="300px" style="width: 90%;margin: 0 auto;" >
			<el-carousel-item v-for="book in books" :key="book.id">
				<el-row gutter="20" style="padding: 30px; height: 100%;">
					<el-col :span="11" :offset="1" style="height: 100%;">
						<BookELImage v-bind:book = "book"  style="height: 100%;"></BookELImage>
					</el-col>
					<el-col :span="11" :offset="0" class="bookcard-textcol">
						<h2><BookClickTitle v-bind:book = "book"></BookClickTitle></h2>
						<p style="margin: 0px; text-align: start; text-overflow: ellipsis; height: 100%; overflow: hidden;" >{{book.intro}}</p>	
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
	import BookClickTitle from "../../../components/BookClickTitle.vue"
	export default {
		props:['books'],
		components:{
			BookELImage,
			BookClickTitle,
		},
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>

<style>
	.el-card {}

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
