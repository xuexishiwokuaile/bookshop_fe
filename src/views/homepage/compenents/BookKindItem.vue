<template>
	<div class="akindofbook">
		
		<div class="akindofbook-titlediv">
			<h1 class="akindofbook-title">{{chineseKind}}</h1>
			<!-- <span style="align-self: flex-end; font-size: large">更多</span> -->
			<el-button type="text" style="padding: 0px; font-size: large; display: inline; width: auto; cursor: pointer;" v-on:click = "handleMore">更多</el-button>
		</div>
		<el-divider style = "margin-top: 12px; margin-bottom: 12px;"></el-divider>
		<div class="akindofbook-imagediv">
			<div v-for="book in books"  v-bind:key = "book.id" class="akindofbook-bookdiv">
				<BookELImage v-bind:book = "book" class = "akindofbook-image"></BookELImage>	
				<BookClickTitle style="margin-top: 5px; margin-bottom: 10px;" v-bind:book = "book" ></BookClickTitle>
	
			</div>
		</div>
		
	</div>
	
</template>

<script>
	import BookELImage from "../../../components/BookELImage.vue";
	import BookClickTitle from "../../../components/BookClickTitle.vue";
	export default{
		props:['books','kind'],
		components:{
			BookELImage,
			BookClickTitle,
		},
		computed:{
			chineseKind:function(){
				return this.$store.getters.getTypeCNameByEname(this.kind);
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
			},
			handleMore:function(){
				this.$store.commit("addMallInitalTypeItem",this.chineseKind);
				this.$router.push("Mall");
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
		width: 100%;
		/* height: auto; */
		height: 250px;
	}
	
	.akindofbook-bookdiv{
		width: 20%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
