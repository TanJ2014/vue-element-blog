<template>
  <div id="app">
    <Header v-if="!$route.meta.noShowHeader"></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    Header
  },
  mounted(){
  }
}
</script>

<style>
#app,body{
  width: 100%;
  height: 100%;
  background: #F5F6F7;
}
</style>
