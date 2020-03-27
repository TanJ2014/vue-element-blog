<template>
    <div class="comment">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <el-form ref="form" :model="addComment">
              <el-form-item>
                <el-input type="textarea" :rows="2" placeholder="请输入评论内容" v-model="addComment.content"></el-input>
              </el-form-item>
              <el-form-item>
                <div class="fr">
                  <el-button>取消</el-button>
                  <el-button type="primary" @click="commentArticle()">评论</el-button>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="grid-content bg-purple">
              <ul>
                  <li class="comment-item" v-for="(item,index) in articleComment">
                      <div class="firstComment clearfix">
<!--                        <img class="userTou fl" :src="item.photo" alt="">-->
                        <img class="userTou fl" src="../../assets/img/timg.jpg" alt="">
                        <div class="comment-txt fl">
                          <span class="comment-user"><router-link tag="a" :to='"/personalcenter/"+item.userId'>{{item.nickName}}</router-link>：</span>
                          <span class="comment-content">{{item.content}}</span>
                          <span class="comment-time">{{item.updataDate}}</span>
                          <span class="comment-op">
                            <a href="javascript:void(0);" @click="replyFun(item,item.id)">回复</a>
<!--                            <a href="javascript:void(0);" v-if="loginUserId===item.userId" @click="delComment(item.id)">删除</a>-->
                                <a href="javascript:void(0);" @click="delComment(item.id)">删除</a>
                          </span>
                        </div>
                      </div>
                      <ul class="reply-list">
                          <li class="reply-item" v-for="(reply,index) in item.reply">
                            <div class="firstComment clearfix">
