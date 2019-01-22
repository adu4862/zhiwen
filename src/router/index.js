import Vue from 'vue'
import Router from 'vue-router'
import {sessionSetItem} from '../common/util'
import title from '@/config/title'
import homeRouter from './home'
import myRouter from './my'
import discountRouter from './discount'
import exerciseRouter from './exercise'

// demo页
const DemoPage = () => import( /* webpackChunkName: "home" */ '../views/demo')
const CanvasDemo = () => import( /* webpackChunkName: "home" */ '../views/canvasDemo')
const QRDemo = () => import( /* webpackChunkName: "home" */ '../views/qrDemo')
const NotFound = () => import( /* webpackChunkName: "home" */ '../views/common/404')
const BadWay = () => import( /* webpackChunkName: "home" */ '../views/common/502')

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
        ...exerciseRouter,
        {
            path: '/404',
            name: 'notFound',
            component: NotFound
        },
        {
            path: '/502',
            name: 'badWay',
            component: BadWay
        },
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
