/**
 * 我的页面
 */
import Request from './request';

/* 用户收益 */
export const userRewardAmount = data => Request.get('/user/reward/amount', data);
/* 推广订单 */
export const userPunches = data => Request.get('/user/punches', data);
