/**
 * 我的页面
 */
import Request from '@/common/request';
import {sessionSetItem, sessionGetItem, isWeiXin, GetRequest} from '../common/util'

const userId = sessionGetItem('userId');

/* 用户收益 */
export const userRewardAmount = data => Request.get('/user/' + userId + '/reward/amount', data);
/* 推广订单 */
export const userRewards = data => Request.get('/user/' + userId + '/rewards', data);
/* 我的订单 */
export const userOrders = data => Request.get('/user/' + userId + '/orders', data);
/* 我的收藏 */
export const userCollections = data => Request.get('/user/' + userId + '/collections', data);
/* 我的收藏 - 删除 */
export const deleteUserCollections = data => Request.delete('/collection/' + data.id);
/* 我的课程 */
export const userProducts = data => Request.get('/user/' + userId + '/products', data);
