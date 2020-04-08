<template>
	<el-input-number v-model="fig" :min="1" :max="10" label="描述文字" @change="handleChange" disp></el-input-number>
</template>

<script>
	export default {
		props: {
			'bookid': String
		},
		computed: {
			fig: {
				get: function() {
					// alert(this.book.count);
					// return this.book.count;
					// alert(this.$store.getters.getBookById(this.id).count);
					// return this.$store.getters.getBookById(this.bookid).count
					// alert("get:"+this.$store.getters.getBookCountById(this.bookid))
					return this.$store.getters.getBookCountById(this.bookid)
				},
				set: function(newValue) {
					// alert(this.book.count);
					var a = new Map();
					a.id = this.bookid;
					console.log(newValue)
					a.newValue = newValue;
					// this.$store.commit("updateBookCountById", a);
					this.$store.dispatch("updateBookCountByIdAction", a);
					this.$nextTick(() => {
						this.fig
					})
					// alert("set:"+this.$store.getters.getBookCountById(this.bookid));
					// this.book.count = newValue;
				}
			}
		},
		created: function() {
			console.log(this.bookid)
		},
		methods: {
			handleChange(value) {
				console.log(value);
				this.$nextTick(() => {
					console.log("handleChange:"+this.fig)
				})
			}
		}
	}
</script>

<style>
</style>
