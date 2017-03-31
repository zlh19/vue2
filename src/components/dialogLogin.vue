<template>
	<div id="dialogLogin">
		<div class="ygm-dialog" v-if="isShowDialogLogin">
	        <div class="dialog-user-main">
	            <div class="dialog-user-text">
	                <p>已登录恒泰证券</p>
	                <p>资金账号：{{userAccount}}</p>
	            </div>
	            <div class="dialog-user-btn-group">
	                <button class="dialog-user-btn" v-tap="{methods:cancelLoginOutBtn}">取消</button>
	                <button class="dialog-user-btn user-btn-red" v-tap="{methods:loginOutBtn}">退出</button>
	            </div>
	        </div>
	    </div>
	</div>
</template>
<script>
	module.exports={
		data:function(){
			return {
				isShowDialogLogin:false,
				userAccount:'',
			}
		},
		mounted:function(){
			var that=this;
			that.$root.$on("isShowDialogLogin",function(msg){
				that.isShowDialogLogin=msg
			});
		},
		methods:{
			cancelLoginOutBtn:function(){
				this.isShowDialogLogin=false;
			},
			loginOutBtn:function(){
				this.isShowDialogLogin=false;
			}
		}
	}
	
</script>
<style lang="sass">
	@import '../assets/scss/dialogLogin.scss';
</style>