import * as types from '@/store/mutation-types.js';
import {userRewardAmount, userPunches} from "@/api/my";

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
}
