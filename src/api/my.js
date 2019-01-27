/**
 * 我的页面
 */
import Request from './request';

/* 用户收益 */
export const userRewardAmount = data => Request.get('/user/reward/amount', data);
