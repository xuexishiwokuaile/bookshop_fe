<template >
	<div class="book">
		<BookCard v-bind:book = "book"></BookCard>
		<BookMenu v-bind:book = "book"></BookMenu>
		
		<!-- <MyELInputNumber v-bind:id = "book.id"></MyELInputNumber> -->
	</div>
	
</template>

<script>
	import BookCard from "./compenents/BookCard.vue"
	import BookMenu from "./compenents/BookMenu.vue"
	// import MyELInputNumber from "../trolley/components/MyELInputNumber.vue"
	export default{
		// props:['id'],
		components:{
			BookCard,
			BookMenu,
			// MyELInputNumber
		},
		data(){
			return{
				book: {"a":2}
			}
		},
		created:function(){
			// alert(this.$route.params.id);
			var Mock = require('mockjs');
			Mock.mock(RegExp("/book/findOneById" + ".*"), {
				"book": {
					"id": this.$route.params.id,
					// "id":"11111111",
					"name": Mock.Random.cword( 1, 6 ),
					"intro": Mock.Random.cparagraph(2,6),
					"image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586172355682&di=31600e8b212c48e26d500780a2e2e9a5&imgtype=0&src=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2F531687c20bf8ce36c59812485314b0dd.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100",
					"price":27,
					"stock-count":22
				}
			});
			const axios = require('axios');
			var that = this;
			axios.get("/book/findOneById",{
				params:{
					id:this.$route.params.id
				}
			}).then(function(response) {
				// alert(JSON.stringify(response.data, null, 4));
				that.book = response.data.book
				
			})
		},
		
	}
	
</script>

<style>
	.book{
		margin-top: 30px;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: center;
	}
</style>
