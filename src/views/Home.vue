<template>
	<div class="home">
		<el-button v-on:click="createWorld">点击进入冯文翰的创世纪界面</el-button>
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'


	//这里相当于那个Vue，都写在这里
	export default {
		name: 'Home',
		components: {
			HelloWorld
		},
		methods: {
			createWorld: function() {
				alert("嘤嘤嘤");
				this.$router.push({name:'General'});
			}
		}
	}
</script>
