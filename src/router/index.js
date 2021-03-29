import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: '/general/homepage'
		// name: 'Home',
		// component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/login/index.vue')
	},
	{
		path: '/general',
		name: 'General',
		component: () => import('../views/general/index.vue'),
		children:[
			{
				path:'homepage',
				component: () => import('../views/homepage/index.vue'),
			},
			{
				path: 'book/:id',
				name:'Book',
				component: () => import('../views/book/index.vue')
			},
			{
				path: 'mall',
				name:'Mall',
				component: () => import('../views/mall/index.vue')
			},
			{
				path: 'trolley',
				component: () => import('../views/trolley/index.vue')
			},
			{
				path: 'pay',
				name: 'Pay',
				component: () => import('../views/pay/index.vue'),
				// props: {books:}
			},
		]
	},
	{
		path: '/customer',
		name: 'Customer',
		component: () => import('../views/customer/index.vue'),
		children:[
			{
				path:'history',
				name:'History',
				component: () => import('../views/history/index.vue')
			},
			{
				path: 'information',
				name: 'Information',
				component: () => import('../views/information/index.vue')
			}
		]
	},
	
	{
		path: '/admin',
		name: 'Admin',
		component: () => import('../views/admin/index.vue'),
		children:[
			{
				path: 'manage',
				name: 'Manage',
				component: () => import('../views/manage/index.vue')
			},
			{
				path: 'statistics',
				name: 'Statistics',
				component: () => import('../views/statistics/index.vue')
			},
		]
	},

]

const router = new VueRouter({
	routes
})

export default router
