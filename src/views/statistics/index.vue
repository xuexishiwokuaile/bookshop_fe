<template>
	<div style="width: 100%;">
		<div class="statistics-circlediv">
			<div class="statistics-circle" style="background-color: #42B983;">{{totalQuantity}} 册</div>
			<div class="statistics-circle" style="background-color:cornflowerblue">{{totalSale}} 元</div>
		</div>
		<div class="statistics-diagramdiv">
			<StatisticsDiagram v-bind:xData="xData" v-bind:yData="yData"></StatisticsDiagram>
			<div class="statistics-radiodiv">
				<el-radio-group v-model="yType" @change="handleYTypeChange">
					<el-radio :label="0">销售量</el-radio>
					<el-radio :label="1">销售额</el-radio>
				</el-radio-group>
				<el-radio-group v-model="timespan" @change="handleTimeSpanChange">
					<el-radio :label="0">按年份</el-radio>
					<el-radio :label="1">按月份</el-radio>
					<el-radio :label="2">按日</el-radio>
				</el-radio-group>
				<!-- {{xData}} -->
			</div>
		</div>
		
	</div>
</template>

<script>
	import StatisticsDiagram from './components/StatisticsDiagram.vue'
	export default {
		data() {
			return {
				'xData': ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
				'yData': [5, 20, 36, 10, 10, 20],
				'timespan':0,
				'yType':0,
				totalQuantity:0,
				totalSale:0,
			}
		},
		components: {
			StatisticsDiagram
		},
		created:function(){
			this.queryData();
			const axios = require('axios');
			var that = this;
			axios.get(this.$store.state.baseUrl+"/statistics/findTotalCount").then(function(response){
				that.totalQuantity = response.data;
			})
			axios.get(this.$store.state.baseUrl+"/statistics/findTotalPrice").then(function(response){
				that.totalSale = response.data;
			})
		},
		methods:{
			handleYTypeChange:function(e){
				// alert(e);
				console.log(e)
				this.queryData();
			},
			queryData:function(){
				const axios = require('axios');
				var that = this;
				axios.get(this.$store.state.baseUrl+"/statistics/findRecent",{
					"params":{
						"dataType":this.yType,
						"periodType":this.timespan,
					}
				}).then(function(response) {
					that.xData = response.data[0]
					that.yData = response.data[1].map(obj =>{
						return Number(obj);
					})
				})
			},
			handleTimeSpanChange:function(e){
				console.log(e)
				this.queryData();
			}
		}
	}
</script>

<style>
	.statistics-circle {
		width: 170px;
		height: 170px;
		border-radius: 50%;
		display: -moz-box;
		/*兼容Firefox*/
		display: -webkit-box;
		/*兼容FSafari、Chrome*/
		-moz-box-align: center;
		/*兼容Firefox*/
		-webkit-box-align: center;
		/*兼容FSafari、Chrome */
		-moz-box-pack: center;
		/*兼容Firefox*/
		-webkit-box-pack: center;
		/*兼容FSafari、Chrome */
		font-size: 20px;
		color: white;

	}

	.statistics-circlediv {
		/* width: 100%; */
		margin: 50px 20%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.statistics-diagramdiv{
		display: flex;
		
		/* justify-content: space-between; */
		
	}
	
	.statistics-radiodiv{
		margin-top: 50px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.statistics-radiodiv .el-radio-group{
		margin-top: 10px;
		margin-bottom: 10px;
	}
</style>
