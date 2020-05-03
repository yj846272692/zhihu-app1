import Vue from 'vue'
import VueRouter from 'vue-router'
import Banner from '../views/Banner.vue'
import Home from '../views/Home.vue'
import Explore from '../views/Explore.vue'
import Special from '../views/Special.vue'
import Recommend from '../views/Recommend.vue'
import Follow from '../views/Follow.vue'
import Hot from '../views/Hot.vue'
import QuestionWaiting from '../views/QuestionWaiting.vue'
import Login from '../views/Login.vue'
import RoundTable from '../views/RoundTable.vue'
import Collection from '../views/Collection.vue'
import Column from '../views/Column.vue'
import test from '../views/test.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		component: Banner,
		children: [{
				path: '/',
				redirect: 'home'
			},
			{
				path: 'home',
				component: () => import('../views/Home.vue'),
				children: [{
						path: '/',
						redirect: 'recommend'
					},
					{
						path: 'recommend',
						component: () => import('../views/Recommend.vue')
					},
					{
						path: 'follow',
						component: () => import('../views/Follow.vue')
					},
					{
						path: 'hot',
						component: () => import('../views/Hot.vue')
					}
				]
			},
			{
				path: 'explore',
				component: () => import('../views/Explore.vue')
			},
			{
				path: 'roundtable/all',
				component: () => import('../views/RoundTable.vue')
			},
			{
				path: 'collection/hot',
				component: () => import('../views/Collection.vue')
			},
			{
				path: 'special/all',
				component: () => import('../views/Special.vue')
			},

			{
				path: 'question/waiting',
				component: () => import('../views/QuestionWaiting.vue')
			}
		]
	},
	{
		path: '/column',
		component: () => import('../views/Column.vue')
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/test',
		component: test
	}
]
const router = new VueRouter({
	routes
})

export default router
