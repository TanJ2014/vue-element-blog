<template>
    <div class="userinfo">
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="grid-content bg-purple userTou">
<!--            <img class="userlogo" :src="userinfo.photo" alt="">-->
            <img class="userlogo" src="../../assets/img/timg.jpg" alt="">
            <!--<p class="link">修改头像</p>-->
            <el-button type="text" class="link" @click="dialogFormToux= true">修改头像</el-button>
          </div>
        </el-col>
        <el-col :span="21">
          <div class="grid-content bg-purple">
            <div class="clearfix">
              <p class="fl"><i class="el-icon-postcard" style="color:#67C23A;">&nbsp;</i>ID:{{userinfo.id}}</p>
              <p class="fr link" @click="$router.push('/personalcenter/'+userinfo.id)">个人主页 <i class="el-icon-d-arrow-right"></i></p>
            </div>
            <div>
              <p>
                <span><i class="el-icon-trophy" style="color: #E6A23C">&nbsp;</i>积分：{{userinfo.integral}}</span>
                <el-divider direction="vertical"></el-divider>
                <span><i class="el-icon-s-custom" style="color: #409EFF">&nbsp;</i>身份：{{userinfo.roleName}}</span>
              </p>
            </div>
            <el-divider></el-divider>
            <div class="userinfo-list">
              <ul>
                <li class="userinfo-item clearfix">
                  <p class="fl"><span>用户名：</span><span>{{userinfo.nickName}}</span></p>
                  <el-button type="text" class="fr link" @click="dialogFormVisible = true"><i class="el-icon-edit">&nbsp;</i>修改个人资料</el-button>
                  <!--<p class="fr link"><i class="el-icon-edit">&nbsp;</i>修改个人资料</p>-->
                </li>
                <li class="userinfo-item">
                  <p><span>性别：</span><span>{{userinfo.sex}}</span></p>
                </li>
                <li class="userinfo-item">
                  <p><span>邮箱：</span><span>{{userinfo.email}}</span></p>
                </li>
                <li class="userinfo-item">
                  <p><span>个性签名：</span><span>{{userinfo.signatrue}}</span></p>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
      <!--修改用户信息-->
      <el-dialog title="修改个人信息"  :visible.sync="dialogFormVisible" width="500px">
      <el-form :model="edituserinfo">
        <el-form-item label="用户昵称" :label-width="formLabelWidth">
          <el-input v-model="edituserinfo.nickName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="edituserinfo.sex" placeholder="请选择活动区域">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
            <el-input v-model="edituserinfo.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="个性签名" :label-width="formLabelWidth">
          <el-input type="textarea" placeholder="请输入内容" v-model="edituserinfo.signatrue" maxlength="100" show-word-limit>
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitEdit()">确 定</el-button>
      </div>
      </el-dialog>
      <!--修改用户头像-->
      <el-dialog title="修改头像" width="400px" :visible.sync="dialogFormToux">
        <el-form :model="form">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :auto-upload="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div slot="tip" class="el-upload__tip">只能上传jpg文件，且不超过2MB</div>
          </el-upload>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormToux = false">取 消</el-button>
          <el-button type="primary" @click="upload()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
    import {reqLoginUserInfo,reqEditLoginUserInfo} from '../../api/index'
    import {mapState} from 'vuex'
    export default {
      data(){
        return {
          form:{},
          userinfo:"",
          edituserinfo:{
            nickName:'',
            sex:'',
            email:'',
            signatrue:''
          },
          dialogFormToux:false,
          dialogFormVisible: false,
          formLabelWidth: '80px',
          imageUrl: ''
        }
      },
      computed:{
        ...mapState(['loginUserId'])
      },
      methods: {
        async init(){
          this.userinfo = await reqLoginUserInfo(this.loginUserId)
          this.edituserinfo.nickName = this.userinfo.nickName
          this.edituserinfo.sex = this.userinfo.sex
          this.edituserinfo.email = this.userinfo.email
          this.edituserinfo.signatrue = this.userinfo.signatrue
        },
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        },
        async submitEdit(){
          console.log(this.edituserinfo)
          let result = await reqEditLoginUserInfo(this.edituserinfo)
          if(result.status===1){
            this.$message({
              message: result.message,
              type: 'success'
            });
            this.dialogFormVisible = false
          }else{
            this.$message({
              message: result.message,
              type: 'error'
            });
            this.dialogFormVisible = true
          }
        }
      },
      mounted(){
        this.init()
      }
    }
</script>

<style>
  .userinfo{
    padding: 15px;
    min-height: 391px;
  }
.userinfo .userlogo{
  width: 80px;
  height: 80px;
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
  .userinfo .link{
    font-size: 13px;
    color:#409EFF;
  }
  .userinfo .link:hover{
    cursor: pointer;
  }
  .userinfo .userTou{
    text-align: center;
  }
  .userinfo .userTou p {
    line-height: 26px;
  }
  .userinfo  p{
    font-size: 14px;
    margin-bottom: 20px;
    color: #606266;
  }
  .el-divider--horizontal{
    margin: 20px 0;
  }
  .el-button.link{
    padding: 0;
  }

  /*上传头像*/
  .el-upload{
    margin-left: 91px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-upload__tip{
    text-align: center;
  }
</style>
