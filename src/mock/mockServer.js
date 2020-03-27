//使用mock.js提供mock数据接口
import Mock from 'mockjs'
import data from './data.json'


Mock.mock('/home/allPlates',data.allPlates)
Mock.mock('/home/topIntegralUser',data.topIntegralUser)

// userId = 1 就是模拟登录用户的I，其余的userId是别的用户
//登录用户的个人中心的文章 userId = 1
Mock.mock(/\/articleList\?plateId=\d+&type=2&userId=1&pageNum=\d+/,data.centerHotArticleList)
Mock.mock(/\/articleList\?plateId=\d+&type=1&userId=1&pageNum=\d+/,data.centerNewArticleList)
//首页的文章列表 userId = 0
Mock.mock(/\/articleList\?plateId=\d+&type=1&userId=0&pageNum=\d+/,data.homeNewArticleList)
Mock.mock(/\/articleList\?plateId=\d+&type=2&userId=0&pageNum=\d+/,data.homeHotArticleList)
//剩下被拦截的是 别的用户的个人中心文章 userId 除0 1之外
Mock.mock(/\/articleList\?plateId=\d+&type=1&userId=\d+&pageNum=\d+/,data.otherNewArticleList)
Mock.mock(/\/articleList\?plateId=\d+&type=2&userId=\d+&pageNum=\d+/,data.otherHotArticleList)

Mock.mock('/articledetail/1',data.articledetail)
Mock.mock('/articledetail/4',data.articledetail4)
Mock.mock(/\/articledetail\/\d+/,data.articledetail2)
Mock.mock(/\/articlecomment\/\d+/,data.articlecomment)

Mock.mock('/login',data.login)
Mock.mock('/logout',data.logout)
Mock.mock('/postarticle',data.postarticle)
Mock.mock('/editarticle',data.editarticle)
Mock.mock('/editarticle',data.editarticle)
Mock.mock('/delarticle/1',data.delarticle)
Mock.mock('/loginuserinfo/1',data.loginuserinfo)
Mock.mock('/editloginuserinfo',data.editloginuserinfo)
Mock.mock('/editpassword',data.editpassword)
Mock.mock('/register',data.register)

Mock.mock('/personal/profile?id=1',data.profile3)
Mock.mock(/\/personal\/profile\?id=\d+/,data.profile4)

Mock.mock('/personal/classify?id=1',data.classify)
Mock.mock(/\/personal\/classify\?id=\d+/,data.classify4)

Mock.mock('/personal/newComment?id=1',data.newComment)
Mock.mock(/\/personal\/newComment\?id=\d+/,data.newComment4)
Mock.mock('/commentarticle',data.commentarticle)
Mock.mock('/replyarticle',data.replyarticle)
Mock.mock('/delcomment?id=1',data.delcomment)
Mock.mock('/delreply?id=12',data.delreply)
Mock.mock(/\/searchArticle\/*/,data.searchArticle)

Mock.mock(/\/enteruser\?id=1$/,data.enteruser1)
Mock.mock(/\/enteruser\?id=\d+/,data.enteruser4)
