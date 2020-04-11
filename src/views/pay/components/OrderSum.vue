<template>
	<div class="ordersum">
		<p>总价</p>
		<p></p>
		<p></p>
		<p>{{sum}}元</p>
	</div>
</template>

<script>
	export default{
		props:["sum"]
	}
</script>

<style>
	.ordersum{
		width: 80%;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>