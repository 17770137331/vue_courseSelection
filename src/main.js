import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/globel.css'
import '../src/plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import SlideVerify from 'vue-monoplasty-slide-verify'
import './assets/font_72lkscvrjce/iconfont.css'
import SliderVerificationCode from 'slider-verification-code'
import 'slider-verification-code/lib/slider-verification-code.css'
// axios.defaults.withCredentials = true
axios.defaults.baseURL = '/api'

// axios.create({
//     baseURL: '/api', // node环境的不同，对应不同的baseURL
//     timeout: 5000, // 请求的超时时间
//     withCredentials: true // 允许携带cookie
// })

Vue.use(SliderVerificationCode)
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(SlideVerify)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')