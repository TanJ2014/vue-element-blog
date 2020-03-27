<template>
    <div class="articledetail">
      <el-row :gutter="20" class="mg-top-15">
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
          <div class="grid-content bg-purple">
            <div class="articledetail-main">
              <div class="articledetail-header">
                <h2>标题：{{articleDetail.title}}</h2>
                <div class="articledetail-header-txt">
                  <span>发表时间：{{articleDetail.publishTime}}</span>
                  <span v-if="userId!=loginUserId">作者：{{articleDetail.nickName}}</span>
                  <span>阅读量：{{articleDetail.clickNum}}</span>
                  <span>所属版块：{{articleDetail.plateName}}</span>
                  <router-link :to="'/editarticle/'+articleId" tag="span" v-if="userId==loginUserId" class="editArticle" >编辑</router-link>
                </div>
              </div>
              <!--这是文章的详情-->
              <div class="articledetail-content">
                <div v-html="articleDetail.content">

                </div>
              </div>
              <div class="xian"></div>
              <div class="articledetail-comment">
                <Comment></Comment>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import {reqArticleDetail} from '../../api/index'
  import AboutUs from '../../components/AboutUs/AboutUs.vue'
  import PersonalProfile from '../../components/PersonalProfile/PersonalProfile.vue'
//  import HotArticle from '../../components/HotArticle/HotArticle.vue'
  import NewestComment from '../../components/NewestComment/NewestComment.vue'
  import ArticleCategory from '../../components/ArticleCategory/ArticleCategory.vue'
  import Comment from '../../components/Comment/Comment.vue'
  import {mapState} from 'vuex'
  export default {
    components:{
      AboutUs,
      PersonalProfile,
//      HotArticle,
      NewestComment,
      ArticleCategory,
      Comment
    },
    data(){
      return {
        userId:"",
        articleId:"",
        articleDetail:"",
      }
    },
    methods:{
     async init(){
        this.articleId = this.$route.params.id
        this.articleDetail = await reqArticleDetail(this.articleId)
        this.userId = this.articleDetail.userId
        this.$store.dispatch('setEnterUserId',this.userId)
      }
    },
    computed:{
      ...mapState(['loginUserId','enterUserId'])
    },
    created(){
        this.init()
    },
    watch: {
      '$route' (to, from) {
        this.init()
      }
    }
  }
</script>

<style>
.articledetail{
  padding: 10px;
  padding-top: 0;
}
.mg-top-15{
  margin-top: 15px;
}
.articledetail-main{
  background-color: white;
  min-height: 800px;
  padding: 15px 20px;
}
.articledetail-header{
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e1e1df;
}
.articledetail-header-txt span{
  display: inline-block;
  padding-top: 10px;
  padding-right: 14px;
  color: #606266;
  font-size: 13px;
}
  .articledetail-content{
    padding-top: 20px 0;
  }
  .xian{
    padding-top: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #e1e1df;
  }
  .articledetail .editArticle{
    display: inline-block;
    float: right;
    color: #409EFF;
  }
.articledetail .editArticle:hover{
  cursor: pointer;
}
</style>
