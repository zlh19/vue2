var Vue = require('vue');
var VueTap = require('v-tap');
var router = require('./router/router.js').router;
var App = require('./App.vue');
var store=require('./store/store.js').store;

var VueResource = require('vue-resource');

require('./assets/css/reset.scss');

// 引入px与rem的换算
require('./assets/js/model').remToPxFun();

//实例化vue模块 
Vue.use(VueResource);
Vue.use(VueTap)

// 创建一个空组件
var app = Vue.extend({});

var app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

