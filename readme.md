# 基于vue-cli + element-ui + mock.js搭建的博客平台

# 写在前面

该系统原本是知识共享平台，使用的是前后端分离的架构模式。后台基于Spring、SpringMVC、MyBatis当下主流框架编写，前端使用VUE.js框架，Element框架,页面简洁大方，它与知识共享平台后台管理系统（后台系统的前端代码已经上传github）配套使用，两者使用同一数据库，知识共享平台以及知识共享平台后台管理系统都已申请软件著作权。这里我将该平台的前端部分抽取出来作为博客系统分享，使用了Mock.js来模拟后台数据。仅供学习参考，切勿用于商业目的。

# 主要功能

本系统分为未登录的用户与已登录的用户两种用户，未登录的用户即游客可以浏览文章、查看文章的相关评论、搜索文章等功能，登录的用户不仅可以进行以上操作，还可以发表文章、编辑删除文章、发表评论、删除回复评论、编辑个人信息等。

# 项目启动

进入项目的根目录，输入以下命令，即可启动

```
cnpm install
cnpm start
```

或者：

```
npm install
npm start
```

启动成功后打开 http://localhost:8080 即可访问，随意输入用户名与密码即可登录

在线预览 https://tanj2014.github.io/vue-element-blog/dist/index.html#/

# 相关API：

# 1.获取所有版块

### 请求URL

http://localhost:8080/home/allPlates

### 请求方式

get

### 参数类型

无  

### 返回示例

```
[
	{
		"id":1，//版块id
		"plateName":"VUE框架"，
		"description":"这是讨论VUE的地方"，
		"articleNum":123，//版块内的文章数量
	}，
	{
		......
	}
]
```

# 2.获取文章列表

### 请求URL

http://localhost:8080/articleList?plateId=1&type=1&userId=0&pageNum=1

### 请求方式

get

### 参数列表

| 参数    | 是否必须 | 类型 | 说明                                                         |
| ------- | -------- | ---- | ------------------------------------------------------------ |
| plateId | Y        | int  | id:版块id,默认为0 ，表示所有版块。                           |
| type    | Y        | int  | type="1" 表示最新 type="2"表示最热                           |
| userId  | Y        | int  | 默认为0，表示首页中的文章列表。为1，2，3则表示用户id为1，2，3的用户中心的文章列表 |
| pageNum | Y        | int  | 默认为1，第一页   默认一页十条                               |

### 返回示例

```
{
	"allLength":100,//文章列表的总长度
	"articleLists":[ //获取的文章列表
		{
			"id":1，//文章的id
			"title":"这是文章的标题"，
			"content":"这是文章的文字内容嘛？"
			"userId":1，//用户的id
			"nickName":"tanjiajia"，//用户名
			"publishTime":"20020-32-2"，//发表的时间
			"clickNum":1202，//阅读量
			"commentNum":1221，//评论数
		}，
		{
			。。。。
		}
	]
}
```

# 3.搜索文章

### 请求URL

http://localhost:8080/articleList?keyword="vue"

### 请求方法

get

### 参数列表

| 参数    | 是否必须 | 类型   | 说明                               |
| ------- | -------- | ------ | ---------------------------------- |
| type    | Y        | int    | type="1" 表示最新 type="2"表示最热 |
| pageNum | Y        | int    | 默认为1，第一页，默认一页十个      |
| keyword | Y        | string | 关键词 （文章名 模糊搜索）         |

### 返回示例

```
{
	"allLength":100,//文章列表的总长度
	"searchLists":[ //获取的文章列表
		{
			"id":1，//文章的id
			"title":"这是文章的标题"，
			"content":"这是文章的文字内容嘛？"
			"userId":1，//用户的id
			"nickName":"tanjiajia"，//用户名
			"publishTime":"20020-32-2"，//发表的时间
			"clickNum":1202，//阅读量
			"commentNum":1221，//评论数
		}，
		{
			。。。。
		}
	]
}
```



