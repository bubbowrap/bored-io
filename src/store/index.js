import Vue from 'vue'
import Vuex from 'vuex'

import activities from './modules/myActivities'
import randomActivities from './modules/randomActivities'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false
    // activities: [
    //   {
    //     activity: 'Make a bucket list',
    //     type: 'busywork',
    //     participants: 1,
    //     price: 0,
    //     link: 'https://www.google.com',
    //     key: '2735499',
    //     accessibility: 0
    //   },
    //   {
    //     activity: 'Organize a bookshelf',
    //     type: 'busywork',
    //     participants: 1,
    //     price: 0,
    //     link: '',
    //     key: '6098037',
    //     accessibility: 0
    //   },
    //   {
    //     activity: 'Plant a tree',
    //     type: 'recreational',
    //     participants: 1,
    //     price: 0.3,
    //     link: '',
    //     key: '1942393',
    //     accessibility: 0.3
    //   }
    // ]
  },

  modules: {
    activities,
    randomActivities
  }
})
