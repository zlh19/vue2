<template>
	<div id="countDown">
		<button class="code-btn" :disabled="disabledButton" v-tap="{methods:codeBtnClickFun}" >{{countDownText}}</button>
	</div>
</template>
<script>
	module.exports={
		props:['btnText','btnTimer'],
		data:function(){
			return{
		        countDownText:'获取验证码',
		        countDownTime:59
			}
		},
		mounted:function(){
			this.$nextTick(function(){
				this.countDownText=this.btnText || this.countDownText;
				this.countDownTime=this.btnTimer || this.countDownTime ;
			})
		},
		computed:{
			disabledButton:function(){
				return this.$store.state.countDownDisabled
			}
		},
		methods:{
			// 倒计时点击事件
			codeBtnClickFun:function(){
				var countDownTime=this.countDownTime
				this.$store.dispatch('aCountDownIsTap',true)
				this.smsCodeCount(countDownTime);
			},
			smsCodeCount:function(count){
				var that=this;
				if( count == 0 ){
	                that.countDownText="获取验证码";
	                this.$store.dispatch('aCountDownIsTap',false)
					this.$store.dispatch('aCountDownDisabled',false)
	            } else {
					this.$store.dispatch('aCountDownDisabled',true)
	            	that.countDownText= count-- + "s后重发";
	                that.timer=setTimeout(function(){
	                    that.smsCodeCount(count)
	                },1000)
	            }
			}
		}
	}
	
</script>
<style lang="sass">
	@import 'countDown.scss';
</style>