<template>
  <div id="app">
    <div class="header">
      <a href="@" class="logo"></a>
      <a href="@" class="down"></a>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
    <vplaying></vplaying>
  </div>
</template>

<script>
require('./common/reset.css')
import vplaying from "./components/playing/playing.vue"
export default {
  name: 'app',

  components:{
    vplaying
  }
}
</script>

<style lang='less'>
html{font-family: sans-serif;}
#app{
  position: relative;
  .header{
      width: 100%;
      height: 8rem;
      background-color: #FF5E00;
      position: relative;
      z-index: 4;
      top: 0;
      left: 0;
      a.logo{
        width: 16rem;
        margin-left: 1rem;
        margin-top: 2.4rem;
        height: 3.5rem;
        display: block;
        float: left;
        background: url(./source/top.png) no-repeat;
        background-size: contain;
      }
      a.down{
        width: 9.8rem;
        height: 8rem;
        display: block;
        background: url(./source/top02.png) no-repeat;
        background-size: contain;
        background-position: center;
        position: absolute;
        right: 1rem;
        top: 0;
      }
  }


}
</style>
