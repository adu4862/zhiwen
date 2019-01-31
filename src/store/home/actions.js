import * as types from '@/store/mutation-types.js';
import {banner, classList, classDetail, classCollection, resourseUrl, singleClassInfo, bargainCreate} from "@/api/home";

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
    async getClassDetail({commit}, id) {
        try {
            const res = await classDetail({id});
            if (res) {
                commit(types.SET_CLASS_DETAIL, res);
                // return res;
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 收藏课程
    async setClassCollection({}, opts) {
        try {
            const res = await classCollection(opts);
            if (res) {
                return res;
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 获取资源url
    async getResourseUrl({}, opts) {
        try {
            const res = await resourseUrl(opts);
            if (res) {
                return res;
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 获取单节课信息
    async getSingleClassInfo({}, opts) {
        try {
            const res = await singleClassInfo(opts);
            if (res) {
                return res;
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 创建砍价
    async createBargain({}, opts) {
        try {
            const res = await bargainCreate(opts);
            if (res) {
                return res;
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 获取单个砍价的金额
    async getBarginMoney({}, opts) {
        try {
            const res = await bargainMoney(opts);
            if (res) {
                return res;
            }
        } catch (e) {
            console.log(e)
        }
    },
}
