<template>
	<div id="buyStock">
		<div class="main">
			<!-- 菜单 -->
			 <nv-menu></nv-menu>
		    <!-- 头部日期 -->
		    <div class="buy-stock-date">
		        <i class="icon-page icon-prev"></i>
		        <div class="date-box">
		            <ul class="clearfix">
		                <li v-for="(item,index) in dateListData" :class="{'selected':dateItemFlag==index}" v-tap="{methods:dateBoxItemTap,index:index,item:item}">
		                    <h4 class="date-week">{{item.week}}</h4>
		                    <div class="date-number"><em class="ft-ygm">{{item.number}}</em></div>
		                    <p class="date-icon"><i :class="changeDateClass(item.icon)"></i></p>
		                </li>
		            </ul>
		        </div>
		        <i class="icon-page icon-next"></i>

		        <!-- 下拉信息 -->
		        <div class="date-stock-list" v-if="dateStockList">
		        	<div class="stock-box" v-if="dateHasData">
						<dl>
		                    <dt v-for="item in stockListData">
		                        <i :class="changeStockNameClass(item.type)"></i>
		                        <span class="stock-name">{{item.name}}</span><em class="stock-number ft-ygm">{{item.number}}</em>
		                        <span :class="['stock-status',{'stock-white':item.type==1}]">{{item.type}}</span>
		                    </dt>
		                </dl>
		            </div>
		            <!-- 当日无内容 -->
		            <p class="stock-null" v-else="dateNoData">当日无新股</p>
		            <div class="date-stock-close"><i class="stock-icon" v-tap="{methods:dateStockListClose}"></i></div>
		        </div>
		    </div>
		    <!-- 错误提示 -->
		    <div class="code-error-infor" v-if="codeErrorInfor">您当前沪深两市额度均为零。<u>查看原因</u><i class="error-close" v-tap="{methods:closeErrorInforFun}"></i></div>
		    <!-- 提醒 -->
		    <div class="code-infor-msg" v-if="codeInforMessage">恭喜！电魂网络成功中签，请及时缴款。</div>
		    <!-- 头部标题 -->
		    <div class="buy-stock-code-tit">
		        <ul class="clearfix">
		            <li>
		                <span class="tit-name">沪市</span>
		                <span class="tit-code"><em class="ft-ygm">4000</em>股</span>
		            </li>
		            <li>
		                <span class="tit-name">深市</span>
		                <span class="tit-code"><em class="ft-ygm">2500</em>股</span>
		            </li>
		        </ul>
		    </div>
		    <!-- 主要内容 -->
		    <div class="buy-stock-content">
		        <ul class="clearfix">
		            <li>
		            	<router-link to="/buyDay">
			                <em class="ft-ygm">2</em>
			                <span>今日可申购</span>
		                </router-link>
		            </li>
		            <li>
		                <em class="clr-a9a ft-ygm">0</em>
		                <span>已申购</span>
		            </li>
		            <li>
		                <em class="clr-a9a ft-ygm">0</em>
		                <span>未成功</span>
		            </li>
		        </ul>
		        <!-- 为空 -->
		        <!-- <div class="cont-null-text">今日无新股</div> -->
		    </div>
		    <!-- 按钮 -->
		    <button class="submit-btn" :disabled="submitBtnDisabled">一键申购</button>


		    <!-- 一键申购  弹出层 -->
		    <div class="ygm-dialog" v-if="buyDialog">
		        <div class="dialog-buy-main">
		            <i class="dialog-icon-warn"></i>
		            <div class="dialog-buy-text">
		                <p>新股申购开始时间为</p>
		                <p>沪市 09:30，深市 09:15</p>
		            </div>
		            <p class="dialog-buy-infor">还未到申购时间，建议您09:30以后进行操作，避免出现申购废单。</p>
		            <div class="dialog-buy-btn-group">
		                <!-- <button class="dialog-buy-btn buy-btn-red buy-btn-total">我再等等</button> -->
		                <button class="dialog-buy-btn buy-btn-red">我再等等</button>
		                <button class="dialog-buy-btn buy-btn-rg">继续申购</button>
		            </div>
		        </div>
		    </div>


		    <!-- 申购成功 -->
		    <div class="ygm-dialog" v-if="buySuccessDialog">
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
	</div>
</template>
<script>
	var nvMenu=require('../components/menu.vue');
	module.exports={
		data:function(){
			return{
				// 买入弹出层
				buyDialog:false,
				// 申购成功弹出层
				buySuccessDialog:false,
				// 日期列表
				dateStockList:false,
				dateHasData:false,
				dateNoData:false,
				// 按钮disabled
				submitBtnDisabled:false,
				// 错误信息
				codeErrorInfor:false,
				// 信息提示
				codeInforMessage:false,
				// 日期flag
				dateItemFlag:null,
				dateListIcon:['icon-ok','icon-warn','icon-pointer'],
				stockNameIcon:['icon-shen','icon-hu'],
				stockListData:[{
					name:'井神股份',
					number:'11',
					status:'没中',
					type:'1'
				},{
					name:'井神股份',
					number:'11',
					status:'没中',
					type:'1'
				},{
					name:'井神股份',
					number:'11',
					status:'没中',
					type:'1'
				},{
					name:'井神股份',
					number:'11',
					status:'没中',
					type:'1'
				},{
					name:'井神股份',
					number:'11',
					status:'没中',
					type:'0'
				}],
				dateListData:[{
					week:'一',
					number:15,
					icon:'0'
				},{
					week:'二',
					number:16,
					icon:'1'
				},{
					week:'三',
					number:17,
					icon:'2'
				},{
					week:'四',
					number:18,
					icon:'2'
				},{
					week:'五',
					number:19,
					icon:'2'
				}]
			}
		},
		methods:{
			// 关闭错误信息按钮
			closeErrorInforFun:function(){
				this.codeErrorInfor=false;
			},
			// 日期列表关闭
			dateStockListClose:function(){
				this.dateStockList=false;
				this.dateItemFlag=null;
			},
			// 日历选中
			dateBoxItemTap:function(params){
				this.dateItemFlag=params.index;
				this.dateStockList=true;
				this.dateHasData=true;
			},
			changeDateClass:function(iconNum) { 
				return this.dateListIcon[parseInt(iconNum)] 
			},
			changeStockNameClass:function(iconNum){
				return this.stockNameIcon[parseInt(iconNum)] 
			}
		},
		components:{
			nvMenu
		}
	}
</script>
<style lang="sass" scoped>
	@import '../assets/scss/buyStock.scss';
</style>