<template>
  <div class="register">
    <div class="register-child">
      <div class="register-header">
        <img class="register-header-logo" src="../../assets/img/logo3.jpg" alt="">
        <p>博客平台账号</p>
      </div>
      <div class="register-section">
        <el-form style="padding-top: 10px;" :model="userinfo">
          <el-form-item >
            <el-input v-model="userinfo.nickName" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input type="password" v-model="password1" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input type="password" v-model="userinfo.password" placeholder="请重新输入密码"></el-input>
          </el-form-item>
          <el-form-item class="lastitem">
            <el-button class="register-btn" type="primary" @click="submit()">立即注册</el-button>
            <span class="register-forget">
              <router-link tag="a" to="/login">已有账号？去登录</router-link>
              <el-divider direction="vertical"></el-divider>
              <a>忘记密码</a>
            </span>
          </el-form-item>
        </el-form>
        <p class="agreeAndRead">已阅读并同意：<strong>用户协议</strong>和 <strong>隐私政策</strong></p>
      </div>
      <div class="register-footer">
        <el-divider><span class="otherInfo"><i class="el-icon-warning" style="color: #C0C4CC">&nbsp;</i>其他信息</span></el-divider>
        <div class="register-footer-txt">
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
  </div>
</template>

<script>
  import {reqReg} from '../../api/index'
  export default {
    data(){
      return {
        password1:"",
        userinfo: {
          nickName: '',
          password: ''
        }
      }
    },
    methods:{
      async submit(){
        if(this.password1!==this.userinfo.password){
          this.$message.error("两次输入的密码不一致");
        }else{
          let result = await reqReg(this.userinfo)
          if(result.status===1){
            this.$message.success("注册成功，现在去登录");
            this.$router.push('/login')
          }else{
            this.$message.error(result.message);
            return
          }
        }
      }
    }
  }
</script>

<style>
  .register{
    width:860px;
    height: auto;
    background: white;
    margin: auto;
    padding-bottom: 30px;
    text-align: center;
  }
  .register-header{
    padding: 50px 0 22px;
    text-align: center;
  }
  .register-header p{
    font-size: 30px;
    color: #333;
    font-weight: normal;
    padding-top: 22px;
  }
  .register-header-logo{
    height: 50px;
    width: 50px;
    border-radius: 4px;
  }
  .register-section,.register-footer{
    width: 326px;
    margin: auto;
  }
  .register-btn{
    width: 100%;
  }
  .register .register-forget{
    display: inline-block;
    float: right;
  }
  .register .register-forget a{
    color: #606266;
    font-size: 12px;
    text-decoration: none;
  }
  .register .register-forget a:hover{
    cursor: pointer;
    color: #409EFF;
  }
  .register .register-footer .otherInfo{
    color: #C0C4CC;
    font-size: 12px;
  }
  .register-footer-txt p{
    font-size: 12px;
    color: #909399;
    text-align: center;
    line-height: 30px;
  }
  .el-divider__text, .el-link{
    font-size: 12px;
  }
  .register .agreeAndRead{
    text-align: center;
    color: #606266;
    font-size: 13px;
  }
  .register .agreeAndRead strong{
    font-weight: bold;
  }
  .register .lastitem{
   /*margin-bottom: 0;*/
  }
</style>
