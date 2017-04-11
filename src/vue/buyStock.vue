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
		        <!-- 为空 -->
		        <!-- <div class="cont-null-text">今日无新股</div> -->
		    </div>
		    <!-- 按钮 -->
		    <button class="submit-btn" :disabled="submitBtnDisabled">提交</button>
		    <!-- 申购成功 -->
		    
		</div>
	</div>
</template>
<script>
	var nvMenu=require('../components/menu.vue');
	var nvDate=require('../components/date.vue');
	var nvDialog=require('../components/dialog.vue');
	module.exports={
		data:function(){
			return{
				// 按钮disabled
				submitBtnDisabled:false,
				// 日期flag
				dateListIcon:['icon-ok','icon-warn','icon-pointer']
				
			}
		},
		methods:{
			// 关闭错误信息按钮
			closeErrorInforFun:function(){
				this.codeErrorInfor=false;
			},
			changeStockNameClass:function(iconNum){
				return this.stockNameIcon[parseInt(iconNum)] 
			}
		},
		components:{
			nvMenu,
			nvDate,
			nvDialog
		}
	}
</script>
<style lang="sass" scoped>
	@import '../assets/module/buyStock/buyStock.scss';
</style>