import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isTrue: true
  },
  getters: {
    isTrue(state) {
      return state.isTrue
    }
  },
  mutations: {
    toggle(state) {
      state.isTrue = !state.isTrue
    }
  },
  actions: {
    toggle(context) {
      context.commit('toggle')
    }
  }
})
