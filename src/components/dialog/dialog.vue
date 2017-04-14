<template>
	<div id="dialog">
		<div class="ygm-dialog" v-if="isShowDialog">
	        <div class="dialog-buy-other-main">
	            <div class="dialog-buy-other-cont">
	            	<dl>
	            		<dt v-for="(item,index) in inforList">
	            			<div :class="['dialog-dt',item.isFlag==0?'success':'error']"><span>{{item.name}}</span><em>{{item.isFlag | switchName }}</em></div>
	            			<p class="dialog-dt-infor" v-if="item.isFlag!=0?true:false">{{item.content}}</p>
	            		</dt>
	                </dl>
	            </div>
	            <button class="dialog-buy-other-btn" v-tap="{methods:dialogBtnSucTap}">确定</button>
	        </div>
	    </div>
	</div>
</template>
<script>
	module.exports={
		props:['inforList'],
		data:function(){
			return {
			}
		},
		filters:{
			switchName:function(data){
				var arr=['成功','失败']
				return arr[data]
			}
		},
		computed:{

			isShowDialog:function(){
				return this.$store.state.isShowDialog
			}
		},
		mounted:function(){
			this.$nextTick(function(){

			})
		},
		methods:{
			dialogBtnSucTap:function(){
				this.$store.dispatch('aShowDialog',false)
			}
		}
	}
	
</script>
<style lang="sass">
	@import 'dialog.scss';
</style>