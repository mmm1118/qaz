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
  }
}

export default mutations
