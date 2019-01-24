import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './config/lang'
import filters from './filters'
import 'amfe-flexible'
import './vant'

import Toast from './components/toast/index'
Vue.use(Toast);

// 消除 click 移动浏览器300ms延迟
// 因为fastclick会影响video.js控件，所以在node_modules里的fastclick.js中找到return (/\bneedsclick\b/).test(target.className);替换为return ((/\bneedsclick\b/).test(target.className) || (/\bvjs/).test(target.className));
import attachFastClick from 'fastclick'
attachFastClick.attach(document.body);

// 如果是非线上环境，加载 VConsole（移动端适用）
// if (process.env.NODE_ENV !== 'production') {
//     var VConsole = require('vconsole/dist/vconsole.min.js');
//     var vConsole = new VConsole();
// }

Vue.config.productionTip = false

// 全局过滤器
Object.keys(filters).forEach(filterName => {
    Vue.filter(filterName, filters[filterName])
})

/* eslint-disable no-new */
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
