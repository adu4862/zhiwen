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
