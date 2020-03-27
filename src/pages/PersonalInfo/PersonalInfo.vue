<template>
    <div class="personalInfo">
      <el-row :gutter="20">
        <el-col :span="5" :offset="1">
          <div class="grid-content bg-purple personalInfo-nav">
            <ul class="personalInfo-nav-list">
              <router-link tag="li" class="personalInfo-nav-item" to="/personalInfo/userinfo">个人信息</router-link>
              <router-link tag="li" class="personalInfo-nav-item"  to="/personalInfo/passedit">账号设置</router-link>
              <li class="personalInfo-nav-item" @click="goto(1)">写文章</li>
              <li class="personalInfo-nav-item" @click="goto(2)">我的文章</li>
              <!--<li class="personalInfo-nav-item">文章评论</li>-->
            </ul>
          </div>
          <div class="grid-content bg-purple mg-top-15">
            <AboutUs></AboutUs>
          </div>
        </el-col>
        <el-col :span="17">
          <div class="grid-content bg-purple">
            <div class="personalInfo-content">
              <div class="grid-content bg-purple subNav">
                <p><i class="el-icon-star-on" style="color: #F56C6C">&nbsp;</i>个人信息</p>
              </div>
              <div class="mg-top-15 personalInfo-router">
                <keep-alive>
                  <router-view></router-view>
                </keep-alive>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
import AboutUs from '../../components/AboutUs/AboutUs.vue'
  export default {
    components:{
      AboutUs
    },
    computed:{
      ...mapState(['loginUserId'])
    },
    methods:{
      goto(val) {
        //发文章
        if (val === 1) {
          this.$router.push('/postarticle')
        }
        //进入个人信息
        if (val === 2) {
          this.$router.push("/personalcenter/"+this.loginUserId)
        }
      }
    }
  }
</script>

<style>
.personalInfo{
  padding: 15px 10px;
}
.personalInfo .personalInfo-nav{
  background: white;
}
.personalInfo-nav-item{
  line-height: 40px;
  padding-left: 20px;
  font-size: 13px;
  color: #606266;
}
.personalInfo-nav-item:hover{
  cursor: pointer;
}
.router-link-active{
    background-color: #409EFF;
  color: white;
}
.mg-top-15{
  margin-top: 15px;
}
.personalInfo-content .subNav{
  background-color: white;
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #909399;
}
  .personalInfo-router{
    background:white;
  }
</style>
