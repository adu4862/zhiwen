/**
 * 请求统一管理
 */
import Request from '@/common/request';
import {sessionSetItem, sessionGetItem, isWeiXin, GetRequest} from '../common/util'

const userId = sessionGetItem('userId');

/* Common */
export const rankGender = data => Request.get('api/ranking/gender', data);

/* login */
export const userInfo = data => Request.get('/user/' + userId, data);
/* 创建验证码 */
export const phoneCode = data => Request.post('/user/phone/code', data);
/* 绑定手机号 */
export const phoneBind = data => Request.post('/user/' + data.id + '/phone', data);
/* 微信分享 */
export const wechatShare = data => Request.post('/wechat/config', data);
/* 创建订单 */
export const createOrder = data => Request.post('/order', data);
/* 微信支付 */
export const wechatPayConfig = data => Request.get('/order/' + data.id + '/sign');
