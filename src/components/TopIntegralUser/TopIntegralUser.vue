<template>
    <div class="topIntegralUser">
        <div class="topIntegral_header">
          <h3><i class="el-icon-s-flag"></i> 积分牛人</h3>
        </div>
        <div class="integralUser-list">
          <ul>
            <li class="integralUser-item clearfix" v-for="(item,index) in topIntegralUser" :key="index" v-if="index<5">
              <div class="integralUser-img fl">
                <router-link :to="'/personalcenter/'+item.id">
<!--                  <img :src="item.photo" alt="">-->
                  <img src="../../assets/img/timg.jpg" alt="">
                </router-link>
              </div>
              <div class="integralUser-txt fl">
                <router-link class="userName" tag="p" :to="'/personalcenter/'+item.id">{{item.nickName}}</router-link>
                <p>积分：<span class="integralSpan">{{item.integral}}</span></p>
                <p class="integralUser-label">{{item.signatrue}}</p>
              </div>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['topIntegralUser'])
    },
    mounted(){
      this.$store.dispatch('getTopIntegralUser')
      console.log(this.topIntegralUser)
    }
  }
</script>

<style>
.topIntegralUser{
  background: white;
  min-height: 300px;
  padding: 5px 15px;
}
.topIntegral_header{
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eceff5;
}
.topIntegral_header h3{
  font-size: 14px;
  color: #606266;
}
.topIntegral_header h3 i{
  color: #67C23A;
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
.integralUser-item{
  width: 100%;
  padding: 5px 0;
  border-bottom: 1px solid #f2f5fb;
}
.integralUser-item:hover{
  background:#FAFAFA;;
}
.integralUser-item:first-child{
  margin-top: 15px;
}
.integralUser-item:last-child{
  border-bottom: 0;
}
.integralUser-img img{
  width: 40px;
  height: 40px;
}
.integralUser-txt{
  margin-left: 10px;
}
.integralUser-txt p{
  font-size: 12px;
  color:#909399;
  line-height: 20px;
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
}
.integralUser-txt p:first-child{
  color: #606266;
}
.integralUser-label{
    color:#909399;
    font-size: 11px!important;
}
.integralSpan{
  color: #409EFF;
}
.integralUser-img:hover,.topIntegralUser .userName:hover{
  cursor: pointer;
}

</style>
