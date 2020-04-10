<template>
	<div class="information">
		<BasicEditPanel v-bind:dialogFormVisible="dialogFormVisible" v-bind:customer = "customer" v-on:handleCancel = "handleBasicEditPanelCancel" v-on:handleSubmit = "handleBasicEditPanelSubmit"></BasicEditPanel>
		<div class="information-basicdiv">
			<div style="width: 50%; display: flex; justify-content: space-between; align-items: center; ">
				<h2>基本信息</h2>
				<div style="font-size: 20px; color: #42B983; cursor: pointer;" v-on:click="handleEditBasic">
					<i class="el-icon-edit"></i>
					<span>修改</span>
				</div>

			</div>
			<label>用户id：{{customer.id}}</label>
			<label>用户名：{{customer.name}}</label>
			<label>电话号码：{{customer.tel}}</label>
		</div>
		<div class="information-basicdiv">
			<div style="width: 60%; display: flex; justify-content: space-between; align-items: center; ">
				<h2>收获地址</h2>
				<div style="font-size: 20px; color: crimson;">
					<i class="el-icon-circle-plus" @click="handleAddAddress(scope.row)"></i>
					<span>添加</span>
				</div>

			</div>
			<AddressCard style="width: 60%;"></AddressCard>
		</div>
	</div>
</template>

<script>
	import AddressCard from './components/AddressCard.vue'
	import BasicEditPanel from './components/BasicEditPanel.vue'
	export default {
		components: {
			AddressCard,
			BasicEditPanel
		},
		data() {
			return {
				dialogFormVisible: false,
				customer: {}
			}
		},
		created: function() {
			var Mock = require('mockjs')
			Mock.mock("/user/findOneById", {
				"User": {
					"id": "2391",
					"name": "云天明",
					"tel": "12782930424",
					"authority": 0
				}
			});
			var that = this;
			const axios = require('axios');
			axios.get("/user/findOneById",{
				params:{
					id:that.$store.state.id
				}
			}).then(function(response) {
				// alert(JSON.stringify(response.data))
				that.customer = response.data.User;
			})
		},
		methods: {
			handleEditBasic() {
				this.dialogFormVisible = true;
			},
			handleBasicEditPanelCancel(){
				this.dialogFormVisible = false;
			},
			handleBasicEditPanelSubmit(e){
				this.customer = e;
				this.dialogFormVisible = false;
			}
			
		}
	}
</script>

<style>
	.information {
		width: 100%;
	}

	.information-basicdiv {
		width: 50%;
		margin-top: 50px;
		margin-left: 20%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.information-basicdiv>label {
		margin-top: 10px;
		margin-right: 10px;
	}
</style>
