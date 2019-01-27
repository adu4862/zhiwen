import * as types from '@/store/mutation-types.js';
import {userRewardAmount, userPunches, userOrders, userCollections} from "@/api/my";

export default {
    // 获取用户收益
    async getUserRewardAmount() {
        try {
            const res = await userRewardAmount();
            if (res) {
                console.log("getUserRewardAmount--------", res);
                // commit(types.SET_TOKEN, res);
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 获取用户推广订单
    async getUserPunches({}, opts) {
        try {
            const res = await userPunches(opts);
            if (res) {
                console.log("getUserPunches--------", res);
                // commit(types.SET_TOKEN, res);
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 获取用户订单
    async getUserOrders({}, opts) {
        try {
            const res = await userOrders(opts);
            if (res) {
                console.log("getUserOrders--------", res);
                // commit(types.SET_TOKEN, res);
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 获取用户收藏
    async getUserCollections({}, opts) {
        try {
            const res = await userCollections(opts);
            if (res) {
                console.log("getUserCollections--------", res);
                // commit(types.SET_TOKEN, res);
            }
        } catch (e) {
            console.log(e)
        }
    },
}
