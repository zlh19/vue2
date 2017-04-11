<template>
	<div id="dialogTips">
		<div class="dialog-tips" v-show="showTips">
			<div class="dialog-tips-main">
				 <div class="msg-text"><span>{{tipsContent}}</span></div>
			</div>
		</div>
	</div>
</template>
<script>
	module.exports={
		computed:{
			showTips:function(){
				return this.$store.state.isShowTips;
			},
			tipsContent:function(){
				return this.$store.state.tipsContent;
			}
		}
	}
</script>
<style lang="sass">
	@import '../assets/widget/tips/tips.scss';
</style>