<template>
  <div id="app">
    <Header></Header>
    <div class="app-main">
      <div class="app-main-left">
        <Menu></Menu>
      </div>
      <div class="app-main-right">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import Menu from '@/components/menu.vue';
  import Header from '@/components/header.vue';
export default {
  name: 'App',
  components:{
    Menu,Header
  }
}
</script>

<style lang="scss">
#app{
    overflow: hidden;
    height: 100%;
  .app-main{
    display: flex;
    min-width: 1101px;
    margin: 0 0 0 60px;
    width: calc(100% - 60px);
    height: calc(100% - 80px);
    .app-main-left{
      min-width: 230px;
      position: relative;
      overflow-y: auto;
      &::-webkit-scrollbar{
        width: 4px;
        display: none;
      }

    }
    .app-main-right{
     position: relative;
      padding-top: 15px;
      flex: 1;
      overflow-y: auto;
      section{
        padding-right:10px;
      }
    }
      
  }
    
}
  
</style>
