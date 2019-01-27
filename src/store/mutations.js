import * as types from './mutation-types.js';

export default {
    [types.SET_USER_INFO](state, userInfo) {
        state.userInfo = userInfo;
    },
    // 保存toekn
    [types.SET_TOKEN](state, toekn) {
        state.token = toekn;
    },
    // 设置国家手机号前缀
    [types.SET_PHONE_CODE](state, code) {
        state.phoneCode = code;
    },
}
