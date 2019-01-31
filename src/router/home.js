// 首页
const Home = () => import( /* webpackChunkName: "home" */ '../views/home/index')
const ClassDetail = () => import( /* webpackChunkName: "home" */ '../views/home/classDetail/index')
const ClassMedia = () => import( /* webpackChunkName: "home" */ '../views/home/classMedia/index')
const ClassVoice = () => import( /* webpackChunkName: "home" */ '../views/home/classVoice/index')

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
    {
        path: '/class/:id/media/:lessonId',
        name: 'classMedia',
        component: ClassMedia,
    },
    {
        path: '/class/:id/voice',
        name: 'classVoice',
        component: ClassVoice,
    },
]