# 4.获取积分牛人

### 请求URL

http://localhost:8080/home/topIntegralUser

### 请求方式

get

### 参数列表

无

### 返回示例

（默认获取积分数最多的前二十个人，按顺序返回）

```
[
	{
		"id":1，//用户的id
		"integral":1234，
		"nickName":"tanjiajia"，
		"signatrue":"这是我的个性签名"，
		"photo":"https://cn.vuejs.org/images/logo.png"//头像的地址
	},
	.....
]
```

# 5.查看文章详情

### 请求URL

http://localhost:8080/articledetail/:id

### 示例

http://localhost:8080/articledetail/1

### 请求方式

get

### 参数列表

| 参数 | 是否必须 | 类型 | 说明     |
| ---- | -------- | ---- | -------- |
| id   | Y        | int  | 文章的id |

### 返回示例

```
{
	"userId":1，//该文章的作者id
	"nickName":"tanjj"，//作者的名字
	"title":"文章的标题"，
	"publishTime":"2343-43-43"，//文章发布的时间
	"clickNum":233，//阅读量
	"plateId":1,//所属的版块id
	"plateName":"学习"，//文章所属版块
	"content":"sdsdsd",//文章的内容
}
```

# 6.获取文章的评论

### 请求URL

http://localhost:8080/articlecomment/:articleid

### 示例

http://localhost:8080/articlecomment/1

### 请求方式

get

### 参数列表

| 参数      | 是否必须 | 类型 | 说明     |
| --------- | -------- | ---- | -------- |
| articleid | Y        | int  | 文章的id |

### 返回示例

```
[
	{
	  id: '12', //评论的id
      updataDate: '2018-07-05 08:30',  //评论时间
      topicId: '122', //文章的id
      userId: '121',  //评论者id
      nickName: '犀利的评论家',   //评论者昵称
      photo: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //评论者头像
      content: '非常靠谱的程序员',  //评论内容
      reply: [  //回复
        {
          id: '12',  //回复的id
          commentId: '121',  //父评论id，即父亲的id
          userId: '22',  //评论者id
          nickName: '夕阳红',  //评论者昵称
          photo: 'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg', //评论者头像
          toId: '12',  //被评论者id
          toName: '犀利的评论家',  //被评论者昵称
          toPhoto: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg',  //被评论者头像
          content: '赞同，很靠谱，水平很高',  //评论内容
          updataDate: '2018-07-05 08:35'   //评论时间
        },
         {
          id: '12',  //id
          commentId: '121',  //父评论id，即父亲的id
          userId: '22',  //评论者id
          nickName: '夕阳红',  //评论者昵称
          photo: 'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg', //评论者头像
          toId: '12',  //被评论者id
          toName: '犀利的评论家',  //被评论者昵称
          toPhoto: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg',  //被评论者头像
          content: '赞同，很靠谱，水平很高',  //评论内容
          updataDate: '2018-07-05 08:35'   //评论时间
        }
      ]
	},
	{
		......
	}
]
```

# 7.删除评论

（注意删除某条评论它的所有回复也会被删除）

### 请求URL

http://localhost:8080/deleteCommnet

### 示例

### 请求方式

get

### 参数列表

| 参数 | 是否必须 | 类型 | 说明     |
| ---- | -------- | ---- | -------- |
| id   | Y        | int  | 评论的id |

### 返回示例

```
{
	"status":1,
	"message":"删除成功"
}
```

# 8.删除回复

### 请求URL

http://localhost:8080/deleteReply

### 示例

### 请求方式

get

### 参数列表

| 参数 | 是否必须 | 类型 | 说明     |
| ---- | -------- | ---- | -------- |
| id   | Y        | int  | 回复的id |

### 返回示例

```
{
	"status":1,
	"message":"删除回复成功"
}
```



# 用户中心

# 9.用户简介

### 请求URL

