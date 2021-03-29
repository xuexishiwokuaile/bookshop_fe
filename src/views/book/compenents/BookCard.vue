<template>

	<el-card class="bookcard" :body-style="{ padding: '0px 20px 20px 0px', height:'100%'}">
		<el-row style="height: 100%;">
			<el-col :span='12' style="height: 100%;">
				<!-- <el-image v-bind:src="book.image" :fit="fill" class="bookcard-image" ></el-image> -->
				<img v-bind:src="book.image" :fit="fill" class="bookcard-image"/>
			</el-col>
			<el-col :span="11" :offset="1" style="height: 100%;  margin-top: 5%; text-align: left; padding-bottom: 60px;">
				<div style="height: 100%; display: flex; flex-direction: column;">
					<h2>{{book.name}}</h2>
					<p style="overflow: auto; text-overflow: clip;">{{book.intro}}</p>
					<!-- <p>{{"类型"+book.type}}</p> -->
				</div>
			</el-col>
		</el-row>
	</el-card>
</template>

<script>
	export default {
		props: ['book'],
		data(){
			return {
				occupation:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586172355682&di=31600e8b212c48e26d500780a2e2e9a5&imgtype=0&src=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2F531687c20bf8ce36c59812485314b0dd.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100"
			}
		}
	}
</script>

<style>
	.bookcard {
		width: 700px;
		height: 400px;

	}

	.bookcard-image {
		width: 90%;
		height: 80%;
		margin-top: 10%;
		margin-left: 10%;

	}

	
</style>
