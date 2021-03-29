<template>
	<div style="width: 100%;" >
		<el-table :data="tablebooks" border style="width: 90%; margin: 0 auto;" >
			<el-table-column  label="封面" width="120" align="center" header-align="center">
				<template v-slot="scope">
					<el-image v-bind:src = "scope.row.image" style="width: 100px; height: 100px;"></el-image>
				</template>
			</el-table-column>


			<el-table-column prop="name" label="书名" align="center" header-align="center">
			</el-table-column>
			<el-table-column prop="author" label="作者" align="center" header-align="center">
			</el-table-column>
			<el-table-column prop="price" label="单价" align="center" header-align="center">
			</el-table-column>
			<el-table-column label="操作" align="center" header-align="center">
				<template v-slot="scope">
					<div style="color: #67C23A; display: inline; font-size: 30px; margin-right: 30px; cursor: pointer;" >
						<i class="el-icon-edit" @click="handleEdit(scope.row)"></i>
					</div>
					<div style="color: #F56C6C; display: inline; font-size: 30px; cursor: pointer;">
						<i class="el-icon-error" @click="handleDelete(scope.row)"></i>
					</div>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		props: ['tablebooks','books'],
		methods:{
			handleEdit: function(e) {
				// alert(JSON.stringify(e))
				this.$emit("handleEdit",e);
			},
			handleDelete:function(e){
				// alert("晓璐");
				// this.tablebooks.splice(this.tablebooks.indexOf(e),1);
				this.$emit("handleDelete",e);
			}
		}
		
	}
</script>

<style>
</style>
