/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * credential: 跨域
 *
 */

const dev = {
    routerMode: 'history', // hash

    /* beta */
    baseUrl: `http://${location.host}/api`,
    credential: true,
};

const prod = {
    ...dev,
    baseUrl: "http://learning.zhiwen.me",
};

export default process.env.NODE_ENV === 'development' ? dev : prod;
