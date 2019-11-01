import Vue from "vue"

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import home from './components/views/home/home.vue'
import cart from './components/views/cart/cart.vue'
import cate from './components/views/cate/cate.vue'
import jdm from './components/views/jdm/jdm.vue'
import user from './components/views/user/user.vue'

const router = new VueRouter({
    routes: [{
            path: '/home',
            component: home
        },
        {
            path: '/cart',
            component: cart
        },
        {
            path: '/cate',
            component: cate
        },
        {
            path: '/jdm',
            component: jdm
        },
        {
            path: '/user',
            component: user
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})

export default router