<template>
  <div class="hotArticle">
    <div class="hotArticle_header">
      <h3><i class="el-icon-star-on"></i> 热门文章</h3>
    </div>
    <ul class="hotArticle-list">
      <li class="hotArticle-item">
        <a>最新文章标题（5篇）最新文章标题（5篇）最新文章标题（5篇）最新文章标题（5篇）</a>
        <p><i class="el-icon-view">&nbsp;</i>阅读量：32423</p>
      </li>
      <li class="hotArticle-item">
        <a>最新文章标题（5篇）最新文章标题（5篇）最新文章标题（5篇）最新文章标题（5篇）</a>
        <p><i class="el-icon-view">&nbsp;</i>阅读量：32423</p>
      </li>
      <li class="hotArticle-item">
        <a>最新文章标题（5篇）最新文章标题（5篇）最新文章标题（5篇）最新文章标题（5篇）</a>
        <p><i class="el-icon-view">&nbsp;</i>阅读量：32423</p>
      </li>
      <li class="hotArticle-item">
        <a>最新文章标题（5篇）最新文章标题（5篇）最新文章标题（5篇）最新文章标题（5篇）</a>
        <p><i class="el-icon-view">&nbsp;</i>阅读量：32423</p>
      </li>
      <li class="hotArticle-item">
        <a>最新文章标题（5篇）最新文章标题（5篇）最新文章标题（5篇）最新文章标题（5篇）</a>
        <p><i class="el-icon-view">&nbsp;</i>阅读量：32423</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .hotArticle{
    background: white;
    padding: 5px 15px;
  }
  .hotArticle_header{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eceff5;
  }
  .hotArticle_header h3{
    font-size: 14px;
    color: #606266;
  }
  .hotArticle_header h3 i{
    color: #F56C6C;
  }
  .hotArticle-list{
    /*margin-top: 10px;*/
    padding-bottom: 10px;
  }
  .hotArticle-list li{
    width: 100%;
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
    line-height: 20px;
  }
  .hotArticle .hotArticle-item a{
    color: #E6A23C;
    font-size: 12px;
  }
  .hotArticle .hotArticle-item p{
    color: #909399;
    font-size: 11px;
  }
  .hotArticle .hotArticle-item{
    padding: 4px 0;
    border-bottom: 1px solid #f7f7f5;
  }
  .hotArticle .hotArticle-item:last-child{
    border-bottom: 0;
  }
  .hotArticle-item:hover{
    background:#FAFAFA;;
  }
</style>
