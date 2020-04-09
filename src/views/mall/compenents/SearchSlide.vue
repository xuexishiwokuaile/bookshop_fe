<template>
	<div class="searchcheckboxgroup">
		<div style="margin-bottom: 10px;">
			<span style="display: inline-block; width: 50px; margin-right: 10px;">{{label}}</span>
		</div>
		<div class="block" style="display: flex; align-items: center;">
			<el-slider v-model="checkList" range :max="max" style="width: 400px; margin-left: 10px; margin-right: 20px;" @change="handleCheckListChange"></el-slider>
			<div style="width: 170px;"> {{checkList[0]+" 元 —— "+checkList[1]+" 元"}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		props: ["checkList","max","label"],
		data() {
			return {
			}
		},
		created: function() {
		},
		methods: {
			handleCheckListChange:function(){
				this.$emit("handleCheckListChange",this.checkList);
			}

		
		}
	}
</script>

<style>
	
</style>
