/**
 * 我的页面
 */
import Request from '@/common/request';
import {sessionSetItem, sessionGetItem, isWeiXin, GetRequest} from '../common/util'

/* 用户收益 */
export const userRewardAmount = data => Request.get('/user/' + data.userId + '/reward/amount', data);

/* 创建推广订单 */
export const makeRewards = data => Request.post('/rewards', data);
/* 获取推广订单 */
export const userRewards = data => Request.get('/user/' + data.userId + '/rewards', data);
/* 获取推广订单详情 */
export const userRewardDetail = data => Request.get('/reward/' + data.userId + '/reward-record', data);

/* 我的订单 */
export const userOrders = data => Request.get('/user/' + data.userId + '/orders', data);
/* 我的收藏 */
export const userCollections = data => Request.get('/user/' + data.userId + '/collections', data);
/* 我的收藏 - 删除 */
export const deleteUserCollections = data => Request.delete('/collection/' + data.id);
/* 我的课程 */
export const userProducts = data => Request.get('/user/' + data.userId + '/products', data);

/* 打卡信息 */
export const punchInfo = data => Request.get('/user/' + data.userId + '/punch', data);
/* 用户打卡 */
export const punch = data => Request.post('/punch', data);

/* 提现 */
export const withdraw = data => Request.post('/withdraw', data);
