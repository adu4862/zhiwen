// 练习页面
const Exerciser = () => import( /* webpackChunkName: "home" */ '../views/exercise/index')

export default [
    {
        path: '/exercise',
        name: 'exercise',
        component: Exerciser,
    },
]
