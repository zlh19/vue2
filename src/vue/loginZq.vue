<template>
	<div id="loginZq">
		<div class="main">
			<div class="p-main">
		        <!-- logo -->
		        <p class="top-logo"><i class="icon-logo"></i></p>
		        <!-- 手机号码 -->
		        <div class="ipt-gp">
		            <i class="icon-ipt icon-tel"></i>
		            <input type="number" class="ipt-text" placeholder="请输入资金账号">
		        </div>
		        <!-- 密码 -->
		        <div class="ipt-gp">
		            <i class="icon-ipt icon-pwd"></i>
		            <input type="password" class="ipt-text" placeholder="请输入交易密码">
		        </div>
		        <!-- 按钮 -->
		        <button class="btn-submit" v-tap="{methods:submitBtnClickFun}">登录</button>
		        <!-- 详情 -->
		        <div class="p-detail"><i class="icon-qun"></i><span>交易模块由<a href="javascript:;">恒泰证券</a>官方发布，保障交易安全</span></div>
		        <!-- 链接 -->
		        <router-link to="/loginZq" class="link-bottom"><em>万2.5佣金·免费开户</em><i class="icon-next"></i></router-link>
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

			}
		},
		methods:{
			// 登录按钮
			submitBtnClickFun:function(){
				var that=this;
				
				that.$root.$emit("isShow", true);
				that.$root.$emit("tipsText", '错误信息')
			}
	
		},
		components : {
            nvTips
        }
	}
</script>
<style lang="sass" scoped>
	@import '../assets/module/loginZq/loginZq.scss';
</style>