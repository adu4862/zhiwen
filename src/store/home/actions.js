import * as types from '@/store/mutation-types.js';
import {banner, classList, classDetail, classCollection, resourseUrl,
    singleClassInfo, bargainCreate, bargainMoney, bargainClass, classTest, classTestRecord,
    classTestScore, classTestScoreUpdate, getClassTestRecord} from "@/api/home";

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
    async getSingleClassInfo({commit}, opts) {
        try {
            const res = await singleClassInfo(opts);
            if (res) {
                commit(types.SET_LESSON_DETAIL, res);
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
    async getBargainMoney({commit}, opts) {
        try {
            const res = await bargainMoney(opts);
            if (res) {
                commit(types.SET_BARGAIN_DETAIL, res);
                return res;
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 帮别人砍价
    async helpBargain({commit}, opts) {
        try {
            const res = await bargainClass(opts);
            if (res) {
                return res;
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 获取单个测试题
    async getSingleTest({commit}, opts) {
        try {
            const res = await classTest(opts);
            if (res) {
                return res;
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 获取单个测试题
    async setTestRecord({commit}, opts) {
        try {
            const res = await classTestRecord(opts);
            if (res) {
                // console.log('setTestRecord', res);
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 创建答题总成绩记录
    async setTestScore({commit}, opts) {
        try {
            const res = await classTestScore(opts);
            if (res) {
                // console.log('setTestScore', res);
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 更新答题总成绩记录
    async updateTestScore({commit}, opts) {
        try {
            const res = await classTestScoreUpdate(opts);
            if (res) {
                // console.log('updateTestScore', res);
            }
        } catch (e) {
            console.log(e)
        }
    },
    // 更新答题总成绩记录
    async getTestRecords({commit}, opts) {
        try {
            const res = await getClassTestRecord(opts);
            if (res) {
                console.log('getTestRecords', res);
                return res;
            }
        } catch (e) {
            console.log(e)
        }
    },
}
