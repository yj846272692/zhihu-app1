import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
	state: {
		token: '123456789',
		baseUrl: 'http://localhost:8080/api',
		user: {
			id: 1,
			nickname: '小饼干',
			avatar: 'https://student-manage.oss-cn-beijing.aliyuncs.com/avatar/me.jpg'
		},
		params: {
			pathUrl: '/'
		}
	},
	mutations: {
		setToken(state, data) {
			state.token = data;
		},
		setUser(state, data) {
			state.user = data;
		},
		setPathUrl(state, data) {
			state.params.pathUrl = data;
		}
	},
	actions: {},
	modules: {}
})
