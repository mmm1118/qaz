import cookie from '../utils/store'

const mutations = {
  ADDCOUNT(state) {
    state.count++
  },
  SUBCOUNT(state) {
    state.count--
  },
  CHANGENAVSHOW(state) {
    state.isShowNav = true
  },
  CHANGENAVHIDE(state) {
    state.isShowNav = false
  },
  SAVETOKEN(state,user) {
    console.log(user)
    state.userName = user.userName;
    state.token = user.token;

    cookie.setCookie('userName',user.userName)
    cookie.setCookie('token',user.token)

  },
  REMOVETOKEN(state) {

  }
}

export default mutations
