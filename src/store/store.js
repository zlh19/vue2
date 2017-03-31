var Vue = require('vue')
var Vuex = require('vuex');

Vue.use(Vuex)

var store=new Vuex.Store({
    state: {
        isShowTips:false,
        tipsContent:''

    },
    mutations: {
        setShowTips:function(state, status){
            if(!state.isShowTips){
                setTimeout(function(){
                    state.isShowTips = false;
                },2000)
            }
            state.isShowTips = status;
        },
        setShowTipsContent:function(state, status){
            state.tipsContent = status;
        }
    }

})



module.exports = {
    store:store
}
