var Vue = require('vue')
var Vuex = require('vuex');

Vue.use(Vuex)

var store=new Vuex.Store({
    state: {
        // 弹出层
        isShowTips:false,
        tipsContent:'',
        // 倒计时
        countDownDisabled:true,
        countDownIsTap:false

    },
    mutations: {
        mSetShowTips:function(state, status){
            state.isShowTips = status;
        },
        mSetShowTipsContent:function(state, status){
            state.tipsContent = status;
        },
        mCountDownDisabled:function(state,status){
            state.countDownDisabled=status
        },
        mCountDownIsTap:function(state,status){
            state.countDownIsTap=status
        }
    },
    actions:{
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
        aCountDownDisabled:function(context,status){
            context.commit('mCountDownDisabled',status)
        },
        aCountDownIsTap:function(context,status){
            context.commit('mCountDownIsTap',status)
        }

    }

})



module.exports = {
    store:store
}
