<template>
	<el-dialog title="地址信息" :visible.sync="dialogFormVisible" class="basiceditpanel">
		<el-form :model="address">
			<!-- <el-form-item label="id" :label-width="formLabelWidth" style="width: 45%; margin-left: 3%;">
				<el-input v-model="address.id" autocomplete="off" suffix-icon=“xxxx” :disabled="true" placeholder="id由后台自动生成,不可编辑"></el-input>
			</el-form-item> -->
			<el-form-item label="收件人" :label-width="formLabelWidth">
				<el-input v-model="address.receiver" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="电话" :label-width="formLabelWidth">
				<el-input v-model="address.tel" autocomplete="off" type="number"></el-input>
			</el-form-item>
			<el-form-item label="国家" :label-width="formLabelWidth">
				<el-input v-model="address.nation" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="省份" :label-width="formLabelWidth">
				<el-input v-model="address.province" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="城市" :label-width="formLabelWidth">
				<el-input v-model="address.city" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="详细地址" :label-width="formLabelWidth">
				<el-input v-model="address.details" autocomplete="off"></el-input>
			</el-form-item>
			<!-- 			<el-form-item label="收件人用户名" :label-width="formLabelWidth">
				<el-input v-model="address.details" autocomplete="off"></el-input>
			</el-form-item> -->
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="handleCancel" style="width: auto;">取 消</el-button>
			<el-button type="primary" @click="handleSubmit" style="width: auto;">确 定</el-button>
		</div>
	</el-dialog>
</template>

<script>
	export default {
		props: ['dialogFormVisible', 'address'],
		data() {
			return {
				form: {},
				formLabelWidth: '20%'
			}
		},
		created: function() {
			var Mock = require('mockjs')
			Mock.mock("/address/update", {
				"state": 0,
				"message": "修改错误预填充文本"
			});
		},
		methods: {
			handleCancel: function() {
				this.$emit("handleCancel");
			},
			handleSubmit: function() {
				// this.dialogFormVisible = false;

				const axios = require('axios');
				var that = this;

				// console.log(1);
				// axios.get(this.$store.state.baseUrl+"/user/findOneByName",{
				// 	params:{
				// 		id:that.$store.state.user.id
				// 	}
				// }).then(function(response) {
				// 	that.customer = response.data;
				// });
				this.address.user = this.$store.state.user.id;
				// axios.post(this.$store.state.baseUrl + "/address/add", {
				// 	nation: this.address.nation,
				// 	province: this.address.province,
				// 	city: this.address.city,
				// 	details: this.address.details,
				// 	user: this.$store.state.user.id,
				// }).then(function(response) {
				axios.post(this.$store.state.baseUrl + "/address/add", this.address).then(function(response) {
					if (response.data.state == 0) {
						// alert(JSON.stringify(response.data));
						that.address.id = response.data.message;
						// alert("1");
						that.$emit("handleSubmit", that.address);
					} else {
						that.$notify.error({
							title: '添加错误',
							message: response.data.message
						});
					}

				})


			}
		}
	}
</script>

<style>
	.basiceditpanel .el-input {
		width: 80%;
	}

	/* 	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
	
	input[type='number'] {
		-moz-appearance: textfield;
	} */
</style>
