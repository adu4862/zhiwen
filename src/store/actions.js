import * as types from '@/store/mutation-types.js';
import {userInfo, wechatShare, phoneCode, phoneBind, createOrder, wechatPayConfig} from '@/api/common';
import {sessionGetItem} from "../common/util";

export default {
    /* 获取用户信息 */
    async getUserInfo({commit}, opts) {
        try {
            const res = await userInfo({
                id: sessionGetItem('userId')
            });
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
    /* 创建订单 */
    async setOrder({commit}, opts) {
        try {
            const res = await createOrder(opts);
            if (res) {
                return res;
            }
        } catch (e) {
            console.log(e)
        }
    },
    /* 获取微信支付信息 */
    async getWechatPayConfig({commit}, opts) {
        try {
            const res = await wechatPayConfig(opts);
            if (res) {
                return res;
            }
        } catch (e) {
            console.log(e)
        }
    },
    /* 获取验证码 */
    async getPhoneCode({commit}, opts) {
        try {
            const res = await phoneCode(opts);
            if (res) {
                return res;
            }
        } catch (e) {
            console.log(e)
        }
    },
    /* 绑定手机号 */
    async bindPhone({commit}, opts) {
        try {
            const res = await phoneBind(opts);
            if (res) {
                return res;
            }
        } catch (e) {
            console.log(e)
        }
    },
}
