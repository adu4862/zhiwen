// 砍价页面
const Discount = () => import( /* webpackChunkName: "home" */ '../views/discount/index')
const Punch = () => import( /* webpackChunkName: "home" */ '../views/punch/index')

export default [
    {
        path: '/discount',
        name: 'discount',
        component: Discount,
    },
    {
        path: '/punch',
        name: 'punch',
        component: Punch,
    },
]
