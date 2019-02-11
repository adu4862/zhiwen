// 练习页面
const Exercise = () => import( /* webpackChunkName: "home" */ '../views/exercise/index')
const ExerciseRes = () => import( /* webpackChunkName: "home" */ '../views/exercise/resPage/index')

export default [
    {
        path: '/exercise/:id',
        name: 'exercise',
        component: Exercise,
    },
    {
        path: '/exercise/:id/res',
        name: 'exerciseRes',
        component: ExerciseRes,
    },
]