http://localhost:8080/personal/profile

### 示例

http://localhost:8080/personal/profile?id=4

### 请求方式

get

### 参数列表

| 参数 | 是否必须 | 类型 | 说明     |
| ---- | -------- | ---- | -------- |
| id   | Y        | int  | 用户的id |

### 返回示例

```
{
	"nickName":"tanjiajia"，
	"photo":"https://cn.vuejs.org/images/logo.png"，
	"articleNum":1000，
	"commentNum":1292，
	"visitNum":1000，//访问量 所有文章的阅读量之和
	"integral":1000，//积分
}
```

# 10.文章分类

根据用户的id获取他发表的文章在哪些版块

### 请求URL

http://localhost:8080/personal/classify

### 请求方式

get

### 参数列表

| 参数 | 是否必须 | 类型 | 说明     |
| ---- | -------- | ---- | -------- |
| id   | Y        | int  | 用户的id |

### 返回示例

```
[
	{
		"id":2，//版块id
		"plateName":"学习"，//版块名称
		"articleNum":123，//用户在该版块内的文章数目
	}，
	{
		......
	}，
]
```

# 11.用户的最新评论

### 请求URL

http://localhost:8080/personal/newComment

### 请求方式

get

### 参数列表

| 参数 | 是否必须 | 类型 | 说明     |
| ---- | -------- | ---- | -------- |
| id   | Y        | int  | 用户的id |

### 返回示例

```
[
	{
		"userId":1，//评论者的id（注意不是被评论者的id）
		"nickName":"评论者的名字"，
		"content":"评论的内容"，
		"topicId":1，//被评论的文章的id
		"title":"被评论的文章标题"
	}，
	{
		....
	}
]
```

# 12.登录

### 请求URL

http://localhost:8080/login

### 请求方式

post

### 参数列表

| 参数     | 是否必须 | 类型   | 说明 |
| -------- | -------- | ------ | ---- |
| {        |          |        |      |
| nickName | Y        | string |      |
| password | Y        | string |      |
| }        |          |        |      |

### 返回示例

```
{
	status:1,
	id:1,//用户的id
	nickName:"tanjj",
	message:"登录成功！"
}
或者
{
	status:0,
	message:"用户名/密码错误！"
}
```

# 13.注册

### 请求URL

http://localhost:8080/register

### 请求方式

post

### 参数列表

| 参数     | 是否必须 | 类型   | 说明 |
| -------- | -------- | ------ | ---- |
| {        |          |        |      |
| nickName | Y        | string |      |
| password | Y        | string |      |
| }        |          |        |      |

### 返回示例

```
{
	status:1,
	message:"注册成功！"
}

{
	status:0,
	message:"用户名已存在！"
}
```

# 14.退出登录

### 请求URL

http://localhost:8080/logout

### 请求方式

get

### 参数列表

无

### 返回示例

```
{
	status:1,
	message:"退出成功！"
}
```

# 15.评论文章

### 请求URL

http://localhost:8080/commentarticle

### 请求方式

post

### 参数列表

| 参数    | 是否必须 | 类型   | 说明     |
| ------- | -------- | ------ | -------- |
| {       |          |        |          |
| topicId | Y        | int    | 文章id   |
| content | Y        | string | 评论内容 |
| userId  | Y        | int    | 评论人id |
| }       |          |        |          |

### 返回示例

```
{
	status:"1",
	message:"文章评论"
}
```

# 16.回复评论

### 请求URL

http://localhost:8080/replyarticle

### 请求方式

post

### 参数列表

| 参数      | 是否必须 | 类型   | 说明                                     |
| --------- | -------- | ------ | ---------------------------------------- |
| {         |          |        |                                          |
| topicId   | Y        | int    | 文章id                                   |
| content   | Y        | string | 评论内容                                 |
| toId      | Y        | int    | 被评论人的id                             |
| userId    | Y        | int    | 评论人id（肯定是当前登录的用户）         |
| commentId | Y        | int    | 父评论id（该评论是哪一个父评论下的回复） |
| }         |          |        |                                          |

