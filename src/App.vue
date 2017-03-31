<template>
	<div>
		<!-- <transition name="fade" class="router"> 
			<router-view class="r"></router-view>
	 	</transition> --> 
		<router-view></router-view>
	</div>
</template>
<style lang="sass" scoped>
	.fade-enter-active, .fade-leave-active {
		-webkit-transition: all .3s ease;
		-webkit-transform: translateX(0px);
	}
	.fade-enter, .fade-leave-active {
		-webkit-transform: translateX(-100%);
		opacity: 0;
	}
	.router {
		width: 100%;
		/*transform: translateX(-300px);*/
		/*position: absolute;*/
		/*transition: all .9s cubiz-bezier(.55, 0, .1, 1);*/
	}
	.r {
		width: 100%;
		position: absolute;
		min-height:100%;
		z-index:2048;
	}
</style>