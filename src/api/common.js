/**
 * 请求统一管理
 */
import Request from '@/common/request';

/* Common */
export const rankGender = data => Request.get('api/ranking/gender', data);

/* login */
export const login = data => Request.get('/auth/login/chris', data);
export const userInfo = data => Request.get('/user', data);
