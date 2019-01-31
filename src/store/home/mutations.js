import * as types from '@/store/mutation-types.js';

export default {
    // 课程详情
    [types.SET_CLASS_DETAIL](state, obj) {
        state.classDetail = obj;
        console.log(111, state.classDetail)
    },
}
