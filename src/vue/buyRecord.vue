<template>
	<div id="buyRecord">
		<div class="main">
			<!-- 菜单 -->
		    <nv-menu></nv-menu>
		    <!-- 主要内容 -->
		    <div class="buy-record-content">
		        <dl>
		            <dt v-for="(item,index) in stockRcordData">
		                <span :class="['icon-flag',switchStockClassFun(item.type)]" v-text="switchStockTextFun(item.type)"></span>
		                <div class="stock-title"><span>{{item.name}}</span><em class="ft-ygm">{{item.code}}</em></div>
		                <div :class="['stock-del',{'current':item.show}]">
		                    <i :class="['icon-more',{'current':item.show}]" v-tap="{methods:iconMoreClickFun,index:index,item:item}"></i>
		                    <div class="del-tit">申购价格：<em class="ft-ygm">{{item.price}}</em></div>
		                    <div v-show="item.show">
			                    <p><em>(8-22)</em> 未查询到中签记录</p>
			                    <p><em>(8-22)</em> 未查询到中签记录</p>
			                    <p><em>(8-22)</em> 未查询到中签记录</p>
		                    </div>
		                </div>
		            </dt>
		            <!-- <dt v-for="(item,index) in stockRcordData">
		                <span :class="['icon-flag',switchStockClassFun(item.type)]" v-text="switchStockTextFun(item.type)"></span>
		                <div class="stock-title"><span>{{item.name}}</span><em>{{item.code}}</em></div>
		                <div :class="['stock-del',{'current':index==dataFlag}]">
		                    <i :class="['icon-more',{'current':index==dataFlag}]" v-tap="{methods:iconMoreClickFun,index:index,item:item}"></i>
		                    <div class="del-tit">申购价格：{{item.price}}</div>
		                    <div>
			                    <p><em>(8-22)</em> 未查询到中签记录</p>
			                    <p><em>(8-22)</em> 未查询到中签记录</p>
			                    <p><em>(8-22)</em> 未查询到中签记录</p>
		                    </div>
		                </div>
		            </dt> -->
		            <!-- <dt>
		                <span class="icon-flag bg-blue">已申购</span>
		                <div class="stock-title"><span>新能源股</span><em>743211</em></div>
		                <div class="stock-del">
		                    <i class="icon-more"></i>
		                    <div class="del-tit">申购价格：145.00</div>
		                </div>
		            </dt>
		            <dt>
		                <span class="icon-flag bg-blue">已申购</span>
		                <div class="stock-title"><span>新能源股</span><em>743211</em></div>
		                <div class="stock-del">
		                    <i class="icon-more"></i>
		                    <div class="del-tit">申购价格：145.00</div>
		                </div>
		            </dt>
		            <dt>
		                <span class="icon-flag bg-red">中签已缴款</span>
		                <div class="stock-title"><span>新能源股</span><em>743211</em></div>
		                <div class="stock-del current">
		                    <i :class="['icon-more',hideDetail?'current':'']" v-tap="{methods:iconMoreClickFun}"></i>
		                    <div class="del-tit">申购价格：145.00</div>
		                    <div v-if="hideDetail">
			                    <p><em>(8-22)</em> 未查询到中签记录</p>
			                    <p><em>(8-22)</em> 未查询到中签记录</p>
			                    <p><em>(8-22)</em> 未查询到中签记录</p>
		                    </div>
		                </div>
		            </dt>
		            <dt>
		                <span class="icon-flag bg-blue">已申购</span>
		                <div class="stock-title"><span>新能源股</span><em>743211</em></div>
		                <div class="stock-del">
		                    <i class="icon-more"></i>
		                    <div class="del-tit">申购价格：145.00</div>
		                    <p><em>(8-22)</em> 未查询到中签记录</p>
		                    <p><em>(8-22)</em> 未查询到中签记录</p>
		                    <p><em>(8-22)</em> 未查询到中签记录</p>
		                </div>
		            </dt> -->
		        </dl>
		        <div class="more-text">以上为最近30天内的记录</div>
		    </div>
		</div>
	</div>
</template>
<script>
	var nvMenu=require('../components/menu.vue');
	module.exports={
		data:function(){
			return{
				hideDetail:false,
				dataFlag:null,
				stockDataTypeText:['已申购','中签已缴款'],
				stockDataTypeClass:['bg-blue','bg-red'],
				stockRcordData:[{
					name:'新能源股',
					code:'743211',
					type:'0',
					price:'1121',
					show:false,
					detail:['(8-22) 未查询到中签记录','(8-22) 未查询到中签记录','(8-22) 未查询到中签记录']
				},{
					name:'新能源股',
					code:'743211',
					type:'1',
					price:'1121',
					show:false,
					detail:['(8-22) 未查询到中签记录','(8-22) 未查询到中签记录','(8-22) 未查询到中签记录']
				},{
					name:'新能源股',
					code:'743211',
					type:'0',
					price:'1121',
					show:false,
					detail:['(8-22) 未查询到中签记录','(8-22) 未查询到中签记录','(8-22) 未查询到中签记录']
				},{
					name:'新能源股',
					code:'743211',
					type:'0',
					price:'1121',
					show:false,
					detail:['(8-22) 未查询到中签记录','(8-22) 未查询到中签记录','(8-22) 未查询到中签记录']
				},{
					name:'新能源股',
					code:'743211',
					type:'0',
					price:'1121',
					show:false,
					detail:['(8-22) 未查询到中签记录','(8-22) 未查询到中签记录','(8-22) 未查询到中签记录']
				},{
					name:'新能源股',
					code:'743211',
					type:'0',
					price:'1121',
					show:false,
					detail:['(8-22) 未查询到中签记录','(8-22) 未查询到中签记录','(8-22) 未查询到中签记录']
				},{
					name:'新能源股',
					code:'743211',
					type:'0',
					price:'1121',
					show:false,
					detail:['(8-22) 未查询到中签记录','(8-22) 未查询到中签记录','(8-22) 未查询到中签记录']
				},{
					name:'新能源股',
					code:'743211',
					type:'0',
					price:'1121',
					show:false,
					detail:['(8-22) 未查询到中签记录','(8-22) 未查询到中签记录','(8-22) 未查询到中签记录']
				}]
			}
		},
		methods:{
			iconMoreClickFun:function(params){
				var that=this;
				params.item.show=!params.item.show
				// this.dataFlag=params.index;
				// this.hideDetail = !this.hideDetail;
				// that.hideDetail?that.hideDetail=false:that.hideDetail=true
			},
			switchStockTextFun:function(msg){
				return this.stockDataTypeText[parseInt(msg)]
			},
			switchStockClassFun:function(msg){
				return this.stockDataTypeClass[parseInt(msg)]
			}
		},
		components:{
			nvMenu
		}
	}
</script>
<style lang="sass" scoped>
	@import '../assets/module/buyRecord/buyRecord.scss';
</style>