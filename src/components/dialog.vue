<template>
	<div id="dialog">
		<div class="ygm-dialog" v-if="isShowDialog">
	        <div class="dialog-buy-other-main">
	            <div class="dialog-buy-other-cont">
	                <!-- dt -->
	                <div class="dialog-dt success"><span>山东赫达</span><em>申购成功</em></div>
	                <div class="dialog-dt error"><span>山东赫达</span><em>申购已提交</em></div>
	                <p class="dialog-dt-infor">申购提交后未查询到状态，请稍后查询委托以确保没有废单产生</p>
	                <div class="dialog-dt error"><span>山东赫达</span><em>申购已提交</em></div>
	            </div>
	            <button class="dialog-buy-other-btn">确定</button>
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
	@import '../assets/widget/dialog/dialog.scss';
</style>