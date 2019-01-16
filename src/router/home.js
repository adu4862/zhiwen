// 我的页面
const Home = () => import( /* webpackChunkName: "home" */ '../views/home/index')
const ClassDetail = () => import( /* webpackChunkName: "home" */ '../views/home/classDetail/index')

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
