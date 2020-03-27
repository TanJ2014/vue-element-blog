<template>
    <div class="searchArticle mg-top-15">
      <el-row class="mg-top-15">
        <el-col :span="22" :offset="1">
          <div class="grid-content bg-purple subNav">
            <p><i class="el-icon-search" style="color: #409EFF">&nbsp;</i> "{{keyword}}" 的搜索结果</p>
          </div>
          <div class="grid-content bg-purple mg-top-15 clearfix searchArticle-content">
            <ul class="article-tab-list">
              <li class="article-tab-item" v-for="(item,index) in searchArticleList" :key="item.id">
                <div class="article-tab-title">
                  <router-link tag="h4" :to="'/articledetail/'+item.id"><i class="el-icon-document" style="color: #409EFF"></i>&nbsp;{{item.title}}</router-link>
                </div>
                <div class="article-tab-profile">
                  <p >
                    {{item.content}}
                  </p>
                </div>
                <div class="clearfix">
                  <div class="article-tab-time fl">
                    <span><i class="el-icon-user" style="color: #67C23A"></i>&nbsp;作者：{{item.nickName}}</span>
                    <el-divider direction="vertical"></el-divider>
                    <span><i class="el-icon-timer" style="color: #E6A23C"></i>&nbsp;时间：{{item.publishTime}}</span>
                  </div>
                  <div class="article-tab-num fr">
                    <span><i class="el-icon-view" style="color: #909399"></i>&nbsp;阅读数：{{item.clickNum}}</span>
                    <el-divider direction="vertical"></el-divider>
                    <span><i class="el-icon-chat-line-round" style="color: #909399"></i>&nbsp;评论数：{{item.commentNum}}</span>
                  </div>
                </div>
              </li>
            </ul>
            <el-pagination class="pager" background layout="prev, pager, next"
                           :total="searchArticleLength"
                           :page-size="10"
                           :current-page="pageNum"
                           @current-change="handleCurrentChange">
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import {reqSearchArticle} from '../../api/index'
  export default {
    data(){
      return {
        keyword:"",
        searchArticle:[],
        pageNum:1,
      }
    },
    components:{

    },
    computed:{
      searchArticleList(){
        return  this.searchArticle.articleLists
      },
      searchArticleLength(){
        return  this.searchArticle.allLength
      }
    },
    methods:{
      async getSearchList(){
        this.searchArticle = await reqSearchArticle(this.keyword,this.pageNum)
      },
      handleCurrentChange(val){
        this.pageNum = val
        this.getSearchList()
      }
    },
    mounted(){
      this.keyword = this.$route.query.keyword
      this.getSearchList()
    }
  }
</script>

<style>
  /*.searchArticle{*/
    /*padding: 10px;*/
  /*}*/
  .searchArticle .searchArticle-content{
    background-color: white;
    padding: 0 20px;
  }
.mg-top-15{
  margin-top: 15px;
}
  .searchArticle .subNav{
    background-color: white;
    padding: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #909399;
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
 .searchArticle .article-tab-title{
    height: 30px;
  }
 .searchArticle .article-tab-title h4{
    font-size: 18px;
    font-weight: bold;
    line-height: 30px;
  }
 .searchArticle .article-tab-profile p{
    margin-bottom: 4px;
    color: #8a8a8a;
    font-size: 14px;
    line-height: 24px;
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
  }
 .searchArticle .article-tab-time,.searchArticle .article-tab-num{
    font-size: 12px;
    color: #8a8a8a;
    line-height: 24px;
  }
 .searchArticle .article-tab-item{
    padding: 10px;
    border-bottom: 1px solid #eceff5;
  }
 .searchArticle .article-tab-item:hover{
    background:#FAFAFA;
  }
 .searchArticle .article-tab-title h4:hover{
    color: #409EFF;
    transition: all .3s;
    cursor: pointer;
  }

 .searchArticle .article-tab-time span:first-child:hover{
    color: #67C23A;
    cursor: pointer;
  }
 .searchArticle .article-tab-item:hover .blue{
    color: #409EFF;
    cursor: pointer;
  }
 .searchArticle .article-tab-item:hover .red{
    color: #F56C6C;
    cursor: pointer;
  }
 .searchArticle .pager{
    float: right;
    margin: 20px 0;
  }
</style>
