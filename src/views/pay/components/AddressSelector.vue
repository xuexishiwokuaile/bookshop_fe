<template>
	<div class="addressselector">
		<p>收获信息</p>
		<el-select v-model="value" clearable placeholder="请选择" style="width: 500px;">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" >
			</el-option>
		</el-select>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					value: 'Beijing',
					label: '冯文翰 中国湖北省武汉市武汉大学信息学部'
				}, {
					value: 'tianjin',
					label: '孙悟空 东胜神州傲来国花果山水帘洞'
				}],
				value: ''
			}
		}
	}
</script>

<style>
	.addressselector{
		width: 80%;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
