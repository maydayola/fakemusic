<template>
	<div>
		<detail_list :list="list"></detail_list>
		<play></play>
	</div>
</template>

<script>
	import play from '../../play/play.vue'
	import detail_list from '../../detail_list/detail_list.vue'
	
	export default {
		data(){
			return {

				list:[]
			}
		},
		created(){
			var vm = this;
			vm.$http.get('/static/json/paihangbang.json')
					.then( res => {
						vm.list = res.data
						//console.log(res.body);
					})
		},
		components:{
			play,detail_list
		},

		computed:{
		    
		},
		mounted(){
			
		}
	}
</script>

<style scoped lang="less">



</style>