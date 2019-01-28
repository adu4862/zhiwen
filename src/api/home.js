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
