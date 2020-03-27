<template>
    <div class="personalCenter">
      <div class="banner5">
        <el-row :gutter="20">
          <el-col :span="16" :offset="1">
            <div class="grid-content bg-purple">
              <h2>{{enteruser.nickName}}</h2>
              <h4>{{enteruser.signature}}</h4>
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
            <!--<div class="grid-content bg-purple mg-top-15">-->
              <!--<HotArticle></HotArticle>-->
            <!--</div>-->
            <div class="grid-content bg-purple mg-top-15">
              <NewestComment></NewestComment>
            </div>
            <div class="grid-content bg-purple mg-top-15">
              <AboutUs></AboutUs>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple subNav">
             <p><i class="el-icon-location-information" style="color: #409EFF">&nbsp;</i><span @click="centerPlate(0,'')">全部文章</span> > {{centerSelectPlateName}}</p>
            </div>
            <div class="grid-content bg-purple mg-top-15">
              <ArticleTab :nowPage="2"></ArticleTab>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
  import AboutUs from '../../components/AboutUs/AboutUs.vue'
  import PersonalProfile from '../../components/PersonalProfile/PersonalProfile.vue'
//  import HotArticle from '../../components/HotArticle/HotArticle.vue'
  import NewestComment from '../../components/NewestComment/NewestComment.vue'
  import ArticleCategory from '../../components/ArticleCategory/ArticleCategory.vue'
  import ArticleTab from '../../components/ArticleTab/ArticleTab.vue'
  import {reqArticleList,reqEnteruser} from '../../api/index'
  import {mapState} from 'vuex'
    export default {
    inject:['reload'],
    data(){
      return {
        userid:"",//用户userid的用户中心
        enteruser:{}
      }
    },
    components:{
      PersonalProfile,
      AboutUs,
//        HotArticle,
      NewestComment,
      ArticleCategory,
      ArticleTab
    },
    methods:{
      centerPlate(id,name){
        this.$store.dispatch('setCenterSelectPlate',id)
        this.$store.dispatch('setCenterSelectPlateName',name)
      },
      async getEnteruser() {
        this.enteruser = await reqEnteruser(this.userid)
      }
    },
    watch: {
      '$route' (to, from) {
        this.$router.go(0);
      }
    },
    created(){
      this.userid  = this.$route.params.id
      this.$store.dispatch('setEnterUserId',this.userid)
    },
    mounted(){
      this.getEnteruser()
    },
    computed:{
      ...mapState(['centerSelectPlateName','loginUserName'])
    }
  }
</script>

<style>
.personalCenter .banner5{
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
  .personalCenter .container{
    padding: 10px;
    padding-top: 0;
  }

  .personalCenter .banner5 h2{
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-top: 25px;
  }
  .personalCenter .banner5 h4{
    color: white;
    font-size: 14px;
    margin-top: 13px;
  }
  .personalCenter .subNav{
    background-color: white;
    padding: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #909399;
  }
</style>
