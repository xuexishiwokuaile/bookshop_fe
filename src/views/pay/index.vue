<template>
	<div class="pay">
		<!-- {{this.$store.state.order}} -->
		<el-card style="width: 70%; margin: 40px auto;"  body-style="display: flex; flex-direction: column; align-items: center;">
			<PayOrderItem v-for = "orderItem in this.$store.state.order" v-bind:key = "orderItem.id" v-bind:orderItem = "orderItem"></PayOrderItem>
			<hr style="width: 80%; margin-top: 10px; margin-bottom: 10px;">
			<OrderSum v-bind:sum = "sum"></OrderSum>
			<AddressSelector></AddressSelector>
			<PayMethod></PayMethod>
			<div class="confirm-div">
				<el-checkbox v-model="agreeContract">我已阅读相关协议</el-checkbox>
				<el-button type="primary" style="width: auto;" v-on:click = "handleSubmit">确认</el-button>
			</div>
		</el-card>
	</div>
</template>

<script>
	import PayOrderItem from './components/PayOrderItem.vue'
	import OrderSum from './components/OrderSum.vue'
	import AddressSelector from './components/AddressSelector.vue'
	import PayMethod from './components/PayMethod.vue'
	export default{
		props:['books'],
		data(){
			return{
				"bookid":"22222222",
				"order":this.$store.state.order,
				agreeContract:false,
			}
		},
		computed:{
			sum:function(){
				var a = 0;
				for (var orderItem of this.order){
					a += orderItem.price*orderItem.count;
				}
				return a;
			}
		},
		components:{
			PayOrderItem,
			OrderSum,
			AddressSelector,
			PayMethod,
			// MyELInputNumber
		},
		created:function(){
			var a = [{"id":"111","v":1},{"id":"222","v":2}]
			console.log(a);
			var Mock = require('mockjs')
			Mock.mock("/order/makeOrder", {
				"state": 0,
				"message": "添加错误预填充文本"
			});
		},
		methods:{
			handleSubmit:function(){
				var data = {
					"orderItems":this.order.map((obj) => {
						return {"book":obj.id, "count":obj.count}
					}),
					"buyer":this.$store.state.user.id
				};
				const axios = require('axios');
				var that = this;
				axios.post("/order/makeOrder",{
					data:data
				}).then(function(response) {
					if (response.data.state == 0){
						alert("购买成功");
						that.$store.commit("updateCartAfterMakeOrder");
						alert(JSON.stringify(that.$store.state.cart))
						that.$router.push("Homepage");	
					}
				})
			},
			
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
