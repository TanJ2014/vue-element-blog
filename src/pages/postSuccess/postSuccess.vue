<template>
    <div class="postSuccess">
        <div class="content">
          <p><i class="el-icon-circle-check" style="color:#67C23A">&nbsp;</i><span>发布成功</span></p>
          <div class="btns">
            <el-button type="primary" plain>个人中心</el-button>
            <el-button type="success" plain>查看文章</el-button>
            <el-button type="info" plain>返回</el-button>
          </div>
        </div>
    </div>
</template>

<script>
  export default {

  }
</script>

<style>
.postSuccess{
  /*margin-top: 10px;*/
  min-height: 500px;
  background: #fdfdfd;
  padding-top: 150px;
}
.postSuccess p{
  font-size: 25px;
}
.postSuccess i{
  font-size: 30px;
}
.postSuccess .content{
  width: 400px;
  margin: auto;
  text-align: center;
}
  .postSuccess .btns{
    margin-top: 30px;
  }
</style>
