<template>
	<div class="trolley">
		<el-form class="trolley-form">
			<el-button class="trolley-button">下单</el-button>
			<TrolleyTable></TrolleyTable>
			<hr>
		</el-form>
	</div>
</template>

<script>
	// import TrolleyItem from './components/TrollryItem.vue'
	import TrolleyTable from './components/TrolleyTable.vue'
	export default {
		data(){
			return {
				// type:[],
				// model:"form.type",
				// num:1,
			}
			
		},
		components:{
			// TrolleyItem,
			TrolleyTable,
		},
		created:function(){
			// alert(JSON.stringify(this.$store.state.cart))
		}
	}
</script>

<style>

	
	.trolley-form{
		margin: 0 auto;
		width: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.trolley-button{
		margin-top: 20px;
		margin-bottom: 20px;
		margin-right: 100px;
		align-self: flex-end;
		width: auto !important;
		display: inline !important;
	}
	
	
</style>
