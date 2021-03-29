<template>
	<el-card :body-style="{ display:'flex','flex-direction':'column','align-items':'flex-start'}">
		<!-- {{address}} -->
		<div style="width: 100%; display: flex; align-items: center; justify-content: space-between;">
			<div>
				<label>{{address.receiver}}</label>
				<!-- 		<span>冯文翰</span>
						<span>1224</span> -->
				<label style="margin-left: 30px;">{{address.tel}}</label>
			</div>
			
			<div style="color: crimson; cursor: pointer;" v-on:click="handleRemove">
				<i class="el-icon-error"></i>
			</div>
			
		</div>
		
		<span style="margin-top: 5px;">{{addressStr}}</span>
		
	</el-card>
</template>

<script>
	export default{
		props:["address"],
		data(){
			return{
				customer:{},
			}
		},
		computed:{
			addressStr:function(){
				if (this.address.province === this.address.city){
					return this.address.nation+this.address.province+this.address.details
				} else{
					return this.address.nation+this.address.province+this.address.city+this.address.details
				}
				
			}
		},
		created:function(){
			// var that = this;
			// const axios = require('axios');
			// axios.get(this.$store.state.baseUrl+"/user/findOneById",{
			// 	params:{
			// 		id:that.$store.state.user.id
			// 	}
			// }).then(function(response) {
			// 	that.customer = response.data;
			// });
		},
		methods:{
			handleRemove:function(){
				// alert(1);
				var that = this;
				const axios = require('axios');
				axios.delete(this.$store.state.baseUrl+"/address/delete",{
					params:{
						id:this.address.id
					}
				}).then(function(response) {
					// alert(JSON.stringify(response.data))
					// that.customer = response.data;
					if (response.data.state == 0){
						
						that.$emit("handleRemove", that.address);
					} else {
						that.$notify.error({
							title: '删除错误',
							message: response.data.message
						});
					}
					
				});
			},
		}
	}
</script>

<style>
</style>
