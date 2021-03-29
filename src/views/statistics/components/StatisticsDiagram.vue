<template>
	<div id="myChart" style="width: 70%; height: 400px; margin-right: 20px;">
		<!-- 123 -->
	</div>
</template>

<script>
	// 引入基本模板
	let echarts = require('echarts/lib/echarts')
	// 引入柱状图组件
	require('echarts/lib/chart/line')
	// 引入提示框和title组件
	require('echarts/lib/component/tooltip')
	require('echarts/lib/component/title')
	export default {
		props:['xData','yData'],
		mounted() {
			this.drawLine();
		},
		watch:{
			xData:function(){
				// alert("11")
				this.drawLine()
			},
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = echarts.init(document.getElementById('myChart'))
				// 绘制图表
				myChart.setOption({
					title: {
						text: '统计概览'
					},
					tooltip: {},
					xAxis: {
						data: this.xData
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'line',
						data: this.yData
					}]
				});
			}
		},
	}
</script>

<style>
</style>
