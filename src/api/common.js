/**
 * 请求统一管理
 */
import Request from '@/common/request';

/* Common */
export const rankGender = data => Request.get('api/ranking/gender', data);

/* login */
export const login = data => Request.get('/auth/login/kQeSNFCjFF4iSCsu', data);
export const userInfo = data => Request.get('/user', data);
/* 微信分享 */
export const wechatShare = data => Request.post('/wechat/config', data);
