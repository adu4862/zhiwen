/**
 * 我的页面
 */
import Request from '@/common/request';

/* 用户收益 */
export const userRewardAmount = data => Request.get('/user/reward/amount', data);
/* 推广订单 */
export const userPunches = data => Request.get('/user/punches', data);
/* 我的订单 */
export const userOrders = data => Request.get('/user/orders', data);
/* 我的收藏 */
export const userCollections = data => Request.get('/user/collections', data);
/* 我的课程 */
export const userProducts = data => Request.get('/user/products', data);
