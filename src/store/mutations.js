import * as types from './mutation-types.js';

export default {
    [types.SET_USER_INFO](state, userInfo) {
        state.userInfo = userInfo;
    },
    [types.SET_PHONE_CODE](state, code) {
        state.phoneCode = code;
    },
}
