<template>
	<div id="date">
		<div class="buy-stock-date">
	        <i class="icon-page icon-prev"></i>
        	<!-- 日期列表 -->
	        <swiper :options="swiperOption" ref="mySwiper">
				<!-- 幻灯内容 -->
				<swiper-slide v-for="(items,index) in resData.dateListData">
				<div class="date-box">
				    <ul class="clearfix">
				        <li v-for="(item,index) in items">
				            <h4 class="date-week">{{item.weekDay}}</h4>
				            <div class="date-number"><em class="ft-ygm">{{item.date}}</em></div>
				            <p class="date-icon"><i :class="changeDateClass(item.icon)"></i></p>
				        </li>
				    </ul>
				</div>
			   	</swiper-slide>
			</swiper>
	        <i class="icon-page icon-next"></i>
	    </div>
	</div>
</template>
<script>
	var swiper=require('vue-awesome-swiper').swiper,
	 	swiperSlide=require('vue-awesome-swiper').swiperSlide,
	 	axios=require('axios');
	module.exports={
		data:function(){
			var that=this;
			return {
				// 切换swiper
				swiperOption: {
					name: 'currentSwiper',
					autoplay:0,
					initialSlide:2,
					loop:false,
					pagination:'.swiper-pagination',
					onSlideChangeEnd:function(swiper){
						
					}
		        },
		        dateListIcon:['icon-ok','icon-warn','icon-pointer'],
		        resData:{
		        	dateListData:[]
		        }
				
			}
		},
		mounted:function(){
			this.$nextTick(function(){
				
				// 渲染页面
				this.renderDateFun();
			})
		},
		methods:{
			renderDateFun:function(){
				var that=this;
				// 获取数据
				axios.get('/json/date.json')
				  	.then(function (res) {
				  		var resData=res.data
				  		that.resData.dateListData=resData.dateListData
				  	})
				  	.catch(function (error) {
				    	
				  	})
			},
			changeDateClass:function(iconNum) { 
				return this.dateListIcon[parseInt(iconNum)] 
			}
		},
		components:{
			swiper,
    		swiperSlide
		}

	}
</script>
<style lang="sass">
	@import '../assets/widget/date/date.scss';
</style>