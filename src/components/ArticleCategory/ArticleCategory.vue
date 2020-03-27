<template>
    <div class="articleCategory">
      <div class="articleCategory_header">
        <h3><i class="el-icon-link">&nbsp;</i>文章分类</h3>
      </div>
      <ul class="articleCategory-list">
        <li class="articleCategory-item clearfix" v-for="(item,index) in classify" :key="item.id">
          <p class="fl name" @click="centerPlate(item.id,item.plateName)">{{item.plateName}}版块</p>
          <p class="fr number">{{item.articleNum}}篇</p>
        </li>
      </ul>
    </div>
</template>

<script>
  import {reqPersonalClassify} from "../../api/index"
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        classify:{}
      }
    },
    computed:{
      ...mapState(['enterUserId'])
    },
    methods:{
      async init(){
        if(this.enterUserId!=0){
          this.classify = await reqPersonalClassify(this.enterUserId)
        }
      },
      centerPlate(id,name){
        this.$store.dispatch('setCenterSelectPlate',id)
        this.$store.dispatch('setCenterSelectPlateName',name)
        this.$router.push(`/personalcenter/${this.enterUserId}`)
      }
    },
    mounted(){
      this.init()
    },
    watch:{
      enterUserId(val){
        this.init()
      }
    }
  }
</script>

<style>
  .articleCategory{
    background: white;
    padding: 5px 15px;
  }
  .articleCategory_header{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eceff5;
  }
  .articleCategory h3{
    font-size: 14px;
    color: #606266;
  }
  .articleCategory h3 i{
    color: #409EFF;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .clearfix:after{
    clear: both;
    content: '\20';
    display: block;
  }
  .articleCategory-list{
    padding-bottom: 10px;
  }
  .articleCategory-item{
      font-size: 12px;
      color: #606266;
    padding: 8px;
  }
  .articleCategory-item .number{
    font-size: 12px;
    color: #909399;
  }
  .articleCategory-item .name:hover{
    cursor: pointer;
    color:orange;
  }
</style>
