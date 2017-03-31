<template>
	<div id="menu">
		<div class="menu-title">
	        <i class="icon-user" v-tap="{methods:dialogShow}"></i>
	        <router-link to="/buyStock" :class="[this.$route.name=='buyStock'?'current':'','tit-link']">新股申购</router-link>
	        <router-link to="/buyRecord" :class="[this.$route.name=='buyRecord'?'current':'','tit-link']">申购记录</router-link>
	        <router-link to="/help"><i class="icon-help"></i></router-link>
	    </div>
	    <!-- 弹出层 -->
	    <nv-DialogLogin></nv-DialogLogin>
	</div>
</template>
<script>
	var nvDialogLogin=require('../components/dialogLogin.vue');
	module.exports={
		methods:{
			dialogShow:function(){
				this.$root.$emit('isShowDialogLogin',true)
			}
		},
		components:{
			nvDialogLogin
		}
	}
	
</script>
<style lang="sass">
	@import '../assets/scss/menu.scss';
</style>