import Vue from 'vue'
import Vuex from 'vuex'

import myActivities from './modules/myActivities'
import randomActivities from './modules/randomActivities'
import dataManagement from './modules/dataManagement'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false
  },

  actions: {
    async saveData ({ dispatch, commit }) {
      await dispatch('clearDb')
      commit('SAVE_DATA', myActivities.state.activities)
    }
  },

  modules: {
    myActivities,
    randomActivities,
    dataManagement
  }
})
