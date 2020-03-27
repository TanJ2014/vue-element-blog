<template>
  <div class="mycommentlist">
    <div class="banner5">
      <el-row :gutter="20">
        <el-col :span="16" :offset="1">
          <div class="grid-content bg-purple">
            <h2>用户名</h2>
            <h4>我喜欢计算机，我要好好学编程</h4>
          </div>
        </el-col>
        <!--<el-col :span="8"><div class="grid-content bg-purple"></div></el-col>-->
      </el-row>
    </div>
    <!--<img class="banner5" src="../../assets/img/banner5.jpg" alt="">-->
    <div  class="container mg-top-15">
      <el-row :gutter="20">
        <el-col :span="6" :offset="1">
          <div class="grid-content bg-purple">
            <PersonalProfile></PersonalProfile>
          </div>
          <div class="grid-content bg-purple mg-top-15">
            <ArticleCategory></ArticleCategory>
          </div>
          <div class="grid-content bg-purple mg-top-15">
            <HotArticle></HotArticle>
          </div>
          <div class="grid-content bg-purple mg-top-15">
            <NewestComment></NewestComment>
          </div>
          <div class="grid-content bg-purple mg-top-15">
            <AboutUs></AboutUs>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple subNav">
            <p><i class="el-icon-location-information" style="color: #409EFF">&nbsp;</i>全部评论</p>
          </div>
          <div class="grid-content bg-purple  mg-top-15 mycommentlist-content">
            <AllCommentList></AllCommentList>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import AboutUs from '../../components/AboutUs/AboutUs.vue'
  import PersonalProfile from '../../components/PersonalProfile/PersonalProfile.vue'
  import HotArticle from '../../components/HotArticle/HotArticle.vue'
  import NewestComment from '../../components/NewestComment/NewestComment.vue'
  import ArticleCategory from '../../components/ArticleCategory/ArticleCategory.vue'
  import AllCommentList from '../../components/AllCommentList/AllCommentList.vue'
  export default {
    components:{
      PersonalProfile,
      AboutUs,
      HotArticle,
      NewestComment,
      ArticleCategory,
      AllCommentList
    }
  }
</script>

<style>
  .mycommentlist .banner5{
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    height: 120px;
    margin-top: 5px;
    background: url("../../assets/img/banner5.jpg");
    background-size:100% 100%;
  }
  .mg-top-15{
    margin-top: 15px;
  }
  .mycommentlist .container{
    padding: 10px;
    padding-top: 0;
  }

  .mycommentlist .banner5 h2{
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-top: 25px;
  }
  .mycommentlist .banner5 h4{
    color: white;
    font-size: 12px;
    margin-top: 13px;
  }
  .mycommentlist .subNav{
    background-color: white;
    padding: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #909399;
  }
  .mycommentlist-content{
    background: white;
    padding: 10px;
  }
</style>
