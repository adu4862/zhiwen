import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './config/lang'
import filters from './filters'
import 'amfe-flexible'
import './vant'

// lodash函数库
import lodash from 'lodash'
Vue.prototype._ = lodash        // this._

// 消除 click 移动浏览器300ms延迟
import attachFastClick from 'fastclick'
attachFastClick.attach(document.body)

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
