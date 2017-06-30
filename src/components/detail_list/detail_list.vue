<template>
	<div class="detail-list">
		<ul>
			<template v-for="(item,index) in list">

				<template v-if="item.type=='new_list'">
					<li :id="item.id" class="line" :class="item.state" @click="changeClass(index)">
						<p class="song-name">{{item.song_name}}</p>
						<p class="singer-name">{{item.singer}}</p>
					</li>					
				</template>
				<template v-else>
					<li :id="item.id" class="line" >
						<a href="/">
							<div class="next"></div>
							<img v-if="item.avatar" :src="item.avatar" alt="">
							<p v-if="item.type=='search_hot_list'" class="index" :class="index <=2? 'hot':''">{{index+1}}</p>
							<p class="title">{{item.name}}</p>
						</a>
					</li>
				</template>
			</template>

		</ul>
	</div>
	
</template>

<script>
	import store from '../../vuex/store.js'
	import { mapActions } from 'vuex'

	export default {
		data(){
			return {

			}
		},
		store:store,
		props:['list'],
		methods:{
			changeClass(index){
				var vm = this;
				for (var i = 0; i < vm.list.length; i++) {
						vm.list[i]['state']='';
				}
				vm.list[index]['state'] = 'current';
				

				vm.changeItem(vm.list[index])
				//console.log(store.state.cur_item + 'from new');				
			},
			...mapActions({
		      changeItem: 'CHANGE_ITEM' // 映射 this.changeItem() 为 this.$store.dispatch('CHANGE_ITEM')
		    })
		    
		},
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
	>a{text-decoration: none;}
	.next{
	    content: "";
	    float: right;
	    margin-top: 1.6rem;
	    border: .1rem solid gray;
	    border-width: .1rem 0 0 .1rem;
	    width: 1rem;
	    height: 1rem;
	    box-sizing: border-box;
	    transform-origin: 33.3% 33.3%;
	    transform: rotate(135deg);
	}
	img{
		display: block;
	    width: 4rem;
	    height: 4rem;
	    margin-right: 1.2rem;
	    float: left;
	}
	.title{
		line-height: 4rem;
	    margin: 0 3rem 0 0;
	    font-size: 1.6rem;
	    font-weight: 400;
	    color: #000;
	    overflow: hidden;
	    display: block;
	}
	.index{
		float: left;
	    font-size: 1.4rem;
	    width: 3rem;
	    margin-left: -1.5rem;
	    padding-right: 1rem;
	    height: 3.4rem;
	    line-height: 3.4rem;
	    text-align: right;
	    font-style: italic;
	    &.hot{
	    	color: #fe6923;
	    }
	}

	}
}
	


</style>