<!--                              <img class="userTou fl" :src="reply.photo" alt="">-->
                              <img class="userTou fl" src="../../assets/img/timg.jpg" alt="">
                              <div class="comment-txt fl">
                                <span class="comment-user">
                                  <router-link tag="a" :to='"/personalcenter/"+reply.userId'>{{reply.nickName}}</router-link>
                                  回复
                                  <router-link tag="a" :to='"/personalcenter/"+reply.toId'>{{reply.toName}}</router-link>：</span>
                                <span class="comment-content">{{reply.content}}</span>
                                <span class="comment-time">{{reply.updataDate}}</span>
                                <span class="reply-op">
                                  <a href="javascript:void(0);"  v-if="loginUserId===reply.userId" @click="delReply(reply.id)">删除</a>
                                  <a href="javascript:void(0);" @click="replyFun(reply,item.id)">回复</a>
                                </span>
                              </div>
                            </div>
                          </li>
                      </ul>
                      <div class="input-reply input-wrapper clearfix" v-if="showReplyInputId===item.id">
                        <el-input class="gray-bg-input" v-model="addReply.content" type="textarea" :rows="1" autofocus :placeholder="inputComment"></el-input>
                        <div class="btn-control fr mg-top-10">
                          <el-button size="mini" @click="cancelReplyFun()">取消</el-button>
                          <el-button size="mini" class="btn" type="primary" @click="addReplyFun()">确定</el-button>
                        </div>
                      </div>
                  </li>
                <!--<li class="comment-item">-->
                  <!--<div class="firstComment clearfix">-->
                    <!--<img class="userTou fl" src="../../assets/img/userTou.jpg" alt="">-->
                    <!--<div class="comment-txt fl">-->
                      <!--<span class="comment-user">tanj：</span>-->
                      <!--<span class="comment-content">这是我的评论内容</span>-->
                      <!--<span class="comment-time">201893-32-323</span>-->
                      <!--<span class="comment-op">-->
                            <!--<a href="javascript:void(0);">删除</a>-->
                            <!--<a href="javascript:void(0);" @click="replyFun(item,reply=true)">回复</a>-->
                          <!--</span>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<ul class="reply-list">-->
                    <!--<li class="reply-item">-->
                      <!--<div class="firstComment clearfix">-->
                        <!--<img class="userTou fl" src="../../assets/img/userTou.jpg" alt="">-->
                        <!--<div class="comment-txt fl">-->
                          <!--<span class="comment-user">tanj回复张六月：</span>-->
                          <!--<span class="comment-content">这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容</span>-->
                          <!--<span class="comment-time">201893-32-323</span>-->
                          <!--<span class="reply-op">-->
                                  <!--<a href="javascript:void(0);">删除</a>-->
                                  <!--<a href="javascript:void(0);" @click="replyFun(item,reply=true)">回复</a>-->
                                <!--</span>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</li>-->
                    <!--<li class="reply-item">-->
                      <!--<div class="firstComment clearfix">-->
                        <!--<img class="userTou fl" src="../../assets/img/userTou.jpg" alt="">-->
                        <!--<div class="comment-txt fl">-->
                          <!--<span class="comment-user">tanj回复张六月：</span>-->
                          <!--<span class="comment-content">这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容</span>-->
                          <!--<span class="comment-time">201893-32-323</span>-->
                          <!--<span class="reply-op">-->
                                    <!--<a href="javascript:void(0);">删除</a>-->
                                    <!--<a href="javascript:void(0);" @click="replyFun(item,reply=true)">回复</a>-->
                                  <!--</span>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</li>-->
                    <!--<li class="reply-item">-->
                      <!--<div class="firstComment clearfix">-->
                        <!--<img class="userTou fl" src="../../assets/img/userTou.jpg" alt="">-->
                        <!--<div class="comment-txt fl">-->
                          <!--<span class="comment-user">tanj回复张六月：</span>-->
                          <!--<span class="comment-content">这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容</span>-->
                          <!--<span class="comment-time">201893-32-323</span>-->
                          <!--<span class="reply-op">-->
                                      <!--<a href="javascript:void(0);">删除</a>-->
                                      <!--<a href="javascript:void(0);" @click="replyFun(item,reply=true)">回复</a>-->
                                    <!--</span>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</li>-->
                    <!--<li class="reply-item">-->
                      <!--<div class="firstComment clearfix">-->
                        <!--<img class="userTou fl" src="../../assets/img/userTou.jpg" alt="">-->
                        <!--<div class="comment-txt fl">-->
                          <!--<span class="comment-user">tanj回复张六月：</span>-->
                          <!--<span class="comment-content">这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容这是我的评论内容</span>-->
                          <!--<span class="comment-time">201893-32-323</span>-->
                          <!--<span class="reply-op">-->
                                      <!--<a href="javascript:void(0);">删除</a>-->
                                      <!--<a href="javascript:void(0);" @click="replyFun(item,reply=true)">回复</a>-->
                                    <!--</span>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</li>-->
                  <!--</ul>-->
                  <!--<div class="input-reply input-wrapper clearfix" v-if="showReplyInputId==1">-->
                    <!--<el-input class="gray-bg-input" v-model="inputComment" type="textarea" :rows="1" autofocus :placeholder="写下你的评论"></el-input>-->
                    <!--<div class="btn-control fr mg-top-10">-->
                      <!--<el-button size="mini">取消</el-button>-->
                      <!--<el-button size="mini" class="btn" type="primary">确定</el-button>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</li>-->
              </ul>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import {reqArticleComment,reqCommentArticle,reqReplyArticle,reqDelComment,reqDelReply} from '../../api/index'
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        addComment:{
          topicId:'',
          content:'',
          userId:''
        },
        addReply:{
          topicId:'',
          content:'',
          toId:'',
          userId:'',
          commentId:''
        },
        inputComment:'', //提示 placeholder
        showReplyInputId:"",
        comments:"",
        articleid:""
      }
    },
    methods:{
      async commentArticle(){
       if(!this.addComment.content){
         this.$message.error("评论内容不能为空");
       }else if(!this.isLogin){
         this.$message.error("登录后才能评论哦");
        }else{
         this.addComment.userId = this.loginUserId
         this.addComment.topicId =  this.articleid
         let res = await reqCommentArticle(this.addComment)
         if(res.status===1){
           this.$message({
             message: res.message,
             type: 'success'
           });
           this.addComment.content=''
         }
       }
      },
      replyFun(item,showId){
        this.inputComment = "回复"+item.nickName+" "
        this.showReplyInputId = showId
        this.addReply.topicId = this.articleid
        this.addReply.toId = item.userId
        this.addReply.userId = this.loginUserId
        this.addReply.commentId = showId
        this.addReply.content = ""
      },
      cancelReplyFun(){
        this.showReplyInputId = ""
      },
      async addReplyFun(){
        if(!this.isLogin) {
          this.$message.error("登录后才能评论哦");
          return
        }
        if(!this.addReply.content){
          this.$message({
            message: "回复内容不能为空",
            type: 'error'
          });
          return
        }
        let result = await reqReplyArticle(this.addReply)
        if(result.status===1){
          this.$message({
            message: result.message,
            type: 'success'
          });
          this.cancelReplyFun()
        }else{
          this.$message({
            message: result.message,
            type: 'error'
          });
        }
      },
      delComment(id){
          this.$confirm('删除该评论以及该评论的所有回复, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(async () => {
            let result = await reqDelComment(id)
            if(result.status===1){
              this.$message({
                message: "删除评论成功",
                type: 'success'
              });
            }else{
              this.$message.error("删除失败");
            }
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
      },
      delReply(id){
        this.$confirm('确定删除该回复?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          let result = await reqDelReply(id)
          if(result.status===1){
            this.$message({
              message: "删除评论成功",
              type: 'success'
            });
          }else{
            this.$message.error("删除失败");
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    computed:{
      ...mapState(['loginUserId','isLogin','articleComment'])
    },
    mounted(){
      this.articleid = this.$route.params.id
      this.$store.dispatch('getArticleComment',{articleid:this.articleid})
    }
  }
</script>

<style>
  .mg-top-10{
    margin-top: 10px;
  }
.fr{
  float: right;
}
.fl{
  float: left;
}
.clearfix:after{
  clear: both;
  content: "\20";
  display: block;
}
  .comment .userTou{
    width: 30px;
    height: 30px;
    border-radius: 15px;
    display: flex;
    align-items : flex-start;
  }
  .reply-list{
    margin-left: 35px;
    margin-top: 10px;
    padding-left: 20px;
    border-left:3px solid #dee2ec;
  }
  .reply-list .reply-item{
    margin-top: 15px;
  }
.input-reply{
  margin-top: 20px;
  margin-left: 35px;
}
  .comment .comment-txt{
    color: #606266;
    font-size: 14px;
    margin-top: 4px;
    margin-left: 6px;
    line-height: 22px;
  }
  .comment .comment-txt a{
    text-decoration: none;
    color: #409EFF;
  }
  .firstComment{
    display: flex;
  }
  .comment .comment-item{
    padding: 8px 0;
    border-bottom: 1px dotted #e8e8e6;
  }
  .comment .comment-time{
    font-size: 12px;
    color: #999;
    vertical-align: top;
    display: inline-block;
    padding:1px 10px;
  }
  .comment .comment-op a,.comment .reply-op a{
    font-size: 12px;
    color: #409EFF;
    padding: 0 5px;
    text-decoration: none;
    visibility: hidden;
  }
  .firstComment:hover .comment-op a{
    visibility: visible;
  }
  .firstComment:hover .reply-op a{
    visibility: visible;
  }
  .comment .el-form-item{
    margin-bottom: 10px;
  }
</style>
