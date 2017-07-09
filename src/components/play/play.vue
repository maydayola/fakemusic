<template>
<div v-if='cur_item' class="play" @click='goPlaying'>
  <div class="pic">
    <img src="./pic.jpg"  alt="">
  </div>
  <div class="content">
    <div class="info">
      <div class="name">{{cur_item.song_name}}</div>
      <div class='art'>{{cur_item.singer}}</div>
      <div class="control"> 
        
      </div>
    </div>
  </div>
</div>

</template>

<script>
import store from '../../vuex/store.js'

export default {
  data () {
    return {
      
    }
  },
  store:store,
  computed:{
    cur_item(){
      var vm = this;
      
      return (store.state.cur_item)
    }
  },
  methods:{
    goPlaying(){
      this.$router.push({ path:'/playing' })
    }
  },
}
</script>


<style scoped lang='less'>
.play{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
  .pic{
    width: 5rem;
    height: 5rem;
    padding: .5rem;
    float: left;
  }
  .content{
    padding: .5rem;
    height: 5rem;
    background-color: rgba(0,0,0,.5);
    position: relative;
    .name{
      font-size: 1.6rem;
      color: #fff;

    }
    .art{
      font-size: 1.4rem;
      color: #fff;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: 2.4rem;
    }
  }
}

</style>
