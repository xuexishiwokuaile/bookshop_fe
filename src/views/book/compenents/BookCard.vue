<template >
	
	<el-card class="bookcard" :body-style="{ padding: '0px 20px 0px 0px', height:'100%'}">
		<el-row style="height: 100%;">
			<el-col :span = '12' style="height: 100%;">
				<el-image v-bind:src="book.image" :fit="fill" class = "bookcard-image"></el-image>
			</el-col>
			<el-col :span="11" :offset="1" style="height: 100%;  margin-top: 5%; text-align: left;">
				<div>
					<h2>{{book.name}}</h2>
					<p>{{book.intro}}</p>
				</div>
				
			</el-col>
			
		</el-row>
	</el-card>
</template>

<script>
	
	export default{
		props:['book'],
	}
</script>

<style>
	.bookcard{
		width: 600px;
		height: 320px;
		
	}
	
	.bookcard-image{
		width: 90%;
		height: 80%;
		margin-top: 10%;
		margin-left: 10%;
		
	}
</style>
