<template>
	<div class="rankinglist">
		<el-card style="width: 100%;">
			<h1>畅销清单</h1>
			<!-- {{books}} -->
			<el-row v-for="n in 5" v-bind:key = "n">
				<el-col span="12">
					<RankingListItem v-bind:book = "books[(n-1)*2]"  v-bind:rank = "n*2-1"></RankingListItem>
				</el-col>
				<el-col span="12">
					<RankingListItem v-bind:book = "books[(n-1)*2+1]"  v-bind:rank = "n*2">></RankingListItem>
				</el-col>
			</el-row>
		</el-card>
		
		
	</div>
	
</template>

<script>
	import RankingListItem from "./RankingListItem.vue";
	export default{
		props:['books'],
		components:{
			RankingListItem
		}
	}
</script>

<style>
	.rankinglist{
		width: 80%;
	}
</style>
