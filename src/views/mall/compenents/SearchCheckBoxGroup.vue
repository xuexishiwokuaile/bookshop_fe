<template>
	<div class="searchcheckboxgroup">
		<span>{{la}}</span>
		<el-checkbox-group v-model="checkList" style="margin-left: 10px;">
			<el-checkbox label="复选框 A"></el-checkbox>
			<el-checkbox label="复选框 B"></el-checkbox>
			<el-checkbox label="复选框 C"></el-checkbox>
		</el-checkbox-group>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				la:"作者",
				checkList: ['选中且禁用','复选框 A']
			}
		},
	}
</script>

<style>
	.searchcheckboxgroup{
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: large;
	}
</style>
