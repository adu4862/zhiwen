/**
 * 主页
 */
import Request from '@/common/request';

/* 课程列表 */
export const classList = data => Request.get('/product', data);
