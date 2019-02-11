import * as types from '@/store/mutation-types.js';

export default {
    // 课程详情
    [types.SET_CLASS_DETAIL](state, obj) {
        state.classDetail = obj;
    },
    // 单节课程详情
    [types.SET_LESSON_DETAIL](state, obj) {
        state.lessonDetail = obj;
    },
    // 砍价详情
    [types.SET_BARGAIN_DETAIL](state, obj) {
        state.bargainDetail = obj;
    },
}
