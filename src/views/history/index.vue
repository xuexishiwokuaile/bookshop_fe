<template>
	<div class="history">
		<OneBookOrderInfo style="width: 90%; margin-right: 20px; margin-top: 20px; margin-bottom: 20px;" v-for="order in pageOrders" v-bind:key="order.book" v-bind:order="order"></OneBookOrderInfo>
		<el-pagination layout="prev, pager, next" :total="orders.length" :current-page.sync="cp" @current-change="handlePageChange">
		</el-pagination>
	</div>
</template>

<script>
	import OneBookOrderInfo from './components/OneBookOrderInfo.vue'
	export default {
		components: {
			OneBookOrderInfo,
		},
		data() {
			return {
				orders: [],
				cp: 1
			}
		},
		computed: {
			pageOrders: function() {
				return this.orders.slice((this.cp - 1) * 10, this.cp * 10);
			}
		},
		created: function() {
			var Mock = require('mockjs')
			Mock.mock("/history/getHistory", {
				"orders|25": [{
					"book|+1": 1,
					"name": Mock.Random.cword(1, 6),
					"image": "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
					"price": Mock.Random.float(0, 1000),
					"count": Mock.Random.natural(0, 1000),
					"time":Mock.Random.date()
				}]
			});
			var that = this;
			const axios = require('axios');
			axios.get("/history/getHistory").then(function(response) {
				// alert(JSON.stringify(response.data))
				that.orders = response.data.orders;
			})
		},
		methods:{
			handlePageChange: function() {
				var timer = setInterval(function() {
					let osTop = document.documentElement.scrollTop || document.body.scrollTop;
					let ispeed = Math.floor(-osTop / 5);
					document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
					this.isTop = true;
					if (osTop === 0) {
						clearInterval(timer);
					}
				}, 30)
			},
		}
	}
</script>

<style>
	.history {
		width: 100%;
		padding-top: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
