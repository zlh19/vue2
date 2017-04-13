<template>
	<div id="buyStock">
		<div class="main">
			<!-- 菜单 -->
			<nv-menu></nv-menu>
		    <!-- 头部日期 -->
		    <nv-date></nv-date>
		    <!-- 主要内容 -->
		    <div class="buy-stock-content">
		        <ul class="clearfix">
		            <li>
		            	<router-link to="/buyDay">
			                <em class="ft-ygm">2</em>
			                <span>昨日</span>
		                </router-link>
		            </li>
		            <li>
		                <em class="clr-a9a ft-ygm">0</em>
		                <span>今日</span>
		            </li>
		            <li>
		                <em class="clr-a9a ft-ygm">0</em>
		                <span>明日</span>
		            </li>
		        </ul>
		    </div>
		</div>
	</div>
</template>
<script>
	var nvMenu=require('../components/menu.vue');
	var nvDate=require('../components/date.vue');
	module.exports={
		data:function(){
			return{
				// 按钮disabled
				submitBtnDisabled:false
			}
		},
		methods:{
			submitBtnTap:function(){
				this.$store.dispatch('aShowDialog',true)
			}
		},
		components:{
			nvMenu,
			nvDate
		}
	}
</script>
<style lang="sass" scoped>
	@import '../assets/module/buyStock/buyStock.scss';
</style>