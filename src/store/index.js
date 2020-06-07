import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 用户名
        user: '',
        // 是否登录
        isLogin: false,
        // 获取item
        getItemList: [],
        // title
        item: '前端开发',
        // 分页的数据
        page: {
            total: 16,
            size: 6,
            current: 1
        },
        // 获取已选item
        getYxItemList: [],
        // 分页的数据
        Yxpage: {
            total: 16,
            size: 6,
            current: 1
        }
    },
    mutations: {
        // 获取item
        getItem(state, item) {
            state.getItemList = item[0].data
            state.page.total = item[0].data.size
            state.page.size = item[0].data.limit
            state.page.current = item[0].data.skip
            state.item = item[1]
        },
        setUser(state, item) {
            state.user = item
            console.log(state.user)
        },
        setIsLogin(state) {
            state.isLogin = true
            console.log(state.isLogin)
        },
        //  获取已选item
        getYxItem(state, item) {
            state.getYxItemList = item.data.data
            state.Yxpage.total = item.data.size
            state.Yxpage.size = item.data.limit
            state.Yxpage.current = item.data.skip
                // console.log(state.getYxItemList, state.Yxpage.total, state.Yxpage.size, state.Yxpage.current, 111111111)
        }
    },
    actions: {
        // 获取item
        async getItem(store, item) {
            const list = await axios.get('/value', {
                params: {
                    value: item.value,
                    skip: item.skip,
                    limit: item.limit
                }
            })
            store.commit('getItem', [list, item.value])
        },
        //  获取已选item
        async getYxItem(store, item) {
            const list = await axios.get('/query', {
                params: {
                    user: item.user,
                    skip: item.skip,
                    limit: item.limit
                }
            })
            store.commit('getYxItem', list)
        }
    },
    modules: {}
})