<template>
	<div id="buyDay">
		<div class="main">
			<header class="header">
		        <a href="javascript:history.go(-1)"><i class="icon-back"></i></a>
		        <span class="header-text">今日申购</span>
		        <a href="javascript:;"><i class="icon-help"></i></a>
		    </header>
		    <!-- 顶部内容 -->
		    <div class="buy-day-top">
		        <p class="top-tit">可申购额度</p>
		        <div class="top-infor">
		            <ul class="clearfix">
		                <li><span>沪市</span><em class="text-left">4000股</em></li>
		                <li><span class="text-right">深市</span><em>4000股</em></li>
		            </ul>
		        </div>
		    </div>
		    <section class="section">
		        <!-- 底部内容 -->
		        <div class="buy-day-content">
		            <p class="cont-tit">沪市</p>
		            <dl>
		                <dt>
		                    <input type="checkbox" class="checkbox" disabled>
		                    <div class="infor-code">
		                        <span class="code-name">山东赫达</span><em class="code-code">004412</em>
		                        <span class="code-text">已申购 <em class="code-num">4000</em> 股</span>
		                    </div>
		                    <div class="infor-other">
		                        <span class="code-price">价格:140.71</span>
		                        <span class="other-text">申购上限:<em class="other-num">118.71</em>万股</span>
		                    </div>
		                </dt>
		            </dl>
		        </div>
		        <div class="buy-day-content">
		            <p class="cont-tit">深市</p>
		            <dl>
		                <dt>
		                    <input type="checkbox" class="checkbox" checked>
		                    <div class="infor-code">
		                        <span class="code-name">山东赫达</span><em class="code-code">004412</em>
		                        <span class="code-text">已申购 <em class="code-num">4000</em> 股</span>
		                    </div>
		                    <div class="infor-other">
		                        <span class="code-price">价格:140.71</span>
		                        <span class="other-text">申购上限:<em class="other-num">118.71</em>万股</span>
		                    </div>
		                </dt>
		                <dt>
		                    <input type="checkbox" class="checkbox">
		                    <div class="infor-code">
		                        <span class="code-name">山东赫达</span><em class="code-code">004412</em>
		                        <span class="code-text">已申购 <em class="code-num">4000</em> 股</span>
		                    </div>
		                    <div class="infor-other">
		                        <span class="code-price">价格:140.71</span>
		                        <span class="other-text">申购上限:<em class="other-num">118.71</em>万股</span>
		                    </div>
		                </dt>
		                <dt>
		                    <input type="checkbox" class="checkbox">
		                    <div class="infor-code">
		                        <span class="code-name">山东赫达</span><em class="code-code">004412</em>
		                        <span class="code-text">已申购 <em class="code-num">4000</em> 股</span>
		                    </div>
		                    <div class="infor-other">
		                        <span class="code-price">价格:140.71</span>
		                        <span class="other-text">申购上限:<em class="other-num">118.71</em>万股</span>
		                    </div>
		                </dt>
		                <dt>
		                    <input type="checkbox" class="checkbox">
		                    <div class="infor-code">
		                        <span class="code-name">山东赫达</span><em class="code-code">004412</em>
		                        <span class="code-text">已申购 <em class="code-num">4000</em> 股</span>
		                    </div>
		                    <div class="infor-other">
		                        <span class="code-price">价格:140.71</span>
		                        <span class="other-text">申购上限:<em class="other-num">118.71</em>万股</span>
		                    </div>
		                </dt>
		            </dl>
		        </div>
		    </section>
		    <!-- 底部按钮 -->
		    <button class="submit-btn" v-tap="{methods:submitBtnClickFun}">一键申购</button>
		</div>
	</div>
</template>
<script>
	module.exports={
		methods:{
			submitBtnClickFun:function(){
			}
		}
		
	}
</script>
<style lang="sass" scoped>
	@import '../assets/scss/buyDay.scss';
</style>