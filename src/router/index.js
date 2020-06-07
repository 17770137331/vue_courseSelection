import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/admin/login'
import home from '../components/admin/home'
import welcome from '../components/admin/welcome'
import user from '../components/admin/user'
import curriculums from '../components/admin/curriculums'
import courseSelection from '../components/admin/courseSelection'
import Home from '../components/home/home'
import Resgiter from '../components/home/resgiter'
import Login from '../components/home/login'
import MyHome from '../components/home/myhome/myHome'
import Item from '../components/home/myhome/item'
import MyZhiYe from '../components/home/myhome/myZhiYe'
import MyJiuYeBan from '../components/home/myhome/myJiuYeBan'
Vue.use(VueRouter)

const routes = [{
        path: '/admin',
        component: login
    },
    {
        path: '/home',
        component: home,
        redirect: '/home/welcome',
        children: [{
                path: '/home/welcome',
                component: welcome
            },
            {
                path: '/home/user',
                component: user
            },
            {
                path: '/home/curriculums',
                component: curriculums
            },
            {
                path: '/home/courseSelection',
                component: courseSelection
            }
        ]
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '/resgiter',
        component: Resgiter
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/myhome',
        component: MyHome,
        children: [{
                path: '/myhome',
                component: Item
            },
            {
                path: '/myhome/myZhiYe',
                component: MyZhiYe
            },
            {
                path: '/myhome/myJiuYeBan',
                component: MyJiuYeBan
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router