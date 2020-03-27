<template>
    <div class="login">
      <div class="login-header">
        <img class="login-header-logo" src="../../assets/img/logo3.jpg" alt="">
        <p>博客平台账号登录</p>
      </div>
      <div class="login-section">
        <el-form status-icon :model="loginForm">
          <el-form-item >
            <el-input v-model="loginForm.nickName" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login-btn" type="primary" @click="login()">立即登录</el-button>
            <span class="login-forget">
              <router-link tag="a" to="/register">立即注册</router-link>
              <el-divider direction="vertical"></el-divider>
              <a type="info">忘记密码</a>
            </span>
          </el-form-item>
        </el-form>
      </div>
      <div class="login-footer">
        <el-divider><span class="otherInfo"><i class="el-icon-warning" style="color: #C0C4CC">&nbsp;</i>其他信息</span></el-divider>
        <div class="login-footer-txt">
          <p>
            <el-link type="info">English</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link type="info">常见问题</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link type="info">隐私政策</el-link>
          </p>

        </div>
      </div>
    </div>
</template>

<script>
  import {setStore,getStore} from '../../config/mUtils'
  import {reqLogin} from '../../api/index'
    export default {
      data(){
        return {
          loginForm:{
            nickName:"",
            password:"",
          }
        }
      },
      methods:{
        async login(){
          if(!this.loginForm.nickName&&!this.loginForm.password){
            this.$message({
              message: '用户名、密码不能为空',
              duration:2000,
              type: 'error'
            })
            return
          }else{
            let result = await reqLogin(this.loginForm)
            if(result.status===1){
              this.$message({
                message: '登录成功！',
                duration:2000,
                type: 'success'
              })
              this.$store.dispatch('setIsLogin',true)
              this.$store.dispatch('setLoginUserId',result.id)
              this.$store.dispatch('setLoginUserName',result.nickName)
              setStore("bbs_font_userid",result.id)
              setStore("bbs_font_username",result.nickName)
              this.$router.go(-1)
            }
          }

        }
      }
    }
</script>

<style>
 .login{
   width:860px;
   background: white;
   position: absolute;
   top:0;
   bottom: 0;
   left: 50%;
   margin-left: -430px;
 }
 .login-header{
   padding: 50px 0 22px;
   text-align: center;
 }
 .login-header p{
   font-size: 30px;
   color: #333;
   font-weight: normal;
   padding-top: 22px;
 }
  .login-header-logo{
    height: 50px;
    width: 50px;
    border-radius: 4px;
  }
  .login-section,.login-footer{
    width: 326px;
    margin: auto;
  }
  .login-btn{
    width: 100%;
  }
  .login .login-forget{
    color: #606266;
    font-size: 12px;
    text-align: right;
    display: inline-block;
    float: right;
  }
 .login .login-forget a{
   color: #606266;
   font-size: 12px;
   text-decoration: none;
 }
 .login .login-forget a:hover{
   cursor: pointer;
   color: #409EFF;
 }
  .login .login-footer .otherInfo{
    color: #C0C4CC;
    font-size: 12px;
  }
  .login-footer-txt p{
    font-size: 12px;
    color: #909399;
    text-align: center;
    line-height: 30px;
  }
 .el-divider__text, .el-link{
   font-size: 12px;
 }
</style>
