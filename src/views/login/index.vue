<template>
	<div style="background-color: aliceblue; height: 100%;">
		<el-card style="width: 360px; position: fixed; left: 50%; top: 10%; margin-left: -180px;" id = "logincard" >
			<!-- <el-button>冯</el-button> -->
			<h4 style="0 auto">登录/注册</h4>
			<el-form>
				<el-form-item label="账户" label-width="15%">
					<el-input v-model="account">
					</el-input>
				</el-form-item>
				<el-form-item label="密码" label-width="15%">
					<el-input v-model="secret" show-password>
					</el-input>
				</el-form-item>
				<el-form-item class="one-button-form-item">
					<el-button type="primary" @click="holdLogin" >用户登录</el-button>
				</el-form-item>
				<el-form-item class="two-button-form-item">
					<el-button  @click="holdLogin">管理员登录</el-button>
					<el-button  @click="holdRegister">用户注册</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
	<!-- <div></div> -->
</template>

<script>
	export default {
		data(){
			return {
				"account": "",
				"secret": "",
			}
		},
		created:function(){
			var Mock = require('mockjs')
			Mock.mock("/register", {
				"state": 0,
				"message": "添加错误预填充文本"
			});
			Mock.mock("/login", {
				"state": 0,
				"message": 1
			});
		},
		methods:{
			holdLogin:function(){
				const axios = require('axios');
				var that = this;
				axios.post("/login",{
					id:this.account,
					secret:this.secret
				}).then(function(response) {
					if (response.data.state == 0){
						that.$store.commit("setUserId",that.account);
						that.$store.commit("setUserAuthority",1-response.data.message)
						that.$router.push("/customer/history");
					}
				})
			},
			holdRegister:function(){
				const axios = require('axios');
				var that = this;
				// alert(11);
				axios.post("/register",{
					id:this.account,
					secret:this.secret
				}).then(function(response) {
					if (response.data.state == 0){
						alert("注册成功")
						that.$store.commit("setUserId",that.account);
						that.$store.commit("setUserAuthority",0)
						that.$router.push("/general/homepage");
					}
				})
			}
		}
	}
</script>

<style>
	/* #logincard{
		height: 500px;
	} */
	
	.one-button-form-item .el-button{
		width: 85%;
		/* margin: 4px auto; */
	}
	
	.two-button-form-item .el-form-item__content{
		width: 91.4%;
		margin: 0 auto;
		padding: 0;
		display: flex;
		justify-content: space-between;
	}
	
	.two-button-form-item .el-button{
		width: 45%; margin: 0;
	}
</style>
