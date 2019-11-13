const state = {
  membInfo: '111'
}

const getters = {
  getMembInfo (state) {
    return state.membInfo
  }
}
const mutations = {
  setMembInfo (state, info) {
    state.membInfo = info
  }
}
const actions = {
  setMembInfo (context, info) {
    context.commit('setMembInfo', info)
  }
}
export default {
  namespaced: true, // 用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
