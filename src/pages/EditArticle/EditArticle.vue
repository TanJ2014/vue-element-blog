<template>
  <div class="editArticle">
    <!--<div class="dsds" v-html="form.desc"></div>-->
    <el-row :gutter="20" class="mg-top-15">
      <el-col :span="22" :offset="1">
        <div class="grid-content bg-purple editArticle-content">
          <el-form ref="form" :model="form">
            <el-form-item>
              <el-input type="text" placeholder="请输入文章标题" v-model="form.title" maxlength="50" show-word-limit></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="textarea" v-model="form.content" id="editor_id" name="content"></el-input>
            </el-form-item>
            <el-form-item>
              <el-select class="mg-top-15 choosePlate" v-model="form.plate" placeholder="前端">
                <el-option v-for="item in allPlates" :key="item.id" :label="item.plateName" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">确认修改</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import '../../../static/kindeditor/kindeditor-all'
  import '../../../static/kindeditor/lang/zh-CN'
  import {reqArticleDetail,reqEditArticle} from '../../api/index'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        form: {
          articleid:"",
          title:"",
          content:"",
          plateName:"",
            id:0

        },
        editor:"",
        content:"2323"
      }
    },
    computed:{
      ...mapState(['loginUserId','allPlates'])
    },
    methods: {
      kind(K){
         this.editor =  KindEditor.create(K,{
            items : ['source', '|', 'undo', 'redo', '|', 'preview', 'template', 'cut', 'copy', 'paste',
              'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
              'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
              'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
              'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
              'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image','multiimage',
              'flash', 'media', 'insertfile', 'table', 'hr', 'baidumap', 'pagebreak',
              'anchor', 'link', 'unlink']
          }
        )
        console.log(K)
      },
      onSubmit(){
        this.editor.sync();
        this.form.content = document.getElementById('editor_id').value;
        this.editor.html(this.form.content);
        this.edit()
      },
      async edit(){
        if(!this.form.title||!this.form.content||!this.form.plateName){
          this.$message({
            message: '标题、内容及所属版块均不能为空',
            duration: 2000,
            type: 'error'
          })
          return
        }
        this.form.id = this.loginUserId
        let result = await reqEditArticle(this.form)
        if(result.status===1){
          this.$message({
            message: '修改成功',
            type: 'success'
          });
          this.$router.push('/personalcenter/'+this.loginUserId)
        }else{
          this.$message({
            message: '修改失败',
            type: 'error'
          });
        }
      },
      async reqArticle(){
        let result  = await reqArticleDetail(this.form.articleid)
        this.form.content = result.content
        this.form.title = result.title
        this.form.plateName = result.plateName
        this.editor.html(result.content);
      }
    },
    watch: {

    },
    mounted(){
      this.form.articleid = this.$route.params.articleid
      this.reqArticle()
      this.kind('#editor_id')
        this.$store.dispatch('getAllPlates')
    }
  }
</script>

<style>
  .editArticle{
    padding: 10px;
  }
  .editArticle .editArticle-content{
    background-color: white;
  }
  .mg-top-15{
    margin-top: 15px;
  }
  .editArticle-content{
    padding: 20px 40px;
    padding-bottom: 60px;
  }
  .ke-container-default{
    width: 100%!important;
  }
  .ke-container {
    display: block;
    border: 1px solid #F0F2F2;
  }
  .ke-toolbar {
    border-bottom: 1px solid #F5F6F7;
    background-color: #F5F6F7;
  }
  .ke-statusbar {
    background-color: #F5F6F7;
    border-top: 1px solid #F5F6F7;
  }
  .ke-edit-iframe{
    min-height: 600px;
  }
  .choosePlate{
    width: 30%;
  }

  .ke-edit{
    height: auto!important;
  }
</style>
