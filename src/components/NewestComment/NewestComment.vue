<template>
  <div class="newestComment">
    <div class="newestComment_header">
      <h3><i class="el-icon-chat-line-round"></i> 最新评论</h3>
    </div>
    <ul class="newestComment-list">
      <li class="newestComment-item" v-for="(item,index) in newComment">
        <a>{{item.title}}</a>
        <p><span>{{item.nickName}}</span>：{{item.content}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import {reqPersonalNewComment} from "../../api/index"
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        newComment:{}
      }
    },
    computed:{
      ...mapState(['enterUserId'])
    },
    methods:{
      async init(){
          console.log(this.enterUserId)
        if(this.enterUserId!=0){
          this.newComment = await reqPersonalNewComment(this.enterUserId)
        }
      }
    },
    mounted(){
      this.init()
    },
    watch: {
      enterUserId(val){
        this.init()
      }
    }
  }
</script>

<style>
  .newestComment{
    background: white;
    padding: 5px 15px;
  }
  .newestComment_header{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eceff5;
  }
  .newestComment h3{
    font-size: 14px;
    color: #606266;
  }
  .newestComment h3 i{
    color: #67C23A;
  }
  .newestComment-list{
    /*margin-top: 10px;*/
    padding-bottom: 10px;
  }
  .newestComment-list li{
    width: 100%;
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
    line-height: 20px;
  }
  .newestComment .newestComment-item a{
    color: #e69212;
    font-size: 12px;
  }
  .newestComment .newestComment-item p{
    color: #909399;
    font-size: 11px;
    text-overflow:ellipsis;
    overflow:hidden;
    line-height: 20px;
  }
  .newestComment .newestComment-item{
    padding: 4px 0;
    border-bottom: 1px solid #f7f7f5;
  }
  .newestComment .newestComment-item:last-child{
    border-bottom: 0;
  }
  .newestComment-item:hover{
    background:#FAFAFA;;
  }
</style>
