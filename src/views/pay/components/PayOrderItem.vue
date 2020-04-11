<template >
	<div class="payorderitem">
		<!-- <p>《计算机网络》</p>
		<p>27元</p>
		<p>×3</p>
		<p>81元</p> -->
		<p>{{orderItem.name}}</p>
		<p>{{orderItem.price+"元"}}</p>
		<p>{{"×"+orderItem.count}}</p>
		<p>{{orderItem.price*orderItem.count+"元"}}</p>
	</div>
</template>

<script>
	export default {
		props:['orderItem']
	}
</script>

<style>
	.payorderitem{
		width: 80%;
		height: 80px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
</style>
