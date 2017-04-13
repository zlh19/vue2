var Vue = require('vue')
var Vuex = require('vuex');

Vue.use(Vuex)

var store=new Vuex.Store({
    state: {
        // 用户信息
        userInfor:{
            userAccount:''
        },
        // 弹出层tips
        isShowTips:false,
        tipsContent:'',
        // 倒计时
        countDownDisabled:true,
        countDownIsTap:false,
        // 弹出层dialog
        isShowDialog:false

    },
    mutations: {
        // 弹出层tips
        mSetShowTips:function(state, status){
            state.isShowTips = status;
        },
        mSetShowTipsContent:function(state, status){
            state.tipsContent = status;
        },
        // 倒计时
        mCountDownDisabled:function(state,status){
            state.countDownDisabled=status
        },
        mCountDownIsTap:function(state,status){
            state.countDownIsTap=status
        },
        // 弹出层dialog
        mShowDialog:function(state,status){
            state.isShowDialog=status
        }

    },
    actions:{
        // 弹出层tips
        aSetShowTips:function(context,status){
            if(!context.state.isShowTips){
                setTimeout(function(){
                   context.commit('mSetShowTips',false);
                },2000)
            }
            context.commit('mSetShowTips',status);
        },
        aSetShowTipsContent:function(context,status){
            context.commit('mSetShowTipsContent',status);
        },
        // 倒计时
        aCountDownDisabled:function(context,status){
            context.commit('mCountDownDisabled',status)
        },
        aCountDownIsTap:function(context,status){
            context.commit('mCountDownIsTap',status)
        },
        // 弹出层dialog
        aShowDialog:function(context,status){
            context.commit('mShowDialog',status)
        }

    }

})



module.exports = {
    store:store
}
