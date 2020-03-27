<template>
  <div class="header-div">
    <el-row class="header">
      <el-col :span="2" >
        <div class="grid-content bg-purple">
          <img class="logo" src="../../assets/img/logo.png" alt="">
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <span class="system_name" >TanJia博客平台</span>
        </div>
      </el-col>
      <el-col :span="6" :offset="10">
        <div class="grid-content bg-purple">
          <el-input class="searchArticle" size="mini" placeholder="请输入文章名称" v-model="keyword">
            <i slot="suffix" class="el-input__icon el-icon-search" @click="searchArticle(keyword)"></i>
          </el-input>
          <a class="postArticle" @click="postArticle()"><i class="el-icon-edit"></i>发文章</a>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <div class="noLogin" v-if="!isLogin">
            <router-link to="/login" tag="el-link"> <el-link type="primary">登录</el-link></router-link>
            <el-divider direction="vertical"></el-divider>
            <router-link to="/register" tag="el-link"><el-link type="primary">注册</el-link></router-link>
          </div>
          <el-dropdown trigger="hover" v-if="isLogin">
          <span class="el-dropdown-link">
            {{storeName}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-collection" @click.native="goto(1)">我的文章</el-dropdown-item>
              <!--<el-dropdown-item icon="el-icon-chat-dot-square" >文章评论</el-dropdown-item>-->
              <el-dropdown-item icon="el-icon-user" divided @click.native="goto(2)">个人信息</el-dropdown-item>
              <el-dropdown-item icon="el-icon-setting" @click.native="goto(3)">账号设置</el-dropdown-item>
              <el-dropdown-item icon="el-icon-switch-button" divided @click.native="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  import {setStore,getStore,removeStore} from '../../config/mUtils'
  import {mapState} from 'vuex'
  import {reqLogout} from '../../api/index'
  export default {
  data(){
    return {
      input3:'',
      keyword:"",//搜索文章的关键词
      storeId:"",
      storeName:""
    }
  },
    computed:{
      ...mapState(['isLogin','loginUserId'])
    },
    mounted(){
      this.storeId = getStore('bbs_font_userid')
      this.storeName = getStore('bbs_font_username')
      if(this.storeId&&this.storeName){
        this.$store.dispatch('setIsLogin',true)
        this.$store.dispatch('setLoginUserId',this.storeId )
        this.$store.dispatch('setLoginUserName',this.storeName )
      }else{
        this.$store.dispatch('setIsLogin',false)
      }
    },

    methods:{
      goto(val){
//        this.$router.push()
        //我的文章，个人中心
        if(val===1){
          this.$router.push('/personalcenter/'+this.loginUserId)
        }
        //进入个人信息
        if(val===2){
          this.$router.push("/personalinfo")
        }
        //进入账户设置
        if(val===3){
          this.$router.push("/personalInfo/passedit")
        }
      },
      searchArticle(keyword){
        this.$router.push({
          path: "/searcharticle",
          query: {
            keyword: keyword
          }
        });
        this.keyword = ""
      },
       async logout(){
        this.$confirm('确定要退出系统吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          let result = await reqLogout()
          console.log(result)
          if(result.status===1){
            this.$message({
              type: 'success',
              message: result.message
            });
            removeStore("bbs_font_userid")
            removeStore("bbs_font_username")
            this.$store.dispatch('setIsLogin',false)
          }else{
            this.$message({
              type: 'danger',
              message: '退出失败'
            });
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      },
      postArticle(){
         if(this.isLogin==false){
           this.$message({
             message: '登录了才能发布文章哦！',
             type: 'warning'
           });
         }else{
           this.$router.push('/postarticle')
         }
      }
    }
  }
</script>

<style>
  .header{
    width: 100%;
    height: 60px;
    /*border-bottom: 1px solid #eee;*/
   box-shadow:0px 1px 10px #e8e8e8;
    padding: 0!important;
    margin: 0;
    background: white;
    position: fixed;
    top:0;
    z-index: 100;
  }
  .header-div{
    height: 60px;
  }
  .header-div:after{
    clear: both;
    content: " ";
    display: block;
    height: 60px;
  }
.logo{
  width: 40px;
  height: 40px;
  margin-top: 10px;
  padding-left: 50px;
}
  .system_name{
    line-height: 60px;
  }
  .el-dropdown-link{
    display: block;
    color: #409EFF;
    line-height: 60px;
  }
  .noLogin{
    margin-top: 17px;
    /*line-height: 60px;*/
  }
  .operate{
    /*line-height: 68px;*/
  }
  .postArticle{
    font-size: 14px;
    color: #909399;
  }
  .postArticle:hover{
    color: #409EFF;
    cursor: pointer;
  }
  .postArticle i{
    padding-right: 5px;
    color:#409EFF ;
    /*font-size: 16px;*/
  }
.header .searchArticle{
  margin-top: 17px;
  margin-right: 18px;
  margin-left: 30px;
  width: 180px;
}
</style>
