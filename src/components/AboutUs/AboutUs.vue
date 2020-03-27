<template>
    <div class="aboutUs">
      <div class="aboutUs_header">
        <h3><i class="el-icon-info"></i> 关于我们</h3>
      </div>
      <div>
        <img class="banner3" src="../../assets/img/banner4.png" alt="">
        <div class="aboutUs_txt">
          <p><i class="el-icon-message" style="color: #67C23A"></i>&nbsp;邮政编码：430062</p>
          <p><i class="el-icon-location"  style="color: #67C23A"></i>&nbsp;地址：湖北武汉市武昌区</p>
          <p>www.tanj.com.cn</p>
        </div>
      </div>

    </div>
</template>

<script>
    export default {}
</script>

<style>
.aboutUs{
  background: white;
  min-height: 280px;
  padding: 5px 15px;
}
.aboutUs_header{
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eceff5;
}
.aboutUs_header h3{
  font-size: 14px;
  color: #606266;
}
.aboutUs_header h3 i{
  color: #E6A23C;
}
.aboutUs .banner3{
  width: 100%;
  height: 110px;
  margin-top: 15px;
}
.aboutUs .aboutUs_txt{
  margin-top: 15px;
  color: #909399;
  font-size: 12px;
  line-height: 20px;
}
.aboutUs .aboutUs_txt p:last-child{
  font-size: 11px;
  line-height: 43px;
  color: #C0C4CC;
  text-align: center;
}
</style>
