<template>
	<div class="addressselector">
		<p>收获信息</p>
		<el-select v-model="value" clearable placeholder="请选择" style="width: 500px;" @change="handleChange">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" >
			</el-option>
		</el-select>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					value: 'Beijing',
					label: '冯文翰 中国湖北省武汉市武汉大学信息学部'
				}, {
					value: 'tianjin',
					label: '孙悟空 东胜神州傲来国花果山水帘洞'
				}],
				value: ''
			}
		},
		created:function(){
			const axios = require('axios');
			var that = this;
			axios.get(this.$store.state.baseUrl+"/address/findUserAddress",{
				params:{
					user:that.$store.state.user.id
				}
			}).then(function(response){
				// alert(JSON.stringify(response.data))
				// that.addresses = response.data;
				that.options = response.data.map(obj => {
					return {
						value:obj.id,
						label:""+obj.receiver+" "+obj.nation+obj.province+obj.city+obj.details
					} 
				})
			})
		},
		methods:{
			handleChange:function(e){
				// alert(e);
				this.$emit("handleChange",e);
			}
		}
	}
</script>

<style>
	.addressselector{
		width: 80%;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
