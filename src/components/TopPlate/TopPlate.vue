<template>
    <div class="topPlate">
      <div class="topPlate_header">
        <h3><i class="el-icon-star-on" style="color: #F56C6C"></i> 热门版块</h3>
      </div>
      <div>
        <img class="banner3" src="../../assets/img/banner3.jpg" alt="">
      </div>
      <div class="topPlate-list">
        <ul>
          <li class="topPlate-item clearfix" v-for="(hotPlate,index) in hotPlates" :key="hotPlate.id" v-if="index<5">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <p class="plate-grade">{{index+1}}</p>
                </div>
              </el-col>
              <el-col :span="20">
                <div class="grid-content bg-purple plate-grade-txt">
                  <div class="clearfix">
                    <p class="fl">{{hotPlate.plateName}}</p>
                    <p class="fr">文章数：{{hotPlate.articleNum}}</p>
                  </div>
                  <p class="plate-desc">{{hotPlate.description}}</p>
                </div>
              </el-col>
            </el-row>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    computed:{
      ...mapState(['allPlates']),
      hotPlates(){
        return this.sortKey(this.allPlates,'articleNum')
      }
    },
    mounted(){
      this.$store.dispatch('getAllPlates')
    },
    methods:{
       sortKey(array,key){
        return array.sort(function(a,b){
             var x = a[key];
             var y = b[key];
              return ((x>y)?-1:(x<y)?1:0)
         })
      }
    }
  }
</script>

<style>
  .topPlate{
    background: white;
    min-height: 300px;
    padding: 5px 15px;
  }
  .topPlate_header{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eceff5;
  }
  .topPlate_header h3{
    font-size: 14px;
    color: #606266;
  }
  .topPlate_header h3 i{
    color: #67C23A;
  }
  .topPlate .banner3{
    width: 100%;
    height: 110px;
    margin-top: 15px;
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
  .topPlate .plate-grade{
    height: 40px;
    width: 40px;
    border-radius: 20px;
    text-align: center;
    color: white;
    line-height: 40px;
    font-weight: bold;
    font-size: 17px;
  }
  .topPlate-item:hover{
    background:#FAFAFA;
  }
  .topPlate-item:nth-child(4n+1) .plate-grade{
    background: #409EFF;
  }
  .topPlate-item:nth-child(4n+2) .plate-grade{
    background: #67C23A;
  }
  .topPlate-item:nth-child(4n+3) .plate-grade{
    background: #E6A23C;
  }
  .topPlate-item:nth-child(4n) .plate-grade{
    background: #F56C6C;
  }
  .topPlate .plate-grade-txt p{
    font-size: 12px;
    line-height: 20px;
    padding-left: 10px;
  }
  .topPlate-item:first-child{
    margin-top: 10px;
  }
  .topPlate-item{
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid #f2f5fb;
  }
  .topPlate-item:last-child{
    border-bottom: 0;
  }
  .topPlate .plate-desc{
    color: #8a8a8a;
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
    font-size: 11px;
  }

</style>
