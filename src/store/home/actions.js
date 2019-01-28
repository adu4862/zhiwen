import * as types from '@/store/mutation-types.js';
import {banner, classList, classDetail} from "@/api/home";

export default {
    // 获取Banner
    async getBanner() {
        try {
            const res = await banner();
            if (res) {
                return res;
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 获取课程列表
    async getClassList({}, opts) {
        try {
            const res = await classList(opts);
            if (res) {
                return res;
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 获取课程详情
    async getClassDetail({}, id) {
        try {
            const res = await classDetail({
                id: 1
            });
            if (res) {
                console.log("getClassDetail--------", res);
                // commit(types.SET_TOKEN, res);
            }
        } catch (e) {
            console.log(e)
        }
    },
}
