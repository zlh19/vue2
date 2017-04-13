<template>
	<div id="buyRecord">
		<div class="main">
			<!-- 菜单 -->
		    <nv-menu></nv-menu>
		    <!-- 主要内容 -->
		    <div class="buy-record-content">
		        <dl>
		            <dt v-for="(item,index) in resData.recordListData">
		                <span :class="['icon-flag',switchStockClassFun(item.type)]" v-text="switchStockTextFun(item.type)"></span>
		                <div class="stock-title"><span>{{item.name}}</span><em class="ft-ygm">{{item.number}}</em></div>
		                <div :class="['stock-del',{'current':item.isShow}]">
		                    <i :class="['icon-more',{'current':item.isShow}]" v-tap="{methods:iconMoreClickFun,index:index,item:item}"></i>
		                    <div class="del-tit"  v-tap="{methods:iconMoreClickFun,index:index,item:item}">价格：<em class="ft-ygm">{{item.price}}</em></div>
		                    <div v-show="item.isShow">
			                    <p><em>(8-22)</em> 记录一</p>
			                    <p><em>(8-22)</em> 记录二</p>
			                    <p><em>(8-22)</em> 记录三</p>
		                    </div>
		                </div>
		            </dt>
		        </dl>
		    </div>
		</div>
	</div>
</template>
<script>
	var nvMenu=require('../components/menu.vue'),
		axios=require('axios');
	module.exports={
		data:function(){
			return{
				stockDataTypeText:['成功','进行中'],
				stockDataTypeClass:['bg-blue','bg-red'],
				resData:{
					recordListData:[]
				}
				
			}
		},
		mounted:function(){
			this.$nextTick(function(){
				var that=this;
				// 获取数据
				axios.get('/json/record.json')
				  	.then(function (res) {
				  		var resData=res.data;
				  		var switchRecordData=that.switchRecordDataFun(resData.recordListData)
				  		that.resData.recordListData=switchRecordData
				  		
				  	})
				  	.catch(function (error) {
						
				  	})
			})
		},
		methods:{
			// 数据转化
			switchRecordDataFun:function(data){
				var dataList=data;
				var that=this;
				dataList.forEach(function(item,index){
					that.$set(item,'isShow',false);
				})
				return dataList
			},
			// 点击事件
			iconMoreClickFun:function(params){
				var that=this;
				params.item.isShow=!params.item.isShow
			},
			// 修改样式
			switchStockTextFun:function(msg){
				return this.stockDataTypeText[parseInt(msg)]
			},
			// 添加样式
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