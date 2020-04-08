<template>
	<div class="akindofbook">
		
		<div class="akindofbook-titlediv">
			<h1 class="akindofbook-title">{{chineseKind}}</h1>
			<!-- <span style="align-self: flex-end; font-size: large">更多</span> -->
			<el-button type="text" style="padding: 0px; font-size: large; display: inline; width: auto;" >更多</el-button>
		</div>
		<el-divider style = "margin-top: 12px; margin-bottom: 12px;"></el-divider>
		<div class="akindofbook-imagediv">
			<BookELImage v-bind:book = "book" class = "akindofbook-image"  v-for = "book in books" v-bind:key = "book.id" ></BookELImage>	
		</div>
		
	</div>
	
</template>

<script>
	import BookELImage from "../../../components/BookELImage.vue";
	export default{
		props:['books','kind'],
		components:{
			BookELImage
		},
		computed:{
			chineseKind:function(){
				if (this.kind == "literature") return "文学";
				if (this.kind == "sci-fi") return "科幻";
				if (this.kind == "suspense") return "悬疑";
				return null
				// return this.kind
			}
		},
		data(){
			return{
				// kind:"文学"
				
			}
		},
		methods:{
			chooseBook:function(){
				alert("111");
			}
		}
	}
</script>

<style>
	.akindofbook{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	
	.akindofbook-titlediv{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
	}
	
	.akindofbook-title{
		margin-block-end: 0px;
	}
	
	.akindofbook-imagediv{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.akindofbook-image{
		width: 20%;
		height: auto;
	}
</style>
