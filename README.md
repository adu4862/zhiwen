# 职问

## 常用命令

```
安装插件
yarn install

项目启动
yarn run serve

项目打包
yarn run build

分析打包体积
yarn analyz

提交代码
yarn push
```

## 项目结构

```
- src
    - api               // 接口管理目录
    - assets            // 图片资源目录
    - common            // 公共资源目录(函数库、请求封装)
    - components        // 组件目录
    - config            // 配置文件目录
        - env.js            // 环境配置
        - lang              // 语言目录
    - fliters           // 过滤器
    - layouts           // 外层布局
    - store             // Vuex管理目录
    - style             // 公共样式目录
    - views             // 页面目录
```

## 常见问题

1、video.js在移动端会触发两次事件，怎么解决？

>原因是fastclick和video.js冲突导致的，本来准备把fastclick.js放在本地引入，但是遇到报错没能处理，为了上线，解决方法为：
 在node_modules里的fastclick.js中找到return (/\bneedsclick\b/).test(target.className);替换为return ((/\bneedsclick\b/).test(target.className) || (/\bvjs/).test(target.className));
