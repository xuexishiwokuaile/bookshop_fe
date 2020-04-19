<template>
	<div class="mManage">
		<!-- {{queryParams}} -->
		<div style="width: 100%;">
			<el-select v-model="type" placeholder="请选择">
				<el-option v-for="item in this.$store.state.type" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="nation" placeholder="请选择" >
				<el-option v-for="item in this.$store.state.nation" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="score" placeholder="请选择">
				<el-option v-for="item in this.$store.state.score" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="price" placeholder="请选择">
				<el-option v-for="item in this.$store.state.price" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
		</div>
		<div class="top_option_panel">
			
			
			<el-button type="primary" v-on:click="handleAddBookButton">添加书籍</el-button>
			<el-pagination layout="prev, pager, next" :total="books.length" :current-page.sync="cp" @current-change="handlePageChange">
			</el-pagination>
		</div>
		<UpdateOrAddPanel v-bind:dialogFormVisible="dialogFormVisible" v-bind:book="currentbook" v-on:handleCancel="handleCancel" v-on:handleSubmit="handleSubmit"></UpdateOrAddPanel>
		<!-- <ManageTable v-bind:bookss = "books" ></ManageTable> -->
		<ManageTable  v-bind:tablebooks="tablebooks" v-bind:books="books" v-on:handleDelete="handleDelete" v-on:handleEdit="handleEdit"></ManageTable>

	</div>

</template>

<script>
	import ManageTable from './compenents/ManageTable.vue'
	import UpdateOrAddPanel from './compenents/UpdateOrAddPanel.vue'
	export default {

		components: {
			ManageTable,
			UpdateOrAddPanel
		},
		data() {
			return {
				books: [],
				tablebooks: [],
				currentbook: {},
				oldbook: {},
				cp: 1,
				dialogFormVisible: false,
				type:[],
				nation:[],
				score:[],
				price:[],
			}
		},
		computed:{
			queryParams:function(){
				return {
					type:[this.type],
					nation:[this.nation],
					priceRange:[this.price],
					scoreRange:[this.score],
				}
			}
		},
		watch:{
			queryParams:function(){
				this.queryData();
			}
		},
		methods: {
			handleAddBookButton: function() {
				// alert(this.dialogFormVisible);
				this.currentbook = new Object();
				this.dialogFormVisible = true;
			},
			handleCancel: function() {
				this.dialogFormVisible = false;
			},
			handleSubmit: function(e) {
				// alert(e);
				this.dialogFormVisible = false;
				const axios = require('axios');
				var that = this;
				if (e.id != undefined) {
					axios.put("/book/update", {
						"book": that.currentbook
					}).then(function(response) {
						alert(JSON.stringify(response.data, null, 4));
						// alert("11");
						var state = response.data.state;
						if (state == 1) {
							that.books[that.books.indexOf(that.currentbook)] = that.oldbook;
							that.tablebooks = that.books.slice((that.cp - 1) * 10, that.cp * 10);
							that.$notify.error({
								title: '修改错误',
								message: response.data.message
							});
						}
					})
				} else {
					axios.post("/book/add", {
						"book": that.currentbook
					}).then(function(response) {
						// alert(JSON.stringify(response.data, null, 4));
						// // alert("11");
						var state = response.data.state;
						// alert(state);
						if (state == 0) {
							that.books.unshift(that.currentbook);
							that.tablebooks = that.books.slice((that.cp - 1) * 10, that.cp * 10);
						} else {
							that.$notify.error({
								title: '添加错误',
								message: response.data.message
							});
						}
					})
				}
			},
			handlePageChange: function(e) {
				// alert(e);
				// alert(this.cp);
				this.tablebooks = this.books.slice((e - 1) * 10, e * 10);
			},
			handleEdit: function(e) {
				// alert(e.id);
				this.oldbook = JSON.parse(JSON.stringify(e));
				this.currentbook = e;
				this.dialogFormVisible = true;
			},
			handleDelete: function(e) {
				const axios = require('axios');
				var that = this;
				axios.delete('/book/delete', {
					data: { // 请求参数拼接在url上
						id: 12
					}
				}).then(function(response) {
					alert(JSON.stringify(response.data, null, 4));
					// alert("11");
					if (response.data.state == 0) {
						alert("111");
						that.books.splice(that.books.indexOf(e), 1)
						that.tablebooks = that.books.slice((that.cp - 1) * 10, that.cp * 10);
					} else {
						that.$notify.error({
							title: '删除错误',
							message: response.data.message
						});
					}
				})
			},
			queryData:function(){
				const axios = require('axios');
				var that = this;
				axios.post("/search",{
					data:this.queryParams
				}).then(function(response) {
					that.books = response.data.books;
					that.tablebooks = that.books.slice(0, 10);
				})
			}
		},
		created: function() {
			var Mock = require('mockjs')
			// Mock.mock("/book/findAll", {
			// 	"books|50": [{
			// 		"id|+1": 1,
			// 		"name": Mock.Random.cword(1, 6),
			// 		"intro": Mock.Random.cparagraph(2, 6),
			// 		"image": "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
			// 		"price": Mock.Random.float(0, 1000),
			// 		"count": Mock.Random.natural(0, 1000),
			// 	}]
			// });
			Mock.mock("/book/add", {
				"state": 0,
				"message": "添加错误预填充文本"
			});
			Mock.mock("/book/update", {
				"state": 0,
				"message": "编辑错误预填充文本"
			});
			Mock.mock("/book/delete", {
				"state": 0,
				"message": "删除错误预填充文本"
			});
			Mock.mock("/search", {
				"books|23": [{
					"id|+1": 1,
					"name": Mock.Random.cword(1, 6),
					"intro": Mock.Random.cparagraph(2, 6),
					"image": "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
					"price": Mock.Random.float(0, 1000),
					"count": Mock.Random.natural(0, 1000),
				}]
			})
			const axios = require('axios');
			var that = this;
			axios.get(this.$store.state.baseUrl+"/book/findAll").then(function(response) {
				that.books = response.data;
				that.tablebooks = that.books.slice(0, 10);
			})
		}

	}
</script>

<style>
	.mManage {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.top_option_panel {
		margin: 20px;
		display: flex;
		align-items: center;
	}
	
	/* .mManage .el-select{
		width: 20%;
		margin: 10px 1%;
	} */
</style>
