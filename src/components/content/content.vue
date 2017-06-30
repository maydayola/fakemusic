<template>
  <div class="content">
    
      <div class="nav" >
        <router-link class='item' to='/new' >新歌</router-link>
        <router-link class='item' to='/list'>排行榜</router-link>
        <router-link class='item' to='/collect'>精选集</router-link>
        <router-link class='item' to='/singer'>歌手</router-link>
        <router-link class='item' to='/search'>搜索</router-link>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .nav{
    width: 100%;
    height: 4rem;
    box-shadow: 0 2px 3px rgba(0,0,0,.2);
    background-color: rgba(249,249,249,.6);
    background-image: linear-gradient(to bottom,rgba(249,249,249,.8),rgba(235,235,235,.8));
    display: flex;
    font-size: 1.6rem;
    .item{
      flex: 1;
      display: block;
      text-align: center;
      overflow: hidden;
      color: #262b2f;
      text-decoration: none;
      line-height: 4rem;
      &.active{
        color: #ff5800;
        box-shadow: inset 0 -2px 0 #ff5800;
      }
    }
  }
</style>
