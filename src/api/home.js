/**
 * 主页
 */
import Request from '@/common/request';

/* Banner */
export const banner = data => Request.get('/banner', data);
/* 课程列表 */
export const classList = data => Request.get('/product', data);
/* 课程详情 */
export const classDetail = data => Request.get('/product/' + data.id);
/* 课程收藏 */
export const classCollection = data => Request.post('/collection', data);
/* 单节课信息 */
export const singleClassInfo = data => Request.get('/lesson/' + data.id);
/* 单节课资源链接 */
export const resourseUrl = data => Request.get('/lesson/' + data.id + '/url');
/* 创建砍价 */
export const bargainCreate = data => Request.post('/bargain', data);
/* 获取单个砍价的金额 */
export const bargainMoney = data => Request.get('/bargain/' + data.id);
/* 获取单个测试题 */
export const classTest = data => Request.get('/test-question/' + data.id);
/* 创建答题记录 */
export const classTestRecord = data => Request.post('/test-question-record', data);
/* 创建答题总成绩记录 */
export const classTestScore = data => Request.post('/test-question-score', data);
/* 更新答题总成绩记录 */
export const classTestScoreUpdate = data => Request.put('/test-question-score/' + data.id, data);


