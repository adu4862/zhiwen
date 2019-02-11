/**
 * 我的页面
 */
import Request from '@/common/request';
import {sessionSetItem, sessionGetItem, isWeiXin, GetRequest} from '../common/util'

/* 用户收益 */
export const userRewardAmount = data => Request.get('/user/' + data.id + '/reward/amount', data);
/* 推广订单 */
export const userRewards = data => Request.get('/user/' + data.id + '/rewards', data);
/* 推广订单详情 */
export const userRewardDetail = data => Request.get('/reward/' + data.id + '/reward-record', data);
/* 我的订单 */
export const userOrders = data => Request.get('/user/' + data.id + '/orders', data);
/* 我的收藏 */
export const userCollections = data => Request.get('/user/' + data.id + '/collections', data);
/* 我的收藏 - 删除 */
export const deleteUserCollections = data => Request.delete('/collection/' + data.id);
/* 我的课程 */
export const userProducts = data => Request.get('/user/' + data.id + '/products', data);

/* 打卡信息 */
export const punchInfo = data => Request.get('/user/' + data.id + '/punch', data);
/* 用户打卡 */
export const punch = data => Request.post('/punch', data);
