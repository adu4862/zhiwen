// 砍价页面
const Discount = () => import( /* webpackChunkName: "home" */ '../views/discount/index')
const Punch = () => import( /* webpackChunkName: "home" */ '../views/punch/index')
const PunchSuccess = () => import( /* webpackChunkName: "home" */ '../views/punch/punchSuccess/index')

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
    {
        path: '/punch/success',
        name: 'punchSuccess',
        component: PunchSuccess,
    },
]
