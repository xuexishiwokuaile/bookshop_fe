<template>
	<div class="searchpanel">
		<!-- {{queryParams}} -->
		<div class="searchpanel-searchdiv">
			<el-input v-model="searchText" placeholder="请输入内容" style="width: 60%;"></el-input>
			<i class="el-icon-search" style="margin: 20px; cursor: pointer;" v-on:click="getSearchBooks"></i>
		</div>
		<div style="margin-left: 20px;" id = "checkboxDiv">
			<SearchCheckBoxGroup v-bind:label = "'种类'" v-bind:itemList = "typeItemList" v-bind:checkList = "typeCheckList" v-on:handleCheckListChange = "typeCheckListChange"></SearchCheckBoxGroup>
			<SearchCheckBoxGroup v-bind:label = "'国家'" v-bind:itemList = "nationItemList" v-bind:checkList = "nationCheckList"  v-on:handleCheckListChange = "nationCheckListChange"></SearchCheckBoxGroup>
			<SearchCheckBoxGroup v-bind:label = "'评分'" v-bind:itemList = "scoreItemList" v-bind:checkList = "scoreCheckList" v-on:handleCheckListChange = "scoreCheckListChange"></SearchCheckBoxGroup>
			<SearchSlide v-bind:label = "'价格'" v-bind:checkList = "priceCheckList" v-bind:max = "priceMax"  v-on:handleCheckListChange = "priceCheckListChange"></SearchSlide>
		</div>
		<BooksTableWithPagination v-bind:books = "searchBooks" v-bind:itemcountperpage = "12"></BooksTableWithPagination>
		
	</div>

</template>

<script>
	import SearchCheckBoxGroup from './SearchCheckBoxGroup.vue';
	import SearchSlide from './SearchSlide.vue'
	// import BookFlash from './BookFlash.vue';
	import BooksTableWithPagination from './BooksTableWithPagination.vue'
	export default {
		props:["initalType"],
		components:{
			SearchCheckBoxGroup,
			// BookFlash,
			SearchSlide,
			BooksTableWithPagination,
		},
		data() {
			return {
				searchBooks:[],
				searchText: "",
				typeCheckList : [],
				typeItemList:this.$store.getters.getAllTypeLabel,
				nationCheckList: [],
				// nationItemList:["美国","中国","日本","意大利","韩国"],
				nationItemList:this.$store.getters.getAllNationValue,
				scoreCheckList: [],
				scoreItemList: ["6分以下","6-7分","7-8分","8-9分","9分以上"],
				priceCheckList:[0,200],
				priceMax:200,
			}
		},
		computed:{
			queryParams:function(){
				// var a = {}
				// a["type"] = 
				
				return {
					"name":this.searchText,
					"type":this.$store.getters.getTypeValueByLabelArr(this.typeCheckList),
					"nation":this.nationCheckList,
					"score":this.scoreRange,
					"price":[""+this.priceCheckList[0]+"a"+this.priceCheckList[1]]
				}
			},
			scoreRange:function(){
				var a = [];
				// alert(JSON.stringify(a));
				// alert(JSON.stringify(this.scoreCheckList))	
				if (this.scoreCheckList.indexOf("6分以下") != -1) {a.push("0a6")}
				if (this.scoreCheckList.indexOf("6-7分")!= -1) {a.push("6a7")}
				if (this.scoreCheckList.indexOf("7-8分")!= -1) {a.push("7a8")}
				if (this.scoreCheckList.indexOf("8-9分")!= -1) {a.push("8a9")}
				if (this.scoreCheckList.indexOf("9分以上")!= -1) {a.push("9a10")}
				return a;
			},
		},
		created:function(){
			if (this.initalType.length != 0){
				this.typeCheckList = this.initalType;
			} else {
				this.typeCheckList = this.$store.getters.getAllTypeLabel;
			}
			this.nationCheckList = this.nationItemList.slice(0, this.nationItemList.length)
			this.scoreCheckList = this.scoreItemList.slice(0,this.scoreItemList.length)
			this.getSearchBooks();
			
		},
		methods:{
			typeCheckListChange:function(checkList){
				this.typeCheckList = checkList;
				this.getSearchBooks();
			},
			nationCheckListChange:function(checkList){
				// alert(JSON.stringify(checkList))
				this.nationCheckList = checkList;
				this.getSearchBooks();
			},
			scoreCheckListChange:function(checkList){
				this.scoreCheckList = checkList;
				this.getSearchBooks();
			},
			priceCheckListChange:function(checkList){
				this.priceCheckList = checkList;
				this.getSearchBooks();
			},
			getSearchBooks:function(){
				const axios = require('axios');
				var that = this;
				axios.get(this.$store.state.baseUrl+"/mall/search",{
					params:{
						types:this.queryParams.type.join(),
						nations:this.queryParams.nation.join(),
						prices:this.queryParams.price.join(),
						scores:this.queryParams.score.join(),
						name:this.queryParams.name,
					}
				}).then(function(response) {
					// alert(response);
					that.searchBooks = response.data;
				})
			}
		}
		
	}
</script>

<style>
	.searchpanel{
		padding: 20px;
		width: 70%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		
	}
	
	.searchpanel-imagediv{
		
		padding-left: -20px;
		margin-top: 40px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.searchpanel-searchdiv{
		margin-left: 20px;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 20px;
		margin-bottom: 20px;
		margin-top: 20px;
	}
	
/* 	#checkboxDiv SearchCheckBoxGroup{
		margin-bottom: 100px;
	} */
</style>
