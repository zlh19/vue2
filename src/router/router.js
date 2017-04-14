var Vue = require('vue')
var VueRouter = require('vue-router');
var setWechatTitleFun = require('../public/js/model').setWechatTitleFun;


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
        title: '登录',
        isLogin:0
    },
    component: function(resolve) {
        require(['../vue/login/login.vue'], resolve);
    }
},{
    path: '/help',
    name: 'help',
    meta: {
        title: '帮助',
        isLogin:1
    },
    component: function(resolve) {
        require(['../vue/help/help.vue'], resolve);
    }
},{
    path: '/buyStock',
    name: 'buyStock',
    meta: {
        title: '首页',
        isLogin:1
    },
    component: function(resolve) {
        require(['../vue/buyStock/buyStock.vue'], resolve);
    }
}, {
    path: '/buyRecord',
    name: 'buyRecord',
    meta: {
        title: '列表页',
        isLogin:1
    },
    component: function(resolve) {
        require(['../vue/buyRecord/buyRecord.vue'], resolve);
    }
}, {
    path: '/buyDay',
    name: 'buyDay',
    meta: {
        title: '选择页面',
        isLogin:1
    },
    component: function(resolve) {
        require(['../vue/buyDay/buyDay.vue'], resolve);
    }
}, {
    path: '*',
    redirect: '/buyStock'
}]




var router = new VueRouter({
    routes
// 当hashbang的值为true时，所有的路径都会被格式化已#!开头，
//     hashbang: true,
//     history: false,
//     saveScrollPosition: true,
//     transitionOnLoad: true
})

router.beforeEach((to, from, next) => {
    setWechatTitleFun(to.meta.title);
    if(to.meta.isLogin==1){
        var fundAccount=getCookie('zlhIsLogin');
        if(!fundAccount){
           next('/login')
        }else{
           next();
        }
    }else{
        next();
    }
})

function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){
        return unescape(arr[2]);
    }else{
        return false;
    }  
}

module.exports = {
    router: router
}
