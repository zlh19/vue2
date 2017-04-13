<template>
	<div id="login">
		<div class="main">
			<div class="p-main">
				<!-- 说明 -->
		        <div class="p-infor">
		            <p class="top-infor">进行手机号码注册认证，感谢您的配合。</p>
		        </div>
		        <!-- 手机号码 -->
		        <div class="ipt-gp">
		            <i class="icon-ipt icon-tel"></i>
		            <input type="tel" class="ipt-text" placeholder="请输入手机号" maxlength="11" v-model="userTel" @keyup="telInputKeyUp">
		        </div>
		        <!-- 验证码 -->
		        <div class="ipt-gp">
		            <i class="icon-ipt icon-code"></i>
		            <input type="tel" class="ipt-text" placeholder="验证码" maxlength="4" v-model="userCode" @keyup="inputKeyupFun">
		            <!-- 倒计时 -->
		            <count-down></count-down>
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
	var countDown=require('../components/countDown.vue')
	module.exports={
		data:function(){
			return{
				userTel:'',
				userCode:'',
				disabledSubmitBtn:true
			}
		},
		methods:{
			// 手机跳转
			telInputKeyUp:function(){
				var countDownStatus=this.$store.state.countDownIsTap;
				if(this.userTel.length==11&&countDownStatus==false){
					this.$store.dispatch('aCountDownDisabled',false)
				}else{
					this.$store.dispatch('aCountDownDisabled',true)
				}
				this.inputKeyupFun();
			},
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
			// 登录按钮
			submitBtnClickFun:function(){
				var that=this;

				if(that.userTel=='11111111111'&&that.userCode=='1111'){
					this.$cookie.set('zlhIsLogin',true,{ expires: '100Y' });
					this.$cookie.set('zlhAccount',that.userTel,{ expires: '100Y' });
					this.$router.push('/buyStock')
				}else{
					// 弹出层
					this.$store.dispatch('aSetShowTips',true)
					this.$store.dispatch('aSetShowTipsContent','帐号验证码全为1')
				}
				
			}
	
		},
		components : {
            nvTips,
            countDown
        }
	}
	
</script>
<style lang="sass" scoped>
	@import '../assets/module/login/login.scss';
</style>