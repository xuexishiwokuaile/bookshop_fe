<template>

	<el-card class="bookcard" :body-style="{ padding: '0px 20px 20px 0px', height:'100%'}">
		<el-row style="height: 100%;">
			<el-col :span='12' style="height: 100%;">
				<el-image v-bind:src="book.image" :fit="fill" class="bookcard-image"></el-image>
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
