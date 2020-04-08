<template>
	<div class="trolleyitem">
		{{item}}
		<el-checkbox  name="type"></el-checkbox>
		<el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" :fit="fill" style="width: 100px; height: 100px;"></el-image>
		<p>计算机网络</p>
		<p>27元</p>
		<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字" disp></el-input-number>
		<div>
			<el-button>购买</el-button>
			<el-button>删除</el-button>
		</div>
		
	</div>
</template>

<script>
	export default{
		props:['item'],
		data(){
			return{
				num:1,
			}
		}
	}
</script>

<style>
	.trolleyitem{
		width: 100%;
		height: 140px;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
</style>
