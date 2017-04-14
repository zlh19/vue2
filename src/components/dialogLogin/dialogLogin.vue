<template>
	<div id="dialogLoginOut">
		<div class="ygm-dialog" v-if="isShowDialogLogin">
	        <div class="dialog-user-main">
	            <div class="dialog-user-text">
	                <p>已登录</p>
	                <p>账号：{{userAccount}}</p>
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
				userAccount:'',
				isShowDialogLogin:false
			}
		},
		computed:{
			userAccount:function(){
				// return this.$store.state.userInfor.userAccount
			}
		},
		mounted:function(){
			var that=this;
			var userAccount=this.$cookie.get('zlhAccount');
			this.userAccount=userAccount

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
				this.$cookie.delete('zlhIsLogin');
				this.$router.push('/login');
				// this.$router.go(0)
			}
		}
	}
	
</script>
<style lang="sass">
	@import 'dialogLogin.scss';
</style>