import { api } from '@/util'
import myActivities from './myActivities'

const state = {
  maxNum: 3,
  myActivities: myActivities.state.activities,
  randomActivities: [
    {
      activity: 'Make a bucket list',
      type: 'busywork',
      participants: 1,
      price: 0,
      link: 'https://www.google.com',
      key: '2735499',
      accessibility: 0,
      completed: false
    }
  ]
}

const mutations = {
  'GET_RANDOM' (state) {
    state.randomActivities = []
    const savedActivities = state.myActivities
    for (let i = 0; i < state.maxNum; i++) {
      api.get('/activity')
        .then(res => {
          if (savedActivities.length) {
            if (savedActivities[i].key !== res.data.key) {
              state.randomActivities.push(res.data)
            }
          } else {
            state.randomActivities.push(res.data)
          }
        })
        .catch(err => console.log(err))
    }
  },
  'SAVE_ACTIVITY' (state, payload) {
    payload = { ...payload, completed: false }
    state.myActivities.unshift(payload)
    console.log(state.myActivities)
  }
}

const actions = {
  getRandom: ({ commit }) => {
    commit('GET_RANDOM')
  },
  saveActivity: ({ commit }, payload) => {
    commit('SAVE_ACTIVITY', payload)
  }
}

const getters = {
  randomActivities: () => {
    return state.randomActivities
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
