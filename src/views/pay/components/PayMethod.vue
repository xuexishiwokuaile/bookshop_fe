<template>
	<div class="paymethod">
		<p>收获信息</p>
		<el-select v-model="value" clearable placeholder="请选择" style="width: 200px;">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" >
			</el-option>
		</el-select>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				options: [{
					value: 0,
					label: '支付宝'
				}, {
					value: 1,
					label: '微信支付'
				}, {
					value: 2,
					label: '中国银联'
				}],
				value: ''
			}
		}
	}
</script>

<style>
	.paymethod{
		width: 80%;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
