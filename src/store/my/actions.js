import * as types from '@/store/mutation-types.js';
import {userRewardAmount} from "@/api/my";

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
    }
}
