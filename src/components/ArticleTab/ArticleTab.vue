<template>
    <div class="articleTab">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="最新文章" name="newest">
          <ul class="article-tab-list">
            <li class="article-tab-item" v-for="(item,index) in newArticleList" :key="index">
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
                  <span><i class="el-icon-user" style="color: #67C23A"></i>&nbsp;<router-link tag="span" :to="'/personalcenter/'+item.userId">作者：{{item.nickName}}</router-link></span>
                  <el-divider direction="vertical"></el-divider>
                  <span><i class="el-icon-timer" style="color: #E6A23C"></i>&nbsp;时间：{{item.publishTime}}</span>
                </div>
                <div class="article-tab-num fr">
                  <span><i class="el-icon-view" style="color: #909399"></i>&nbsp;阅读数：{{item.clickNum}}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span><i class="el-icon-chat-line-round" style="color: #909399"></i>&nbsp;评论数：{{item.commentNum}}</span>
                  <span class="mg-left-15" v-if="(enterUserId===loginUserId)&&isLogin">
                    <!--<span class="blue">置顶</span>-->
                    <!--<el-divider direction="vertical"></el-divider>-->
                    <router-link tag="span" :to="'/editarticle/'+item.id" class="blue">编辑</router-link>
                    <el-divider direction="vertical"></el-divider>
                     <span class="red" @click="del(item.id)">删除</span>
                  </span>
                </div>
              </div>
            </li>
          </ul>
          <el-pagination class="pager" background layout="prev, pager, next"
                         :total="newArticleListLen"
                         :page-size="10"
                         :current-page="pageNum1"
                         @current-change="handleCurrentChange1">
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="热门文章" name="hot">
          <ul class="article-tab-list">
            <li class="article-tab-item" v-for="(item,index) in hotArticleList" :key="index">
              <div class="article-tab-title">
                <router-link tag="h4" :to="'/articledetail/'+item.id"><i class="el-icon-document" style="color: #409EFF"></i>&nbsp;&nbsp;{{item.title}}</router-link>
              </div>
              <div class="article-tab-profile">
                <p >
                  {{item.content}}
                </p>
              </div>
              <div class="clearfix">
                <div class="article-tab-time fl">
                  <!--自己的页面不需要展示作者，需要三个编辑按钮-->
                  <span><i class="el-icon-user" style="color: #67C23A"></i>&nbsp;作者：{{item.nickName}}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span><i class="el-icon-timer" style="color: #E6A23C"></i>&nbsp;{{item.publishTime}}</span>
                  <!--<el-divider direction="vertical"></el-divider>-->
                  <!--<span><i class="el-icon-view" style="color: #909399"></i>&nbsp;阅读数：121</span>-->
                  <!--<el-divider direction="vertical"></el-divider>-->
                  <!--<span><i class="el-icon-chat-line-round" style="color: #909399"></i>&nbsp;评论数：wqw</span>-->
                </div>
                <div class="article-tab-num fr">
                  <span><i class="el-icon-view" style="color: #909399"></i>&nbsp;阅读数：{{item.clickNum}}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span><i class="el-icon-chat-line-round" style="color: #909399"></i>&nbsp;评论数：{{item.commentNum}}</span>
                  <span class="mg-left-15" v-if="(enterUserId===loginUserId)&&isLogin">
                    <!--<span class="blue">置顶</span>-->
                    <!--<el-divider direction="vertical"></el-divider>-->
                    <router-link tag="span" :to="'/editarticle/'+item.id" class="blue">编辑</router-link>
                    <el-divider direction="vertical"></el-divider>
                    <span class="red" @click="del(item.id)">删除</span>
                  </span>

                </div>
                <div>

                </div>
              </div>
            </li>
          </ul>
          <el-pagination class="pager" background layout="prev, pager, next"
                         :total="hotArticleListLen"
                         :page-size="10"
                         :current-page="pageNum2"
                         @current-change="handleCurrentChange2">
          </el-pagination>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {reqArticleList,reqDelArticle} from '../../api/index'
    export default {
      data(){
        return {
          activeName:'newest',
          type:1, //1:最新，2:最热
          pageNum1:1,//最新当前页码
          pageNum2:1, //最热当前页码
          userid:0,
          plateid:0,
        }
      },
      props:{
        nowPage:Number,
      },
      computed:{
        ...mapState(['hotArticleList','newArticleList','homeSelectPlate',
          'centerSelectPlate',
          'hotArticleListLen',
          'newArticleListLen',
          'enterUserId',
          'loginUserId',
          'isLogin'])
      },
      mounted(){
        this.userid = this.enterUserId
        if(this.nowPage==2){
          this.plateid = this.centerSelectPlate
        }
        this.getArticle(this.plateid,this.userid,1)
      },
      methods:{
        handleClick(tab, event) {
          const nowTab =  event.target.getAttribute('id')
          if(nowTab=='tab-hot'){
            this.type = 2
          }else{
            this.type = 1
          }
        },
        handleCurrentChange1(val){
          //最新的列表 的页码
          this.pageNum1 = val
        },
        handleCurrentChange2(val){
          //最热的列表 的页码
          this.pageNum2 = val
        },
        getArticle(plateid,userid,pageNum){
          if(this.nowPage===1){
            //首页
            if(this.type==1){
              this.$store.dispatch('getNewArticleList',{plateid:plateid,userid:0,pageNum:pageNum})
            }else{
              this.$store.dispatch('getHotArticleList',{plateid:plateid,userid:0,pageNum:pageNum})
            }
          }else{
            if(this.type==1){
              this.$store.dispatch('getNewArticleList',{plateid:plateid,userid:userid,pageNum:pageNum})
            }else{
              this.$store.dispatch('getHotArticleList',{plateid:plateid,userid:userid,pageNum:pageNum})
            }
          }
        },
        del(id){
        this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          let result = await reqDelArticle(id)
          if(result.status===1){
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
//            this.$forceupdate()
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
      },
      watch: {
        //版块
        homeSelectPlate(value) {
          //当用户在首页选中版块后，获取文章列表
          this.plateid = value
          this.getArticle(value,this.userid,1)
        },
        centerSelectPlate(value) {
          console.log(value+"选中的版块")
          //当用户在用户中心选中版块后，获取文章列表
          this.plateid = value
          this.getArticle(value,this.userid, 1)
        },
        //最新 最热
        type(value) {
          this.getArticle(this.plateid,this.userid, 1)
        },
        //页码
        pageNum1(value) {
          this.getArticle(this.plateid,this.userid, value)
        },
        pageNum2(value) {
          this.getArticle(this.plateid,this.userid, value)
        }
      }
  }
</script>

<style>
  .mg-left-15{
    margin-left: 15px;
  }
  .articleTab{
    background: white;
    padding: 5px 15px;
    min-height: 400px;
  }
  .el-tabs__nav-wrap::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #eceff5;
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
  .article-tab-title{
    height: 30px;
  }
  .article-tab-title h4{
    font-size: 18px;
    font-weight: bold;
    line-height: 30px;
  }
  .article-tab-profile p{
    margin-bottom: 4px;
    color: #8a8a8a;
    font-size: 14px;
    line-height: 24px;
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
  }
  .article-tab-time,.article-tab-num{
    font-size: 12px;
    color: #8a8a8a;
    line-height: 24px;
  }
  .article-tab-item{
    padding: 10px;
    border-bottom: 1px solid #eceff5;
  }
  .article-tab-item:hover{
    background:#FAFAFA;
  }
  .article-tab-title h4:hover{
    color: #409EFF;
    transition: all .3s;
    cursor: pointer;
  }
  .article-tab-item:last-child{
    border-bottom: 0;
  }
  .article-tab-time span:first-child:hover{
    color: #67C23A;
    cursor: pointer;
  }
  .article-tab-item:hover .blue{
    color: #409EFF;
    cursor: pointer;
  }
  .article-tab-item:hover .red{
    color: #F56C6C;
    cursor: pointer;
  }
  .pager{
    float: right;
    margin: 20px 0;
  }
</style>
