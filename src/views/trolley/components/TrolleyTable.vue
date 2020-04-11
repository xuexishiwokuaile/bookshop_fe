<template>
<el-table :data="tableData" style="width: 100%">
			<el-table-column type="selection" width="55" align="center" header-align="center">
			</el-table-column>
			<el-table-column label="封面" width="150" align="center" header-align="center">
				<template slot-scope="scope">
					<el-image  v-bind:src="scope.row.image" style="height: 100px;width: 100px;"></el-image>
				</template>
			</el-table-column>
			
			<!-- <el-table-column label="日期" width="180">
				<template slot-scope="scope">
					<i class="el-icon-time"></i>
					<span style="margin-left: 10px">{{ scope.row.date }}</span>
				</template>
			</el-table-column> -->
			<el-table-column label="书名" width="180" align="center" header-align="center">
				<template slot-scope="scope">
					<span>{{ scope.row.name }}</span>
				</template>
			</el-table-column>
			<el-table-column label="单价" width="100"  align="center" header-align="center">
				<template slot-scope="scope">
					<span>{{ scope.row.price }}</span>
				</template>
			</el-table-column>
			<el-table-column label="数量" width="200" align="center" header-align="center">
				
				<template v-slot="scope">
					<!-- <el-input-number v-model="scope.row.count" @change="handleChange(scope.$index, scope.row)" :min="1" :max="10" label="描述文字" disp></el-input-number> -->
				<!-- <MyELInputNumber  v-bind:bookid = "scope.row.id" ></MyELInputNumber>	 -->
				<el-input-number v-model="scope.row.count" @change="handleNumChange(scope.row)" :min = "0"></el-input-number>
				</template>
			</el-table-column>
			<el-table-column label="操作" align="center" header-align="center">
				<template slot-scope="scope">
					<el-button size="mini" class="trolleytable-button" @click="handleBuyItem(scope.$index, scope.row)">购买</el-button>
					<el-button size="mini" type="danger" class="trolleytable-button" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
</template>

<script>
	// import MyELInputNumber from './MyELInputNumber.vue'
	export default {
		components:{
			// MyELInputNumber
		},
		data() {
			return {
				// tableData: this.$store.cart,
				tableData : JSON.parse(JSON.stringify(this.$store.state.cart.slice(0,this.$store.state.cart.length)))
				
			}
		},
		created:function(){
			this.tableData = JSON.parse(JSON.stringify(this.$store.state.cart.slice(0,this.$store.state.cart.length)))
			// this.tableData = this.$store.state.cart.slice(0,this.$store.state.cart.length);
			// // this.tableData.splice(2);
			// alert(this.tableData);
			// alert(this.$store.state.cart.slice(0,this.$store.state.cart.length));
		},
		computed:{
		},
		methods: {
			handleBuyItem(index, row) {
				// console.log(index, row);
				this.$store.commit("updateOrder",{
					order:[row],
					orderFromCart:true
				});
				this.$router.push("Pay");
			},
			handleDelete(index, row) {
				this.tableData.splice(this.tableData.indexOf(row),1)
				console.log(index, row);
				this.$store.commit("updateCart",this.tableData);
				// row.count++;
			},
			handleNumChange:function(row){
				console.log(row);
				this.$store.commit("updateCart",this.tableData);		
			}
		}
	}
</script>

<style>

	.trolleytable-button{
		width: auto !important;
		display: inline !important;
	}
</style>
