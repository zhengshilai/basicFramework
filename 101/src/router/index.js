import { createRouter,createWebHistory } from 'vue-router'
import  routerConfig  from './modules'
import routerCommon from './common'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...routerConfig,
        ...routerCommon
    ]
})

export default router

