import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    activities: [
      {
        activity: 'Make a bucket list',
        type: 'busywork',
        participants: 1,
        price: 0,
        link: '',
        key: '2735499',
        accessibility: 0
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
