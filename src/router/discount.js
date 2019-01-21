// 砍价页面
const Discount = () => import( /* webpackChunkName: "home" */ '../views/discount/index')

export default [
    {
        path: '/discount',
        name: 'discount',
        component: Discount,
    },
]
