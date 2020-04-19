<template>
	<div class="bookmenu">
		<p>{{book.price*num}}元</p>
		<div class="bookmenu-number">
			<span>数目</span>
			<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字" disp></el-input-number>
		</div>
		<div class="bookmenu-button" v-on:click="handleAddBookToCart">
			<el-button>加入购物车</el-button>
		</div>
		<div class="bookmenu-button" v-on:click="handleBuy">
			<el-button>直接购买</el-button>
		</div>


	</div>
</template>

<script>
	export default {
		props: ['book'],
		data() {
			return {
				num: 1
			};
		},
		methods: {
			handleChange(value) {
				console.log(value);
			},
			handleAddBookToCart() {
				this.book.count = this.num;
				this.$store.commit("addProductToCart", this.book);
				this.$alert('书本已添加至购物车中', '添加成功', {
					confirmButtonText: '确定',
					callback: () => {
						// this.$router.back();
					}
				});
			},
			handleBuy(){
				this.book.count = this.num;
				this.$store.commit("updateOrder", {
					order:[this.book],
					orderFromCart:false
				});
				this.$router.push("/general/pay");
			}
		}
	};
</script>

<style>
	.bookmenu {
		margin-left: 20px;
		width: 25%;
		padding: 20px;
		height: 300px;
		font-size: large;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-around;

	}

	.bookmenu-number {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

	}

	.bookmenu-button {
		width: 100%;
		margin-left: 0;
	}

	.el-button {
		width: 100%;
		margin-left: 0;
	}
</style>
