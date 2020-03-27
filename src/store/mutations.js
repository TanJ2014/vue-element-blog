import {
  RECEIVE_ALLPLATES,
  RECEIVE_TOPINTEGRALUSER,
  SET_HOMESELECTPLATE,
  SET_CENTERSELECTPLATEE,
  RECEIVE_HOTARTICLELIST,
  RECEIVE_NEWARTICLELIST,
  SET_ENTERUSERID,
  SET_LOGINUSERNAME,
  SET_ISLOGIN,
  SET_LOGINUSERID, SET_CENTERSELECTPLATEENAME,
  RECEIVE_ARTICLECOMMENT
} from './mutation-types'

export default {
  [RECEIVE_ALLPLATES](state,allPlates){
    state.allPlates = allPlates
  },
  [RECEIVE_TOPINTEGRALUSER](state,topIntegralUser){
    state.topIntegralUser = topIntegralUser
  },
 [SET_HOMESELECTPLATE](state,homeSelectPlate){
    state.homeSelectPlate = homeSelectPlate
  },
  [SET_CENTERSELECTPLATEE](state,centerSelectPlate){
    state.centerSelectPlate = centerSelectPlate
  },
  [SET_CENTERSELECTPLATEENAME](state,centerSelectPlateName){
    state.centerSelectPlateName = centerSelectPlateName
  },
  [SET_ENTERUSERID](state,enterUserId){
    state.enterUserId = enterUserId
  },
  [SET_LOGINUSERNAME](state,enterUserId){
    state.enterUserId = enterUserId
  },
  [SET_LOGINUSERID](state,loginUserId){
    state.loginUserId = loginUserId
  },
  [SET_ISLOGIN](state,isLogin){
    state.isLogin = isLogin
  },
  [RECEIVE_HOTARTICLELIST](state,hotArticleList){
    state.hotArticleList = hotArticleList.articleLists
    state.hotArticleListLen = hotArticleList.allLength
  },
  [RECEIVE_NEWARTICLELIST](state,newArticleList){
    state.newArticleList = newArticleList.articleLists
    state.newArticleListLen = newArticleList.allLength
  },
  [RECEIVE_ARTICLECOMMENT](state,articleComment){
    state.articleComment = articleComment
  }
}

