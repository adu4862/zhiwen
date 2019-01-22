// 练习页面
const Exercise = () => import( /* webpackChunkName: "home" */ '../views/exercise/index')
const ExerciseRes = () => import( /* webpackChunkName: "home" */ '../views/exercise/resPage/index')

export default [
    {
        path: '/exercise',
        name: 'exercise',
        component: Exercise,
    },
    {
        path: '/exercise/res',
        name: 'exerciseRes',
        component: ExerciseRes,
    },
]
