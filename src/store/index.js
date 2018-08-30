import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentStatus: 'F A L S E'
  },
  mutations: {
    updateCurrentStatus (state, payload) {
      state.currentStatus = payload
    }
  },
  actions: {
    updateCurrentStatus ({ commit }, payload) {
      commit('updateCurrentStatus', payload)
    }
  }
})
