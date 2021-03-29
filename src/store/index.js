// import Vue from 'vue'
// import Vuex from 'vuex'
// // import cart from './modules/cart'
// // import Trolley from '../views/trolley/index.vue'

// // Vue.use(Vuex)

// // const debug = process.env.NODE_ENV !== 'production'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		baseUrl: "http://188.131.217.222:8080",
		count: 0,
		cart:[],
		order: [],
		orderFromCart: true,
		user: {
			"authority": -1,
			"id": ""
		},
		mallInitalType: [],
		"type": [{
				"label": "未分类",
				"value": 1,
				"ename":"none",
			},
			{
				"label": "其他",
				"value": 2,
				"ename":"others",
			},
			{
				"label": "文学",
				"value": 3,
				"ename":"literature",
			},
			{
				"label": "政治",
				"value": 4,
				"ename":"politics",
			},
			{
				"label": "军事",
				"value": 5,
				"ename":"military",
			},
			{
				"label": "艺术",
				"value": 6,
				"ename":"art",
			},
			{
				"label": "地理",
				"value": 7,
				"ename":"geography",
			},
			{
				"label": "科幻",
				"value": 8,
				"ename":"fiction",
			},
			{
				"label": "悬疑",
				"value": 9,
				"ename":"suspense",
			},
			{
				"label": "科学",
				"value": 10,
				"ename":"science",
			},
			{
				"label": "教育",
				"value": 11,
				"ename":"education",
			},
			{
				"label": "历史",
				"value": 12,
				"ename":"history",
			},
			{
				"label": "哲学",
				"value": 13,
				"ename":"philosophy",
			},
		],
		"hot": [{
				"label": "未知",
				"value": 0
			},
			{
				"label": "热门",
				"value": 1
			},
			{
				"label": "不热门",
				"value": 2
			},
		],
		"price": [
			// {
			// 	"label": "全选",
			// 	"value": [0, 10000000],
			// },
			{
				"label": "0-50元",
				"value": "0a50",
			},
			{
				"label": "50-100元",
				"value": "50a100",
			},
			{
				"label": "100-150元",
				"value": "100a150",
			},
			{
				"label": "150-200元",
				"value": "150a200",
			},
			{
				"label": "200-250元",
				"value": "200a250",
			},
			{
				"label": "250-300元",
				"value": "250a300",
			},
			{
				"label": "300元以上",
				"value": "300a10000000",
			},
		],
		"score": [
			// {
			// 	"label": "全选",
			// 	"value": [0, 10],
			// },
			{
				"label": "6分以下",
				"value": "0a6",
			},
			{
				"label": "6-7分",
				"value": "6a7",
			},
			{
				"label": "7-8分",
				"value": "7a8",
			},
			{
				"label": "8-9分",
				"value": "8a9",
			},
			{
				"label": "9-10分",
				"value": "9a10",
			},
		],
		"nation": [
			// {
			// 	"label": "全选",
			// 	"value": ["美国","中国","日本","意大利","韩国"],
			// },
			{
				"label": "美国",
				"value": "美国",
			},
			{
				"label": "中国",
				"value": "中国",
			},
			{
				"label": "日本",
				"value": "日本",
			},
			{
				"label": "意大利",
				"value": "意大利",
			},
			{
				"label": "韩国",
				"value": "韩国",
			},
			
		],
	},
	getters: {
		getBookById: (state) => (id) => {
			return state.cart.find(obj => obj.id === id);
		},
		getBookCountById: (state) => (id) => {
			return state.cart.find(obj => obj.id === id).count;
		},
		getAllTypeLabel: (state) => {
			return state.type.map(x => {
				return x.label
			})
		},
		getAllTypeValue: (state) => {
			return state.type.map(x => {
				return x.value
			})
		},
		getTypeValueByLabelArr: (state) => (labels) => {
			var a = [];
			for (var label of labels) {
				a.push(state.type.find(obj => obj.label === label).value)
			}
			return a
		},
		getTypeObjectByValue:(state) => (value) =>{
			return state.type.find(obj => obj.value === value);
		},
		getTypeCNameByEname:(state) => (ename) =>{
			return state.type.find(obj => obj.ename === ename).label;
		},
		getAllNationValue: (state) => {
			return state.nation.map(x => {
				return x.value
			})
		},
	},
	mutations: {
		addProductToCart(state, item) {
			state.cart.push((item));
		},
		removeProductfromCart(state, item) {
			state.cart.remove(item);
		},
		setUserId(state, item) {
			state.user.id = item;
		},
		setUserAuthority(state, item) {
			state.user.authority = item;
		},
		setNation(state,item){
			state.nation = item;
		},
		addMallInitalTypeItem(state, item) {
			state.mallInitalType.push(item);
		},
		clearMallInitalTypeItem(state) {
			state.mallInitalType = [];
		},
		updateOrder(state, item) {
			// alert(item);
			state.order = item.order;
			state.orderFromCart = item.orderFromCart;
		},
		clearOrder(state) {
			state.order = [];
		},
		updateCartAfterMakeOrder(state) {
			if (state.orderFromCart == true) {
				for (let orderItem of state.order) {
					for (var i = 0; i < state.cart.length; i++) {
						if (orderItem.id === state.cart[i].id) {
							state.cart[i].count -= orderItem.count;
						}
					}
				}
				state.cart = state.cart.filter((obj) => {
					return obj.count !== 0
				})
			}
		},
		updateBookCount(state, item) {
			var book = item.book;
			var newCount = item.newValue;
			// var index = state.cart.findIndex(obj => obj.id = book.id);
			// 	// state.cart[index].count = count;
			// 	Vue.set(state.cart[index],'count',newCount)
			// }
			//这个bug!!!写成=赋值了
			var b = state.cart.find(obj => obj.id === book.id);
			b.count = newCount;
		},
		updateBookCountById(state, item) {
			var id = item.id;
			var newCount = item.newValue;
			var index = state.cart.findIndex(obj => obj.id === id);
			if (index >= 0) {
				state.cart[index].count = null;
				state.cart[index].count = newCount;
				// Vue.set(state.cart[index],'count',newCount)
			}
			console.log("state.cart[index]:" + state.cart[index].count)

		},
		updateCart(state, item) {
			state.cart = item;
		}

	},
	actions: {
		updateBookCountByIdAction(context, item) {
			context.commit('updateBookCountById', item)
		}
	}



	// modules: {
	//   cart,
	//   products
	// },
	// strict: debug,
	// plugins: debug ? [createLogger()] : []
})
