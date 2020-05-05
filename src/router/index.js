import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/admin/login'

Vue.use(VueRouter)

const routes = [{
    path: '/admin',
    component: login
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router