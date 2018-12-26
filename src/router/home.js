// 我的页面
const Home = () => import( /* webpackChunkName: "home" */ '../views/home/index.vue')
const ClassDetail = () => import( /* webpackChunkName: "home" */ '../views/home/classDetail/index.vue')

export default [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/class/:id',
        name: 'classDetail',
        component: ClassDetail,
    },
]
