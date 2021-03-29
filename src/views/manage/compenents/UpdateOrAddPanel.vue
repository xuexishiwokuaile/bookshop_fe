<template>
	<el-dialog :close-on-click-modal="false" title="书籍信息" :visible.sync="dialogFormVisible">
		<el-form :model="book" size="small" inline="true">

			<el-form-item label="id" :label-width="formLabelWidth" style="width: 45%; margin-left: 3%;">
				<el-input v-model="book.id" autocomplete="off" suffix-icon=“xxxx” :disabled="true" placeholder="id由后台自动生成,不可编辑"></el-input>
			</el-form-item>

			<el-form-item label="名称" :label-width="formLabelWidth" style="width: 45%; visibility: hidden;">
				<el-input v-model="book.name" autocomplete="off" suffix-icon=“xxxx”></el-input>
			</el-form-item>

			<el-form-item label="名称" :label-width="formLabelWidth" style="width: 45%; ">
				<el-input v-model="book.name" autocomplete="off" suffix-icon=“xxxx”></el-input>
			</el-form-item>
			<el-form-item label="作者" :label-width="formLabelWidth" style="width: 45%;">
				<el-input v-model="book.author" autocomplete="off" suffix-icon=“xxxx”></el-input>
			</el-form-item>
			<el-form-item label="价格" :label-width="formLabelWidth" style="width: 45%;">
				<el-input type="number" v-model="book.price" autocomplete="off" suffix-icon=“xxxx”></el-input>
			</el-form-item>
			<el-form-item label="类别" :label-width="formLabelWidth" style="width: 45%;">
				<el-select v-model="book.type" placeholder="请选择">
					<el-option v-for="item in this.$store.state.type" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="评分" :label-width="formLabelWidth" style="width: 45%;">
				<el-input v-model="book.score" autocomplete="off" suffix-icon=“xxxx” type="number"></el-input>
			</el-form-item>
			<el-form-item label="国家" :label-width="formLabelWidth" style="width: 45%;">
				<el-input v-model="book.nation" autocomplete="off" suffix-icon=“xxxx”></el-input>
			</el-form-item>
			<el-form-item label="年份" :label-width="formLabelWidth" style="width: 45%;">
				<el-input v-model="book.year" autocomplete="off" suffix-icon=“xxxx”></el-input>
			</el-form-item>
			<el-form-item label="热门" :label-width="formLabelWidth" style="width: 45%;">
				<el-select v-model="book.hot" placeholder="请选择">
					<el-option v-for="item in this.$store.state.hot" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<div class="aa">
				<el-form-item label="简介" :label-width="formLabelWidth" style="width: 90%; display: block;">
					<el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="book.intro" style="width: 100%">
					</el-input>
				</el-form-item>
			</div>
			<div class="aa">
				<el-form-item label="封面" :label-width="formLabelWidth" style="width: 90%; display: block;">
					<el-input v-model="book.image" autocomplete="off" suffix-icon=“xxxx”></el-input>
				</el-form-item>
			</div>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="handleCancel" style="width: auto;">取 消</el-button>
			<el-button type="primary" @click="handleSubmit" style="width: auto;">确 定</el-button>
		</div>
	</el-dialog>
</template>

<script>
	export default {
		props: ["dialogFormVisible", "book"],
		data() {
			return {
				"form": {},
				// "formLabelWidth":"auto",
			}
		},
		methods: {
	
			"handleCancel": function() {
				this.$emit("handleCancel");
			},
			"handleSubmit": function() {
				this.book.price = Number(this.book.price);
				this.book.score = Number(this.book.score);
				if ((this.book.score<0) || (this.book.score>10)){
					this.$notify.error({
						title: '评分错误',
						message: "评分必须为0-10之间"
					});
					return;
				}
				if (this.book.price<0){
					this.$notify.error({
						title: '价格错误',
						message: "价格必须大于0"
					});
					return;
				}
				this.$emit("handleSubmit", this.book);
			}

		}
	}
</script>

<style>
	.card_div {
		width: 50%;
		z-index: 10;
		position: fixed;
		left: 25%;
		top: 100px;
	}



	.aa .el-form-item--small .el-form-item__content,
	.el-form-item--small .el-form-item__labe {
		width: 83%;

	}
	
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
	
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>


