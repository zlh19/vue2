var Vue = require('vue');
var VueTap = require('v-tap');
var VueAwesomeSwiper = require('vue-awesome-swiper');
var App = require('./App.vue');
var VueCookie = require('vue-cookie');

var router = require('./router/router.js').router;
var store=require('./store/store.js').store;

// var VueResource = require('vue-resource');

Vue.use(VueAwesomeSwiper)

require('./public/css/reset.scss');

// 引入px与rem的换算
require('./public/js/model').remToPxFun();

//实例化vue模块 
// Vue.use(VueResource);
Vue.use(VueTap)
Vue.use(VueCookie);

// 创建一个空组件
var app = Vue.extend({});

var app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

