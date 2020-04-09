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
		count: 0,
		cart: [{"id":"sdsfdsf","count":3},{"id":"22222222","count":4}],
		user:{
			"authority":-1,
			"id":""
		},
		mallInitalType:[],
		"type": [{
				"label": "未分类",
				"value": 1
			},
			{
				"label": "文学",
				"value": 2
			},
			{
				"label": "哲学",
				"value": 3
			},
			{
				"label": "政治",
				"value": 4
			},
			{
				"label": "军事",
				"value": 5
			},
			{
				"label": "艺术",
				"value": 6
			},
			{
				"label": "地理",
				"value": 7
			},
			{
				"label": "科幻",
				"value": 8
			},
			{
				"label": "悬疑",
				"value": 9
			},
			{
				"label": "科学",
				"value": 10
			},
			{
				"label": "其他",
				"value": 12
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
	},
	getters:{
		getBookById:(state)=>(id)=>{
			return state.cart.find(obj => obj.id === id);
		},
		getBookCountById:(state)=>(id)=>{
			return state.cart.find(obj => obj.id === id).count;
		},
		getAllTypeLabel:(state)=>{
			return state.type.map(x => {return x.label})
		},
		getTypeValueByLabelArr:(state) => (labels) =>{
			var a = [];
			// alert(JSON.stringify(labels));
			// alert(state)
			for (var label of labels){
				// alert(label);
				// alert(state.type.find(obj => obj.label === label))
				a.push(state.type.find(obj => obj.label === label).value )
			}
			// alert(a);
			return a
		}
	},
	mutations: {
		addProductToCart(state,item){
			state.cart.push((item));
		},
		removeProductfromCart(state,item){
			state.cart.remove(item);
		},
		setUserId(state,item){
			state.user.id = item;
		},
		setUserAuthority(state,item){
			state.user.authority = item;
		},
		addMallInitalTypeItem(state,item){
			state.mallInitalType.push(item);
		},
		clearMallInitalTypeItem(state){
			state.mallInitalType=[];
		},
		updateBookCount(state,item){
			var book = item.book;
			var newCount = item.newValue;
			// var index = state.cart.findIndex(obj => obj.id = book.id);
			// if (index>=0){
			// 	// state.cart[index].count = count;
			// 	Vue.set(state.cart[index],'count',newCount)
			// }
			//这个bug!!!写成=赋值了
			var b = state.cart.find(obj => obj.id === book.id);
			b.count = newCount;
		},
		updateBookCountById(state,item){
			var id = item.id;
			var newCount = item.newValue;
			var index = state.cart.findIndex(obj => obj.id === id);
			if (index>=0){
				state.cart[index].count = null;
				state.cart[index].count = newCount;
				// Vue.set(state.cart[index],'count',newCount)
			}
			console.log("state.cart[index]:"+state.cart[index].count)
			// console.log(state.cart);
			// var b = state.cart.find(obj => obj.id===id);
			// b.count = newCount;
			// Vue.set(b,'count',newCount);
			// console.log(b.id+":"+b.count);
			// Vue.set(b,'count',newCount);
			// console.log(b);
			// console.log(state.cart);
		}
		
	},
	actions:{
		updateBookCountByIdAction(context,item){
			context.commit('updateBookCountById',item)
		}
	}



	// modules: {
	//   cart,
	//   products
	// },
	// strict: debug,
	// plugins: debug ? [createLogger()] : []
})
