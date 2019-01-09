// 我的页面
const My = () => import( /* webpackChunkName: "my" */ '../views/my/index.vue')
const BindPhone = () => import( /* webpackChunkName: "my" */ '../views/my/bindPhone/index.vue')
const ConfirmPhone = () => import( /* webpackChunkName: "my" */ '../views/my/confirmPhone/index.vue')
const Order = () => import( /* webpackChunkName: "my" */ '../views/my/order/index.vue')
const Collection = () => import( /* webpackChunkName: "my" */ '../views/my/collection/index.vue')
const Balance = () => import( /* webpackChunkName: "my" */ '../views/my/balance/index.vue')
const BalanceRecord = () => import( /* webpackChunkName: "my" */ '../views/my/balance/records/index.vue')
const BalanceWithdraw = () => import( /* webpackChunkName: "my" */ '../views/my/balance/withdraw/index.vue')
const BalanceWithdrawSuccess = () => import( /* webpackChunkName: "my" */ '../views/my/balance/withdraw/withdrawSuccess.vue')
const Promotion = () => import( /* webpackChunkName: "my" */ '../views/my/promotion/index.vue')
const PromotionDetail = () => import( /* webpackChunkName: "my" */ '../views/my/promotion/detail/index.vue')

export default [
    {
        path: '/my',
        name: 'my',
        component: My
    },
    {
        path: '/phone/bind',
        name: 'bindPhone',
        component: BindPhone
    },
    {
        path: '/phone/confirm',
        name: 'confirmPhone',
        component: ConfirmPhone
    },
    {
        path: '/my/order',
        name: 'order',
        component: Order
    },
    {
        path: '/my/collection',
        name: 'collection',
        component: Collection
    },
    {
        path: '/my/balance',
        name: 'balance',
        component: Balance
    },
    {
        path: '/my/balance/record',
        name: 'balanceRecord',
        component: BalanceRecord
    },
    {
        path: '/my/balance/withdraw',
        name: 'balanceWithdraw',
        component: BalanceWithdraw
    },
    {
        path: '/my/balance/withdraw/success',
        name: 'balanceWithdrawSuccess',
        component: BalanceWithdrawSuccess
    },
    {
        path: '/my/promotion',
        name: 'promotion',
        component: Promotion
    },
    {
        path: '/my/promotion/:id',
        name: 'promotionDetail',
        component: PromotionDetail
    },
]
