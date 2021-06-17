import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/', name: 'home', component: () => import('../views/home'),
        }
    ]
})
export default router