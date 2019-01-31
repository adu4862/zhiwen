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
/* 获取视、音频链接 */
export const resourseUrl = data => Request.post('/lesson/' + data.id + '/url');
