import ajax from "./ajax";
//1.获取所有版块
export const reqAllPlates = () => ajax(`/home/allPlates`)
//2.获取文章列表
export const reqArticleList = (plateId,type,userId,pageNum) => ajax(`/articleList`,{plateId:plateId,type:type,userId:userId,pageNum:pageNum})
//3.搜索文章
export const reqSearchArticle = (keyword,pageNum) => ajax(`/searchArticle`,{keyword:keyword,pageNum:pageNum})
//4.获取积分前二十的用户 积分牛人
export const reqTopIntegralUser = () => ajax(`/home/topIntegralUser`)
//5.根据文章id获取文章详情
export const reqArticleDetail = (id) => ajax(`/articledetail/${id}`)
//6.根据文章id获取评论
export const reqArticleComment = (id) => ajax(`/articlecomment/${id}`)

//根据用户id获取他的文章数、积分数....
export const reqPersonalProfile = (id) => ajax("/personal/profile",{id:id})
//根据用户id统计他在各个版块中的文章数
export const reqPersonalClassify = (id) => ajax("/personal/classify",{id:id})
//根据用户id显示她最新的评论
export const reqPersonalNewComment = (id) => ajax("/personal/newComment",{id:id})

//10.登录
export const reqLogin = (data) => ajax(`/login`,data,'POST')
//10.注册
export const reqReg = (data) => ajax(`/register`,data,'POST')
//11.退出
export const reqLogout= () => ajax(`/logout`)
//12.发布文章
export const reqPostArticle= (data) => ajax(`/postarticle`,data,'POST')
//13.编辑文章
export const reqEditArticle= (data) => ajax(`/editarticle`,data,'POST')
//14.删除文章
export const reqDelArticle= (id) => ajax(`/delarticle/${id}`)
//15.获取登录用户的个人信息
export const reqLoginUserInfo= (id) => ajax(`/loginuserinfo/${id}`)
//16.修改登录用户的个人信息
export const reqEditLoginUserInfo= (data) => ajax(`/editloginuserinfo`,data,"POST")
//17.修改密码
export const reqEditPassword= (data) => ajax(`/editpassword`,data,"POST")
//18.根据id获取用户的个性签名
export const reqEnteruser = (id) => ajax("/enteruser",{id:id})


//评论文章
export const reqCommentArticle = (data) => {
  console.log(data)
  ajax('/commentarticle',data,'POST')
}
//回复评论
export const reqReplyArticle = (data) => ajax('/replyarticle',data,'POST')
//删除评论
export const reqDelComment = (id) => ajax('/delcomment',{id:id})
//删除回复
export const reqDelReply = (id) => ajax('/delreply',{id:id})

