import Vue from 'vue'
import Router from 'vue-router'
import {sessionSetItem} from '../common/util'
import title from '@/config/title'
import homeRouter from './home'
import myRouter from './my'
import discountRouter from './discount'

// demo页
const DemoPage = () => import( /* webpackChunkName: "home" */ '../views/demo')
const CanvasDemo = () => import( /* webpackChunkName: "home" */ '../views/canvasDemo')
const QRDemo = () => import( /* webpackChunkName: "home" */ '../views/qrDemo')

Vue.use(Router)

let base = `${process.env.BASE_URL}` // 动态获取二级目录

const router =  new Router({
    mode: 'history',
    base: base,
    routes: [
        {
            path: '/demo',
            name: 'demopage',
            component: DemoPage
        },
        {
            path: '/canvas',
            name: 'canvasDemo',
            component: CanvasDemo
        },
        {
            path: '/qr',
            name: 'qrDemo',
            component: QRDemo
        },
        ...homeRouter,
        ...myRouter,
        ...discountRouter,
        {
            path: '*',
            redirect: '/'
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
});

router.beforeEach((to, from, next) => {
    if (["home", "my"].includes(to.name)) sessionSetItem('tabBar', to.name)
    document.title = title[to.name] || '职问'
    return next()
})

export default router;
