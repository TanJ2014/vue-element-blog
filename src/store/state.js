export default {
  allPlates:[],//保存所有版块名和id
  homeSelectPlate:0,//首页中被选中的版块id,默认为0
  centerSelectPlate:0,//个人中心页面选中的版块，默认为0
  centerSelectPlateName:"",//个人中心页面选中的版块名称

  enterUserCenterId:"",//进入的用户中心，该用户的ID
  // hotPlates:[],//保存热门的版块
  topIntegralUser:[],//积分牛人

  hotArticleList:[], //最热
  hotArticleListLen:0,//最热的长度
  newArticleList:[], //最新
  newArticleListLen:0,//最新的长度

  isLogin:false,//判断是否登录
  loginUserId:0,//登录的用户id
  loginUserName:"",//登录的用户名
  enterUserId:0,//进入了哪个用户的用户中心

  articleComment:[],//文章的所有评论
}
