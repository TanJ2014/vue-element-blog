<template>
    <div class="passedit">
      <el-form class="passedit-form" ref="form" :model="form" label-width="100px">
        <el-form-item label="新密码">
          <el-input v-model="form.pass1" type="password" autocomplete="off"> </el-input>
        </el-form-item>
        <el-form-item label="确认新密码">
          <el-input v-model="form.pass2" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认修改</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import {removeStore} from '../../config/mUtils'
  import {reqEditPassword} from '../../api/index'
    export default {
      data() {
        return {
          form: {
            pass1:'',
            pass2:''
          }
        }
      },
      methods: {
          onSubmit() {
              //     if(this.form.pass1!==this.form.pass2){
              //       this.$message.error('修改失败，两次输入的密码不一致');
              //       return
              //     }else if(!this.form.pass1||!this.form.pass2){
              //       this.$message.error('修改失败，不能为空');
              //       return
              //     }else{
              //       let result = await reqEditPassword(this.form.pass1)
              //       if(result.status===1){
              //         this.$confirm('密码已修改，重新登录?', '提示', {
              //           confirmButtonText: '确定',
              //           cancelButtonText: '取消',
              //           type: 'warning'
              //         }).then(() => {
              //           this.$router.push('/login')
              //           removeStore("bbs_font_userid")
              //           removeStore("bbs_font_username")
              //           this.$store.dispatch('setIsLogin',false)
              //         }).catch(() => {
              //           this.$router.push('/')
              //           removeStore("bbs_font_userid")
              //           removeStore("bbs_font_username")
              //           this.$store.dispatch('setIsLogin',false)
              //         });
              //       }else{
              //         this.$message.success(result.message);
              //         return
              //       }
              //     }
              //   }
              // }
              this.$message({
                  message: '密码已修改，请重新登录',
                  type: 'success'
              });
                  removeStore("bbs_font_userid")
                  removeStore("bbs_font_username")
                  this.$store.dispatch('setIsLogin', false)
              this.$router.push('/')
              // this.$confirm('密码已修改，重新登录?', '提示', {
              //     confirmButtonText: '确定',
              //     cancelButtonText: '取消',
              //     type: 'warning'
              // }).then(() => {
              //     this.$router.push('/login')
              //     removeStore("bbs_font_userid")
              //     removeStore("bbs_font_username")
              //     this.$store.dispatch('setIsLogin', false)
              // }).catch(() => {
              //     this.$router.push('/')
              //     removeStore("bbs_font_userid")
              //     removeStore("bbs_font_username")
              //     this.$store.dispatch('setIsLogin', false)
              // });
          }
      }
    }
</script>

<style>
.passedit{
  padding: 15px 10px;
  min-height: 391px;
}
  .passedit-form{
    margin-top: 15px;
    width: 45%;
  }
</style>
