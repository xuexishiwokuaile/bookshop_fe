<template>
	<div class="searchcheckboxgroup">
		<div style="margin-bottom: 10px;">
			<span style="display: inline-block; width: 50px; margin-right: 10px;">{{label}}</span>
			<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
			<!-- <el-checkbox></el-checkbox> -->
		</div>
		<el-checkbox-group v-model="checkList" style="margin-left: 10px; display: flex; flex-direction: row; flex-wrap: wrap;" @change="handleCheckListChange">
			<el-checkbox v-for="n in itemList" v-bind:key="n" v-bind:label="n" style="width: 50px; text-align: left;" class="mall-checkbox"></el-checkbox>
		</el-checkbox-group>
	</div>
</template>

<script>
	export default {
		props: ["itemList", "checkList","label"],
		data() {
			return {
				isIndeterminate: true,
				checkAll: false
				// checkList: ['选中且禁用','复选框 A']
			}
		},
		created: function() {
			// alert(this.itemList)
			let checkedCount = this.checkList.length;
			this.checkAll = checkedCount === this.itemList.length;
			this.isIndeterminate = checkedCount > 0 && checkedCount < this.itemList.length;
		},
		methods: {
			handleCheckAllChange: function(val) {
				this.checkList = val ? this.itemList : [];
				this.isIndeterminate = false;
				this.$emit("handleCheckListChange",this.checkList);
			},
			handleCheckListChange: function(value) {
				let checkedCount = value.length;
				this.checkAll = checkedCount === this.itemList.length;
				this.isIndeterminate = checkedCount > 0 && checkedCount < this.itemList.length;
				this.$emit("handleCheckListChange",this.checkList);
			}
		}
	}
</script>

<style>
	.searchcheckboxgroup {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		font-size: large;
		margin-bottom: 10px;
	}

	/* .mall-checkbox */
</style>
