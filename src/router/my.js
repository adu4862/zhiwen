// 我的页面
const My = () => import( /* webpackChunkName: "my" */ '../views/my')
const BindPhone = () => import( /* webpackChunkName: "my" */ '../views/my/phoneBind')
const BindPhoneRes = () => import( /* webpackChunkName: "my" */ '../views/my/phoneBind/bindRes')
const AreaSelect = () => import( /* webpackChunkName: "my" */ '../views/my/phoneBind/areaSelect')
const ConfirmPhone = () => import( /* webpackChunkName: "my" */ '../views/my/phoneConfirm')
const Order = () => import( /* webpackChunkName: "my" */ '../views/my/order')
const Collection = () => import( /* webpackChunkName: "my" */ '../views/my/collection')
const Balance = () => import( /* webpackChunkName: "my" */ '../views/my/balance')
const BalanceRecord = () => import( /* webpackChunkName: "my" */ '../views/my/balance/records')
const BalanceWithdraw = () => import( /* webpackChunkName: "my" */ '../views/my/balance/withdraw')
const BalanceWithdrawSuccess = () => import( /* webpackChunkName: "my" */ '../views/my/balance/withdraw/withdrawSuccess')
const Promotion = () => import( /* webpackChunkName: "my" */ '../views/my/promotion')
const PromotionDetail = () => import( /* webpackChunkName: "my" */ '../views/my/promotion/detail')

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
        path: '/phone/bind/res',
        name: 'bindPhoneRes',
        component: BindPhoneRes
    },
    {
        path: '/area',
        name: 'areaSelect',
        component: AreaSelect
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
