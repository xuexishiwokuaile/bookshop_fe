<template>
	<div class="pay">
		{{this.$store.state.cart}}
		<MyELInputNumber v-bind:bookid = "bookid"></MyELInputNumber>
		<el-card style="width: 70%; margin: 40px auto;"  body-style="display: flex; flex-direction: column; align-items: center;">
			<PayOrderItem v-for = "n in 4" v-bind:key = "n"></PayOrderItem>
			<hr style="width: 80%; margin-top: 10px; margin-bottom: 10px;">
			<OrderSum></OrderSum>
			<AddressSelector></AddressSelector>
			<PayMethod></PayMethod>
			<div class="confirm-div">
				<el-checkbox>我已阅读相关协议</el-checkbox>
				<el-button type="primary">确认</el-button>
			</div>
		</el-card>
	</div>
</template>

<script>
	import PayOrderItem from './components/PayOrderItem.vue'
	import OrderSum from './components/OrderSum.vue'
	import AddressSelector from './components/AddressSelector.vue'
	import PayMethod from './components/PayMethod.vue'
	import MyELInputNumber from '../trolley/components/MyELInputNumber.vue'
	export default{
		data(){
			return{
				"bookid":"22222222",
			}
		},
		components:{
			PayOrderItem,
			OrderSum,
			AddressSelector,
			PayMethod,
			MyELInputNumber
		},
		created:function(){
			var a = [{"id":"111","v":1},{"id":"222","v":2}]
			console.log(a);
		}
		
	}
</script>

<style>
	.pay{
		width: 100%;
	}
	
	.confirm-div{
		width: 80%;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	
</style>
