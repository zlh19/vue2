<template>
	<div>
		<transition name="fade" class="router"> 
			<router-view class="r"></router-view>
	 	</transition> 
		<!-- <router-view></router-view> -->
	</div>
</template>
<style lang="sass" scoped>
	@import './public/css/animate.scss';
</style>