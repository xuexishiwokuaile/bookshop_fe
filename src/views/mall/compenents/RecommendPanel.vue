<template>
	<div class="recommendpanel">
		<h1>榜单</h1>
		<ol>
			<li>计算机网络——自顶向下方法</li>
			<li>计算机网络——自顶向下方法</li>
			<li>计算机网络——自顶向下方法</li>
			<li>计算机网络——自顶向下方法</li>
			<li>计算机网络——自顶向下方法</li>
		</ol>
		<hr style="width: 80%; margin-top: 50px; margin-bottom: 50px;">
		<BookFlash></BookFlash>
	</div>
	
</template>

<script>
	import BookFlash from './BookFlash.vue'
	export default{
		components:{
			BookFlash,
		}
	}
</script>

<style>
	.recommendpanel{
		width: 30%;
		border-left: 2px solid #99A9BF;
	}
</style>
