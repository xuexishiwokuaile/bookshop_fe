<template>
	<el-dialog title="基本信息" :visible.sync="dialogFormVisible" class="basiceditpanel">
		<el-form :model="customer">
			<el-form-item label="姓名" :label-width="formLabelWidth">
				<el-input v-model="customer.name" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="电话" :label-width="formLabelWidth">
				<el-input v-model="customer.tel" autocomplete="off" type="number"></el-input>
			</el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="handleCancel">取 消</el-button>
			<el-button type="primary" @click="handleSubmit">确 定</el-button>
		</div>
	</el-dialog>
</template>

<script>
	export default{
		props:['dialogFormVisible','customer'],
		data(){
			return {
				form:{},
				formLabelWidth:'50px'
			}
		},
		created:function(){
			var Mock = require('mockjs')
			Mock.mock("/user/update", {
				"state": 0,
				"message": "修改错误预填充文本"
			});
		},
		methods:{
			handleCancel:function(){
				this.$emit("handleCancel");
			},
			handleSubmit:function(){
				// this.dialogFormVisible = false;
				
				const axios = require('axios');
				var that = this;
				axios.put(this.$store.state.baseUrl+"/user/update",{
					id:that.$store.state.id
				}).then(function(response) {
					if (response.data.state == 0){
						that.$emit("handleSubmit",that.customer)
					} else {
						that.$notify.error({
							title: '修改错误',
							message: response.data.message
						});
					}
					
				})
			}
		}
	}
</script>

<style>
	.basiceditpanel .el-input{
		width: 80%;		
	}
	
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
	
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
