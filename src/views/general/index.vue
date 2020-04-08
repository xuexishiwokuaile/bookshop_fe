<template>
	<div>
		<BookShopToolBar></BookShopToolBar>
		<router-view/>
		<FixPanel></FixPanel>
	</div>
</template>

<script>
	import BookShopToolBar from '../../components/BookShopToolBar.vue'
	import FixPanel from '../../components/FixPanel.vue'
	export default{
		components:{
			BookShopToolBar,
			FixPanel,
		}
	}

</script>

<style>
</style>
