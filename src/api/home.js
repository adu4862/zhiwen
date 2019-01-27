/**
 * 主页
 */
import Request from '@/common/request';

/* Banner */
export const banner = data => Request.get('/banner', data);
/* 课程列表 */
export const classlist = data => Request.get('/product', data);
