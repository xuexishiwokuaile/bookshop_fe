<template>
	<div class="searchpanel">
		<div class="searchpanel-searchdiv">
			<el-input v-model="input" placeholder="请输入内容" style="width: 60%;"></el-input>
			<i class="el-icon-search" style="margin: 20px;"></i>
		</div>
		<div style="margin-left: 20px;">
			<SearchCheckBoxGroup v-for = "n in 4" v-bind:key = "n"></SearchCheckBoxGroup>
		</div>
		<div class="searchpanel-imagediv">
			<!-- <div v-for = "n in 20" v-bind:key = "n" >
				<el-image   src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" style="width: 140px; height: 160px; margin-left: 20px; margin-right: 20px;"></el-image>
				<br>
				<div style="margin: 10px auto;">
					<span >禅意山水</span>
				</div>
			</div> -->
			<BookFlash v-for = "n in 20" v-bind:key = "n"></BookFlash>
			
		</div>
		
	</div>

</template>

<script>
	import SearchCheckBoxGroup from './SearchCheckBoxGroup.vue';
	import BookFlash from './BookFlash.vue';
	export default {
		data() {
			return {
				input: "",
				checkList: ['选中且禁用','复选框 A']
			}
		},
		components:{
			SearchCheckBoxGroup,
			BookFlash,
		}
	}
</script>

<style>
	.searchpanel{
		padding: 20px;
		width: 70%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		
	}
	
	.searchpanel-imagediv{
		
		padding-left: -20px;
		margin-top: 40px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.searchpanel-searchdiv{
		margin-left: 20px;
		width: 100%;
		display: flex;
		flex-direction: row;
		margin-bottom: 20px;
		margin-top: 20px;
	}
</style>
