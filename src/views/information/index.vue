<template>
	<div class="information">
		<BasicEditPanel v-bind:dialogFormVisible="basicEditPanelVisiable" v-bind:customer = "customer" v-on:handleCancel = "handleBasicEditPanelCancel" v-on:handleSubmit = "handleBasicEditPanelSubmit"></BasicEditPanel>
		<AddressEditPanel v-bind:dialogFormVisible="addressEditPanelVisiable" v-bind:address="currentAddress" v-on:handleCancel = "handleAddressEditPanelCancel" v-on:handleSubmit = "handleAddressEditPanelSubmit"></AddressEditPanel>
		<div style="width: 100%;  display: flex; align-items: flex-start;">
			
			
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
			
			<el-button style="height: 40px; margin-top: 50px" type="danger" @click="handleLogOff">退出登录</el-button>
		</div>
		
		<div class="information-basicdiv">
			<div style="width: 60%; display: flex; justify-content: space-between; align-items: center; ">
				<h2>收获地址</h2>
				<div style="font-size: 20px; color: crimson; cursor: pointer;" @click="handleAddressEditPanelVisible">
					<i class="el-icon-circle-plus"></i>
					<span>添加</span>
				</div>

			</div>
			<AddressCard v-for="address in addresses" v-bind:key = "address.id" v-bind:address = "address" v-on:handleRemove = "handleAddressRemove" style="width: 60%; margin-bottom: 10px;" ></AddressCard>
		</div>
	</div>
</template>

<script>
	import AddressCard from './components/AddressCard.vue'
	import BasicEditPanel from './components/BasicEditPanel.vue'
	import AddressEditPanel from './components/AddressEditPanel.vue' 
	export default {
		components: {
			AddressCard,
			BasicEditPanel,
			AddressEditPanel,
		},
		data() {
			return {
				basicEditPanelVisiable: false,
				addressEditPanelVisiable:false,
				customer: {},
				currentAddress:{},
				addresses:{},
			}
		},
		created: function() {
			var that = this;
			const axios = require('axios');
			axios.get(this.$store.state.baseUrl+"/user/findOneById",{
				params:{
					id:that.$store.state.user.id
				}
			}).then(function(response) {
				// alert(JSON.stringify(response.data))
				that.customer = response.data;
			});
			axios.get(this.$store.state.baseUrl+"/address/findUserAddress",{
				params:{
					user:that.$store.state.user.id
				}
			}).then(function(response){
				// alert(JSON.stringify(response.data))
				that.addresses = response.data;
			})
		},
		methods: {
			handleEditBasic() {
				this.basicEditPanelVisiable = true;
			},
			handleBasicEditPanelCancel(){
				this.basicEditPanelVisiable = false;
			},
			handleBasicEditPanelSubmit(e){
				this.customer = e;
				this.basicEditPanelVisiable = false;
			},
			handleAddressEditPanelVisible(){
				this.currentAddress = {};
				this.addressEditPanelVisiable = true;
			},
			handleAddressRemove(e){
				// alert(JSON.stringify(e));
				this.addresses.splice(this.addresses.indexOf(e), 1);
				// alert(JSON.stringify(this.addresses))
			},
			handleAddressEditPanelCancel(){
				this.addressEditPanelVisiable = false;
			},
			handleAddressEditPanelSubmit(e){
				// alert(JSON.stringify(e));
				this.addresses.push(e);
				this.addressEditPanelVisiable = false;
				// alert(1);
			},
			handleLogOff(){
				this.$store.commit("setUserId","");
				this.$store.commit("setUserAuthority",-1);
				this.$router.push("../general/homepage");
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
