<template>
  <div class="playing">
    <div class="content">
      <div class="back">
        
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
      return (store.state.cur_item)
    }
  },
  methods:{
    
  },
  updated(){

  }
}
</script>


<style scoped lang='less'>
.content{
  position: absolute;
  left: -10000px;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #aaa;
  z-index: 0;

}

</style>
