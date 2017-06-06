<template>
	<div class="search">
		<div class="s-area">
			<div class="kip">
				<input class="key-i" type="text" placeholder="输入歌曲、专辑、艺人名搜索">
				<a class="btn-search">搜 索</a>
			</div>
		</div>
		<div class="area">
			<p class="key">今日热</p>
			<detail_list :list="list"></detail_list>
		</div>
		<play></play>
	</div>
</template>

<script>
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
			vm.$http.get('/static/json/search_hot_list.json')
					.then( res => {
						vm.list = res.body
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
	.search{
		.area{background-color: #d9d9d9;}
		.s-area{
			padding: 1rem;
			position: relative;
		}
		.key{
			font-weight: 400;
		    font-size: 1.4rem;
		    margin: 0;
		    padding: 1rem;
		}
		.kip{
			border-radius: .5rem;
		    -webkit-border-radius: .5rem;
		    background-color: #f4f5f7;
		    border: #d9d9d9 .1rem solid;
		    margin-right: 6rem;
			.key-i{
				box-sizing: border-box;
			    -webkit-box-sizing: border-box;
			    width: 100%;
			    outline: 0;
			    font-size: 1.3rem;
			    padding: .2rem 1rem .2rem 2rem;
			    height: 3rem;
			    border: 0;
			    background-color: rgba(255,255,255,0);
			   
			    -webkit-appearance: textfield;
			}
			    &:after{
			    	content: '';
				    display: block;
				    width: 1.2rem;
				    height: 1.2rem;
				    background-image: url(s.png);
				    background-repeat: no-repeat;
				    background-size: 1.2rem 1.2rem;
				    position: absolute;
				    left: 1.5rem;
				    top: 50%;
				    margin-top: -.6rem;
			    }
			 .btn-search{
			 	    position: absolute;
				    width: 5rem;
				    height: 3.2rem;
				    line-height: 3.2rem;
				    bottom: 1rem;
				    right: 1rem;
				    background-color: #fc9b0b;
				    background-image: linear-gradient(to bottom,#fda10d,#f77700);
				    font-size: 1.3rem;
				    text-align: center;
				    border: 0;
				    border-radius: .5rem;
				    -webkit-border-radius: .5rem;
				    color: #fff;
			 }
		}
	}


</style>