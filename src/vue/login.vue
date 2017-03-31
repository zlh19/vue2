<template>
	<div id="login">
		<div class="main">
			<div class="p-main">
		        <div class="p-infor">
		            <p class="top-infor">进行手机号码注册认证，感谢您的配合。</p>
		        </div>
		        <!-- 手机号码 -->
		        <div class="ipt-gp">
		            <i class="icon-ipt icon-tel"></i>
		            <input type="number" class="ipt-text" placeholder="请输入手机号" v-model="userTel" @keyup="inputKeyupFun">
		        </div>
		        <!-- 密码 -->
		        <div class="ipt-gp">
		            <i class="icon-ipt icon-code"></i>
		            <input type="number" class="ipt-text" placeholder="验证码" v-model="userCode" @keyup="inputKeyupFun">
		            <button class="code-btn" :disabled="disabledCodeBtn" v-tap="{methods:codeBtnClickFun}" v-text="codeText"></button>
		        </div>
		        <!-- 按钮 -->
		        <button class="btn-submit" :disabled="disabledSubmitBtn" v-tap="{methods:submitBtnClickFun}">验证</button>
		       
	    	</div>
	    	<nv-tips></nv-tips>
	    </div>
	</div>
</template>
<script>
	var nvTips=require('../components/tips.vue')
	module.exports={
		data:function(){
			return{
				userTel:'',
				userCode:'',
				disabledSubmitBtn:true,
				disabledCodeBtn:false,
				codeText:'获取验证码'
			}
		},
		mounted:function(){

			 
		},
		methods:{
			// 输入框按钮
			inputKeyupFun:function(){
				var that=this;
				// 按钮是否可点击
				if(that.userTel!=""&&that.userCode!=""){
					that.disabledSubmitBtn=false
				}else{
					that.disabledSubmitBtn=true
				}
			},
			// 倒计时点击事件
			codeBtnClickFun:function(){
				var that=this;
				this.smsCodeCount( 59 );
			},
			smsCodeCount:function(count){
				var that=this;
				if( count === 0 ){
	                that.codeText="获取验证码";
					that.disabledCodeBtn=false;
	            } else {
	            	that.disabledCodeBtn=true;
	            	that.codeText= count-- + "s后重发";
	                that.timer=setTimeout(function(){
	                    that.smsCodeCount(count)
	                },1000)
	            }
			},
			// 登录按钮
			submitBtnClickFun:function(){
				var that=this;
				// this.$store.dispatch('isShowTips', true);
				this.$store.commit('setShowTips',true)
				this.$store.commit('setShowTipsContent','1111')
			}
	
		},
		components : {
            nvTips
        }
	}
	
</script>
<style lang="sass" scoped>
	@import '../assets/scss/login.scss';
</style>