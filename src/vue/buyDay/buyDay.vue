<template>
	<div id="buyDay">
		<div class="main">
			<header class="header">
		        <i class="icon-back" v-tap="{methods:backPage}"></i>
		        <span class="header-text">今日购买</span>
		        <a href="javascript:;"><i class="icon-help"></i></a>
		    </header>
		    <section class="section">
		        <!-- 底部内容 -->
		        <div class="buy-day-content">
		            <dl>
		                <dt v-for="(item,index) in resData.buyListData">
			                <i :class="['checkbox',{'checked':item.isChecked},{'disabled':item.isSelect}]" v-tap="{methods:checkboxTap,item:item}"></i>
		                    <div class="infor-code">
		                        <span class="code-name">{{item.name}}</span><em class="code-code">{{item.code}}</em>
		                        <span class="code-text"><em class="code-num">{{item.number}}</em></span>
		                    </div>
		                    <div class="infor-other">
		                        <span class="code-price">价格:{{item.price}}</span>
		                        <span class="other-text">最大:<em class="other-num">{{item.maxPrice}}</em></span>
		                    </div>

		                </dt>
		            </dl>
		        </div>
		    </section>
		    <!-- 底部按钮 -->
		    <button class="submit-btn" v-tap="{methods:submitBtnClickFun}" :disabled="submitDisabled">提交</button>
		</div>
		<nv-dialog :infor-list="resData.dialogData"></nv-dialog>
	</div>
</template>
<script>
	var axios=require('axios'),
		nvDialog=require('../../components/dialog/dialog.vue');
	module.exports={
		data:function(){
			return {
				submitDisabled:true,
				resData:{
					buyListData:[],
					dialogData:[]
				}
			}
		},
		mounted:function(){
			this.$nextTick(function(){
				// 获取数据
				this.getBuyInforFun()
			})
		},
		methods:{
			// 请求数据
			getBuyInforFun:function(){
				var that=this;

				axios.get('/json/buy.json')
				.then(function(res){
					var resData=res.data;
					var newBuyData=that.switchBuyDataFun(resData.buyListData)
					that.resData.buyListData=newBuyData;
					// that.resData.dialogData=resData.dialInfor;
				})
				.catch(function(error){

				})
			},
			// 数据转化
			switchBuyDataFun:function(data){
				var newData=data;
				var that=this;
				newData.forEach(function(item,index){
					that.$set(item,'isChecked',false)
				})
				return newData
			},
			// 点击事件
			checkboxTap:function(param){
				var item=param.item;
				if(!item.isSelect){
					item.isChecked=!item.isChecked;
					this.btnShowFun()
				}	
			},
			btnShowFun:function(){
				var hasSlected=this.hasSelectDataFun()
				if(hasSlected){
					this.submitDisabled=false
				}else{
					this.submitDisabled=true
				}
			},
			// 返回
			backPage:function(){
				this.$router.go(-1)
			},
			hasSelectDataFun:function(){
				var selsectData=this.setSelectDataFun();
				if(selsectData.length>0){
					return true
				}else{
					return false
				}
			},
			setSelectDataFun:function(){
				var arr=[];
				this.resData.buyListData.forEach(function(item,index){
					if(item.isChecked){
						var obj={}
						obj.name=item.name;
						if(item.type==1){
							obj.isFlag=1;
							obj.content='说明内容'
						}else{
							obj.isFlag=0;
							obj.content=''
						}
						arr.push(obj)
					}
				})
				return arr
			},
			// 按钮点击
			submitBtnClickFun:function(){
				var selectData=this.setSelectDataFun();
				this.resData.dialogData=selectData;
				this.$store.dispatch('aShowDialog',true)
			}
		},
		components:{
			nvDialog
		}
		
	}
</script>
<style lang="sass" scoped>
	@import 'buyDay.scss';
</style>