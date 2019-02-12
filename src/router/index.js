import Vue from 'vue'
import Router from 'vue-router'
import {sessionSetItem, sessionGetItem, isWeiXin, GetRequest} from '../common/util'
import title from '@/config/title'
import homeRouter from './home'
import myRouter from './my'
import discountRouter from './discount'
import exerciseRouter from './exercise'

// demo页
const CanvasDemo = () => import( /* webpackChunkName: "home" */ '../views/canvasDemo')
const QRDemo = () => import( /* webpackChunkName: "home" */ '../views/qrDemo')
const NotFound = () => import( /* webpackChunkName: "home" */ '../views/common/404')
const BadWay = () => import( /* webpackChunkName: "home" */ '../views/common/502')

Vue.use(Router)

let base = `${process.env.BASE_URL}` // 动态获取二级目录

const router =  new Router({
    // mode: 'history',
    base: base,
    routes: [
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
    if (["home", "my"].includes(to.name)) sessionSetItem('tabBar', to.name);
    document.title = title[to.name] || '职问';

    if (GetRequest().authorization) sessionSetItem('token', GetRequest().authorization);
    if (GetRequest().user_id) {
        sessionSetItem('userId', GetRequest().user_id);
        // 去掉问号后面的参数，还原url，防止分享URL泄露信息
        history.pushState({}, null, location.href.replace(/\/\?(.*?)\#\//, '/#/'));
        console.log(window.location.href)
    }

    // 判断登陆
    if (!sessionGetItem('token')) {
        window.location.href = 'http://learning.zhiwen.me/api/user/wechat/login';
    } else {
        // 判断登陆超时

        next();
    }

    // 判断微信浏览器
    // if (!isWeiXin()) {
    //     //防止无限循环
    //     if (to.name === 'badWay') {
    //         next();
    //         return
    //     }
    //     next({
    //         path: '/502',
    //     })
    // } else {
    //     next();
    // }
});

export default router;
