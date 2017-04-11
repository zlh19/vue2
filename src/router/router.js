var Vue = require('vue')
var VueRouter = require('vue-router');
var setWechatTitleFun = require('../assets/public/js/model').setWechatTitleFun;


// 实例化VueRouter
Vue.use(VueRouter);

// 路由表
var routes = [{ //首页
    path: '/',
    name: '/',
    meta: {
        title: '首页'
    },
    redirect: '/loginEnter'
},{
    path: '/login',
    name: 'login',
    meta: {
        title: '登录'
    },
    component: function(resolve) {
        require(['../vue/login.vue'], resolve);
    }
},{
    path: '/help',
    name: 'help',
    meta: {
        title: '帮助'
    },
    component: function(resolve) {
        require(['../vue/help.vue'], resolve);
    }
},{
    path: '/buyStock',
    name: 'buyStock',
    meta: {
        title: '首页'
    },
    component: function(resolve) {
        require(['../vue/buyStock.vue'], resolve);
    }
}, {
    path: '/buyRecord',
    name: 'buyRecord',
    meta: {
        title: '列表页'
    },
    component: function(resolve) {
        require(['../vue/buyRecord.vue'], resolve);
    }
}, {
    path: '/buyDay',
    name: 'buyDay',
    meta: {
        title: '选择页面'
    },
    component: function(resolve) {
        require(['../vue/buyDay.vue'], resolve);
    }
}, {
    path: '*',
    redirect: '/loginEnter'
}]




var router = new VueRouter({
    routes
// 当hashbang的值为true时，所有的路径都会被格式化已#!开头，
//     hashbang: true,
//     history: false,
//     saveScrollPosition: true,
//     transitionOnLoad: true
})


router.afterEach(function(to, form, next) {
    setWechatTitleFun(to.meta.title);
})

module.exports = {
    router: router
}
