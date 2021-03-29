<template>
	<div class="mManage">
		<!-- {{queryParams}} -->
		<div style="width: 100%; padding-top: 10px;">
			<el-select v-model="type" placeholder="请选择" style="margin-right: 10px;">
				<el-option v-for="item in this.$store.state.type" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="nation" placeholder="请选择" style="margin-right: 10px;">
				<el-option v-for="item in this.$store.state.nation" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="score" placeholder="请选择" style="margin-right: 10px;">
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
					type:(this.type.length == 0) ? (this.$store.getters.getAllTypeValue):[(this.type)],
					nation:(this.nation.length == 0) ? (this.$store.getters.getAllNationValue):[this.nation],
					price:(this.price.length == 0) ? ["0a1000000"]:[this.price],
					score:(this.score.length == 0) ? ["0a10"]:[this.score],
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
				// alert(e.id)
				if (e.id != undefined) {
					axios.put(this.$store.state.baseUrl+"/book/update", that.currentbook).then(function(response) {
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
					axios.post(this.$store.state.baseUrl+"/book/add",that.currentbook).then(function(response) {
						// alert(JSON.stringify(response.data, null, 4));
						// // alert("11");
						var state = response.data.state;
						// alert(state);
						if (state == 0) {
							that.currentbook.id = response.data.message
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
				axios.delete(this.$store.state.baseUrl+'/book/delete', {
					params: { // 请求参数拼接在url上
						id: e.id
					}
				}).then(function(response) {
					// alert(JSON.stringify(response.data, null, 4));
					// alert("11");
					if (response.data.state == 0) {
						// alert("111");
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
				// alert(JSON.stringify(this.queryParams));
				axios.get(this.$store.state.baseUrl+"/mall/search",{
					params:{
						types:this.queryParams.type.join(),
						nations:this.queryParams.nation.join(),
						prices:this.queryParams.price.join(),
						scores:this.queryParams.score.join(),
						name:"",
					}
				}).then(function(response) {
					that.books = response.data;
					that.tablebooks = that.books.slice(0, 10);
				})
			}
		},
		created: function() {
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
