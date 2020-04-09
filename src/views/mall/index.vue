<template>
	<div class="mall">
		<SearchPanel v-bind:initalType="initalType" style="margin-left: 5%;"></SearchPanel>
		<RecommendPanel></RecommendPanel>
	</div>
	
</template>

<script>
	import SearchPanel from './compenents/SearchPanel.vue'
	import RecommendPanel from './compenents/RecommendPanel.vue'
	export default{
		components:{
			SearchPanel,
			RecommendPanel,
		},
		data(){
			return{
				initalType:[],
			}
		},
		created:function(){
			if (this.$store.state.mallInitalType.length != 0) {
				this.initalType = this.$store.state.mallInitalType.splice(0,this.$store.state.mallInitalType.length);
				this.$store.commit("clearMallInitalTypeItem");
			}
			
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
