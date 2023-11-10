import { createRouter,createWebHistory } from 'vue-router'
import  routerConfig  from './modules'
import routerCommon from './common'
console.log(routerConfig)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...routerConfig,
        ...routerCommon
    ]
})

export default router

