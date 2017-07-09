<template>
  <div class="playing">
    <div class="content">
      <div class="back clearfix" @click='goBack'>
        <em></em>
        <div class="tt">{{cur_item.song_name}}</div>
      </div>
      <section>
        <p>假装 music is playing...</p>
      </section>
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
    goBack(){
      this.$router.push({'path':'/'})
    }
  },
  updated(){

  }
}
</script>


<style scoped lang='less'>

.content{
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(200,200,200,.9);
  z-index: 10000000000;
  .back{
    display: flex;
    background-color: rgba(249,249,249,.5);
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 4rem;
    z-index: 100000000001;
    color: #000;

    em{
      width: 4.2rem;
      height: 4.2rem;
      margin-top: -.2rem;
      margin-left: -.2rem;
      float: left;
      position: relative;
      &:after{
        content: '';
        display: block;
        width: 1.6rem;
        height: 1.6rem;
        border-left: #444 1px solid;
        border-bottom: #444 1px solid;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -.8rem 0 0 -.8rem;
      }

    }
    .tt{
      width: 100%;
      height: 4rem;
      line-height: 4rem;
      color: #262b2f;
      padding: 0 3rem;
      overflow: hidden;
      display: block;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
      -webkit-box-sizing: border-box;
      margin-left: -4rem;
      font-size: 3rem;
    }

  }
  section{
    width: 100%;
    height: 100%;
    display: table;
    background-color: rgba(0,0,0,.5);
    p{
      width: 100%;
      font-size: 30px;
      color: #fff;
      font-weight: bold;
      display: table-cell;
      vertical-align: middle;
      text-align: center;
    }
  }
}

</style>
