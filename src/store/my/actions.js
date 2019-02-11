import * as types from '@/store/mutation-types.js';
import {
    userRewardAmount,
    userRewards,
    userOrders,
    userCollections,
    deleteUserCollections,
    userProducts,
    punchInfo,
    punch
} from "@/api/my";
import {sessionSetItem, sessionGetItem, isWeiXin, GetRequest} from '@/common/util'

export default {
    // 获取用户收益
    async getUserRewardAmount() {
        try {
            const res = await userRewardAmount({
                id: sessionGetItem('userId')
            });
            if (res) {
                return res;
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 获取用户推广订单
    async getUserPunches({}, opts) {
        try {
            const res = await userRewards(Object.assign(opts, {id: sessionGetItem('userId')}));
            if (res) {
                return res
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 获取用户订单
    async getUserOrders({}, opts) {
        try {
            const res = await userOrders(Object.assign(opts, {id: sessionGetItem('userId')}));
            if (res) {
                console.log("getUserOrders--------", res);
                // commit(types.SET_TOKEN, res);
                return res
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 获取用户收藏
    async deleteUserCollections({}, opts) {
        try {
            const res = await deleteUserCollections(Object.assign(opts, {id: sessionGetItem('userId')}));
            if (res) {
                return res
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 删除用户收藏
    async getUserCollections({}, opts) {
        try {
            const res = await userCollections(Object.assign(opts, {id: sessionGetItem('userId')}));
            if (res) {
                return res
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 获取用户课程
    async getUserProducts({}, opts) {
        try {
            const res = await userProducts(Object.assign(opts, {id: sessionGetItem('userId')}));
            if (res) {
                return res
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 获取打卡信息
    async getPunchInfo({}, opts) {
        try {
            const res = await punchInfo(Object.assign(opts, {id: sessionGetItem('userId')}));
            if (res) {
                return res
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 用户打卡
    async setPunch({}, opts) {
        try {
            const res = await punch(Object.assign(opts, {id: sessionGetItem('userId')}));
            if (res) {
                return res
            }
        } catch (e) {
            console.log(e)
        }
    },
}
