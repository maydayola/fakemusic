<template>
	<div class="new">
		<div class="carousel">
			<banner></banner>
		</div>
		<detail_list :list="list"></detail_list>
		<play></play>
	</div>
</template>

<script>
	import banner from '../banner/banner.vue'
	import play from '../../play/play.vue'
	import detail_list from '../../detail_list/detail_list.vue'
	
	export default {
		data(){
			return {

				list:''
			}
		},
		created(){
			var vm = this;
			vm.$http.get('/static/json/new_list.json')
					.then( res => {
						// console.log(res)
						vm.list = res.data
					})
		},
		components:{
			banner,play,detail_list
		},

		computed:{
		    
		},
		mounted(){
			
		}
	}
</script>

<style scoped lang="less">
.detail-list{
	.line{
		font-size: 12px;
		padding: 1rem;
		border-bottom: .1rem solid #e0e0e0;
		p{margin: 0;}
		.song-name{
			text-overflow:ellipsis;
			white-space: nowrap;
			font-size: 1.4rem;
			font-weight: normal;
		}
		.singer-name{
			font-size: 1.2rem;
			color: #afafb0;
			line-height: 1.5;
		}
		&.current{position: relative;}
		&.current:after {
		    content: '';
		    width: .2rem;
		    height: 100%;
		    background-color: #fa8e07;
		    position: absolute;
		    top: 0;
		    left: 0;
		}
	}
}
	


</style>