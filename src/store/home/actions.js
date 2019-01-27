import * as types from '@/store/mutation-types.js';
import {banner, classlist} from "@/api/home";

export default {
    // 获取Banner
    async getBanner() {
        try {
            const res = await banner();
            if (res) {
                console.log("getBanner--------", res);
                // commit(types.SET_TOKEN, res);
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 获取课程列表
    async getClassList({}, opts) {
        try {
            const res = await classlist(opts);
            if (res) {
                console.log("getClassList--------", res);
                // commit(types.SET_TOKEN, res);
            }
        } catch (e) {
            console.log(e)
        }
    },
}
