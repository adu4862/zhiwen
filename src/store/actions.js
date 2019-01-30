import * as types from '@/store/mutation-types.js';
import {login, userInfo, wechatShare} from '@/api/common';

export default {
	changeUserInfo({commit}, info) {
        let userInfo = `this is ${info}`;
		commit(types.SET_USER_INFO, userInfo);
    },
    /* 登陆 */
    async userLogin({commit}, opts) {
        try {
            const res = await login();
            if (res) {
                console.log("userLogin--------", res);
                commit(types.SET_TOKEN, res);
            }
        } catch (e) {
            console.log(e)
        }
    },
    /* 获取用户信息 */
    async getUserInfo({commit}, opts) {
        try {
            const res = await userInfo();
            if (res) {
                commit(types.SET_USER_INFO, res);
            }
        } catch (e) {
            console.log(e)
        }
    },
    /* 获取微信分享信息 */
    async getWechatShare({commit}, opts) {
        try {
            const res = await wechatShare(opts);
            if (res) {
                return res;
            }
        } catch (e) {
            console.log(e)
        }
    },
}
