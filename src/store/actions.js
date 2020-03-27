import {
  RECEIVE_ALLPLATES,
  RECEIVE_TOPINTEGRALUSER,
  SET_HOMESELECTPLATE,
  SET_CENTERSELECTPLATEE,
  SET_ISLOGIN,
  SET_LOGINUSERID,
  SET_LOGINUSERNAME,
  SET_ENTERUSERID,
  RECEIVE_NEWARTICLELIST,
  RECEIVE_HOTARTICLELIST,
  SET_CENTERSELECTPLATEENAME,
  RECEIVE_ARTICLECOMMENT
} from './mutation-types'

import {
  reqAllPlates,
  reqTopIntegralUser,
  reqArticleList,
  reqArticleComment
} from '../api/index'

export default {
  async getAllPlates({commit}){
    const result = await reqAllPlates()
    commit(RECEIVE_ALLPLATES,result)
  },
  async getTopIntegralUser({commit}){
    const result = await reqTopIntegralUser()
    commit(RECEIVE_TOPINTEGRALUSER,result)
  },
  setHomeSelectPlate({commit},plateid){
    commit(SET_HOMESELECTPLATE,plateid)
  },
  setCenterSelectPlate({commit},plateid){
    commit(SET_CENTERSELECTPLATEE,plateid)
  },
  setCenterSelectPlateName({commit},plateName){
    commit(SET_CENTERSELECTPLATEENAME,plateName)
  },
  setIsLogin({commit},isLogin){
    commit(SET_ISLOGIN,isLogin)
  },
  setLoginUserId({commit},loginUserId){
    commit(SET_LOGINUSERID,loginUserId)
  },
  setLoginUserName({commit},loginUserName){
    commit(SET_LOGINUSERNAME,loginUserName)
  },
  setEnterUserId({commit},enterUserId){
    commit(SET_ENTERUSERID,enterUserId)
  },
  async getNewArticleList({commit},{plateid,userid,pageNum}){
    const result = await reqArticleList(plateid,1,userid,pageNum)
    commit(RECEIVE_NEWARTICLELIST,result)
  },
  async getHotArticleList({commit},{plateid,userid,pageNum}){
    const result = await reqArticleList(plateid,2,userid,pageNum)
    commit(RECEIVE_HOTARTICLELIST,result)
  },
  async getArticleComment({commit},{articleid}){
    const result = await reqArticleComment(articleid)
    commit(RECEIVE_ARTICLECOMMENT,result)
  }
}
