<template>
    <div class="leftMenu">
      <ul class="platelist">
        <li class="platelist-item" @click="setHomeSelectPlate(0)" :class="{active:clickPlateId===0}"><p>推荐</p></li>
        <li class="platelist-item"
            v-for="(allPlate,id,index) in allPlates" :key="allPlate.id"
            @click="setHomeSelectPlate(allPlate.id)"
            :class="{active:clickPlateId===allPlate.id}"><p>{{allPlate.plateName}}</p></li>
      </ul>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        clickPlateId:0
      }
    },
    computed:{
      ...mapState(['allPlates'])
    },
    mounted(){
      this.$store.dispatch('getAllPlates')
    },
    methods:{
      setHomeSelectPlate(plateid){
        this.clickPlateId = plateid
        this.$store.dispatch('setHomeSelectPlate',plateid)
      }
    }
  }
</script>

<style>
.platelist{
  min-height: 380px;
  background: white;
  z-index: 99;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04);
  padding-top: 3px;
}
  .platelist-item{
    text-align: center;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color:#707070;
    margin-top: 2px;
    white-space:nowrap;
    text-overflow:ellipsis;
    padding: 0 10px;
  }
.platelist-item p{
  white-space:nowrap;
  text-overflow:ellipsis;
  overflow: hidden;
}
  .platelist-item.active{
    background: #409EFF;
    color: white;
  }
.platelist-item:hover{
  background: #409EFF;
  color: white;
  cursor: pointer;
  transition: all .2s;
}
</style>
