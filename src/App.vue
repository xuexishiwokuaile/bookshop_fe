<template>
	<div id="app">
		<!-- <title>aaa</title> -->
		<router-view></router-view>
	</div>
</template>


<script>
	export default{
		created:function(){
			const axios = require('axios');
			var that = this;
			axios.get(this.$store.state.baseUrl+"/mall/countries").then(function(response) {
				// alert(JSON.stringify(response.data))
				
				that.$store.commit("setNation",response.data.map(obj =>{
					return {
						"label":obj,
						"value":obj,
					}
				} ));
				// that.xData = response.data.xData
				// that.yData = response.data.yData
			})
		}
	}
</script>


<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}

	html,body,#app {
		height: 100%;
	}
	
	body{
		margin: 0;
	}
</style>
