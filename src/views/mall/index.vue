<template>
	<div class="mall">
		<SearchPanel style="margin-left: 5%;"></SearchPanel>
		<RecommendPanel></RecommendPanel>
	</div>
	
</template>

<script>
	import SearchPanel from './compenents/SearchPanel.vue'
	import RecommendPanel from './compenents/RecommendPanel.vue'
	export default{
		components:{
			SearchPanel,
			RecommendPanel
		}
	}
</script>

<style>
	.mall{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
