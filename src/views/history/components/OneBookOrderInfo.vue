<template>
	
	<el-card class="onebookorderinfo" :body-style="{ display:'flex','flex-direction':'column'}">
		
		<div class="onebookorderinfo-title">
			<span class="onebookorderinfo-title-col-item">封面</span>
			<span class="onebookorderinfo-title-col-item">名称</span>
			<span class="onebookorderinfo-title-col-item">单价</span>
			<span class="onebookorderinfo-title-col-item">购买时间</span>
		</div>
		<hr style="width: 100%;">
		<div class="onebookorderinfo-item">
			<el-image v-bind:src = "order.image" class="onebookorderinfo-col-item" style="height: 100px;"></el-image>
			<span class="onebookorderinfo-col-item">{{order.name}}</span>
			<span class="onebookorderinfo-col-item">{{order.price}}</span>
			<span class="onebookorderinfo-col-item">{{order.time}}</span>
		</div>
		<hr style="width: 100%;">
		<span class="onebookorderinfo-span">数量：X {{order.count}}</span>
		<span class="onebookorderinfo-span">总价：{{order.price*order.count}} 元</span>
		
		
	</el-card>

</template>

<script>
	export default{
		props:["order"]
	}
</script>

<style>
	.onebookorderinfo{
		width: 100%;
	}
	.onebookorderinfo-title{
		padding: 20px 100px;
		display: flex;
		justify-content: space-between;
	}
	.onebookorderinfo-title-col-item{
		width: 20%;
	}
	.onebookorderinfo-item{
		padding: 20px 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* height: 120px; */
	}
	.onebookorderinfo-col-item{
		width: 20%;
	}
	.onebookorderinfo-span{
		display: inline-block;
		align-self: flex-end; 
		margin-right: 100px;
		margin-top: 20px;
	}
</style>
