import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    visitorId: undefined,
  },
  mutations: {
    setVisitorId: (state, value) => {
      state.visitorId = value;
    }
  },
  actions: {
    setVisitorId: ({commit}, value) => {
      commit('setVisitorId', value)
    }
  },
  modules: {

  },
  getters: {
    getVisitorId: state => state.visitorId
  }
})
