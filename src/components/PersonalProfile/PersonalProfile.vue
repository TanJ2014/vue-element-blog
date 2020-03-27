<template>
    <div class="personalProfile">
      <div class="profile-header">
<!--        <img class="userlogo" :src="profile.photo" alt="">-->
        <img class="userlogo" src="../../assets/img/timg.jpg" alt="">
        <span class="username">{{profile.nickName}}</span>
      </div>
      <el-row class="profile-num-list">
        <el-col :span="6">
          <div class="grid-content bg-purple">
              <p class="profile-txt">文章数</p>
              <p class="profile-num">{{profile.articleNum}}</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p class="profile-txt">评论数</p>
            <p class="profile-num">{{profile.commentNum}}</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p class="profile-txt">积分</p>
            <p class="profile-num">{{profile.integral}}</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p class="profile-txt">访问量</p>
            <p class="profile-num">{{profile.visitNum}}</p>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import {reqPersonalProfile} from "../../api/index"
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        profile:{}
      }
    },
    computed:{
      ...mapState(['enterUserId'])
    },
    methods:{
      async init(){
        if(this.enterUserId!=0){
          this.profile = await reqPersonalProfile(this.enterUserId)
        }else{
          return
        }
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
.personalProfile{
  background-color: white;
  /*min-height: 300px;*/
  padding: 15px;
  box-sizing: border-box;
}
.personalProfile .userlogo{
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-right: 6px;
}
.personalProfile .username,.personalProfile .userlogo{
  vertical-align: middle;
}
 .personalProfile .profile-header{
   padding-bottom: 10px;
    border-bottom: 1px solid #f7f7f5;
  }
  .personalProfile .profile-num-list{
    margin-top: 15px;
  }
.personalProfile .profile-txt{
  text-align: center;
  color: #606266;
  font-size: 13px;
}
 .personalProfile .profile-num{
   line-height: 30px;
   text-align: center;
   color: #606266;
   font-size: 15px;
   font-weight: bold;
 }
</style>