### 返回示例

```
{
	status:"1",
	message:"回复成功"
}
```

# 17.发布文章

### 请求URL

http://localhost:8080/postarticle

### 请求方式

post

### 参数列表

| 参数    | 是否必须 | 类型   | 说明       |
| ------- | -------- | ------ | ---------- |
| {       |          |        |            |
| title   | Y        | string | 文章的标题 |
| content | Y        |        | 文章的内容 |
| plate   | Y        | int    | 版块的id   |
| }       |          |        |            |

### 返回示例

```
{
	status:1，//1表示发布成功，0表示发布失败
	message:"文章发布成功"，
}
```



# 18.编辑文章

### 请求URL

http://localhost:8080/editarticle

### 请求方式

post

### 参数列表

| 参数      | 是否必须 | 类型   | 说明             |
| --------- | -------- | ------ | ---------------- |
| {         |          |        |                  |
| title     | Y        | string | 文章的标题       |
| content   | Y        |        | 文章的内容       |
| plate     | Y        | int    | 版块的id         |
| articleid | Y        | int    | 被修改的文章的id |
| }         |          |        |                  |

### 返回示例

```
{
	status:1，//1表示发布成功，0表示发布失败
	message:"文章修改成功"，
}
```

# 19.删除文章

### 请求URL

http://localhost:8080/deletarticle/:id

### 请求方式

get

### 参数列表

| 参数 | 是否必须 | 类型 | 说明   |
| ---- | -------- | ---- | ------ |
| id   | Y        | int  | 文章id |

### 返回示例

```
{
	"status":1,
	"message":"删除成功"
}
```

# 20.获取用户个人信息

### 请求URL

http://localhost:8080/loginuserinfo/:id

### 示例

http://localhost:8080/loginuserinfo/1

### 请求方式

get

### 参数列表

| 参数 | 是否必须 | 类型 | 说明     |
| ---- | -------- | ---- | -------- |
| id   | Y        | int  | 用户的id |

### 返回示例

```
{
	id：1，
	integral：100，
	roleName:普通用户,
	nickName:tanjj,
	sex:女，
	email:229@qq.com,
	signatrue:"这是俺的个性签名"，
	photo:"../../assets/img/userTou.jpg"
}
```

# 21.修改个人信息

### 请求URL

http://localhost:8080/editloginuserinfo/1

### 请求方式

post

### 参数列表

| 参数      | 是否必须 | 类型   | 说明                       |
| --------- | -------- | ------ | -------------------------- |
| {         |          |        |                            |
| nickName  | N        | string | 用户名（后台判断不能重复） |
| sex       | N        | string | 性别                       |
| email     | N        | string | 邮箱                       |
| signatrue | N        | string | 个性签名                   |
| }         |          |        |                            |

### 返回示例

```
{
	status:1,//1：修改成功，0：修改失败
	message:"修改成功"，//“用户名重复，修改失败！”
}
```



# 22.上传头像

### 请求URL

### 请求方式

### 参数列表

### 返回示例

# 23.修改密码

### 请求URL

http://localhost:8080/editpassword

### 请求方式

post

### 参数列表

| 参数     | 是否必须 | 类型   | 说明   |
| -------- | -------- | ------ | ------ |
| password | Y        | string | 新密码 |

### 返回示例

```
{
	status:1，
	message:"修改密码成功"，//“0：与旧密码一样，修改失败”
}
```

# 23.个性签名

### 请求URL

http://localhost:8080/enteruser

### 请求方式

get

### 参数列表

| 参数 | 是否必须 | 类型 | 说明           |
| ---- | -------- | ---- | -------------- |
| id   | Y        | int  | 进入的用户中心 |

### 返回示例

```
{
	nickName:"tanjia",
	signature:"我的个性签名"
}
```

