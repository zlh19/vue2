<template>
	<div id="loginEnter">
		<div class="main">
			<div class="btn-group">
			<div v-tap="{methods:loginLink}" class="link-btn">已有账户 登录</div>
			</div>
		</div>
	</div>
</template>
<script>
	module.exports={
		data:function(){
			return {

			}
		},
		methods:{
			loginLink:function(){
				this.$root.push('/login')
			}
		}
	}
</script>
<style lang="sass" scoped>
	@import '../assets/scss/loginEnter.scss';
</style>