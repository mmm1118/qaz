
const actions = {
  ADDCOUNT:({commit}) => {
    commit('ADDCOUNT')
  },
  SUBCOUNT:({commit}) => {
    commit('SUBCOUNT')
  },
  CHANGENAVSHOW:({commit}) => {
    commit('CHANGENAVSHOW')
  },
  CHANGENAVHIDE:({commit}) => {
    commit('CHANGENAVHIDE')
  },
  SAVETOKEN:({commit,user}) => {
    console.log(user)
    commit('SAVETOKEN',user)
  },
  REMOVETOKEN:({commit}) => {
    commit('REMOVETOKEN')
  }
}

export default actions
