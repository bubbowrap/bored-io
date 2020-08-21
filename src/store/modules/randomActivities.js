import { removeItem, getActivity } from '@/util'
import myActivities from './myActivities'

const state = {
  maxNum: 3,
  myActivities: myActivities.state.activities,
  randomActivities: []
}

const mutations = {
  'SAVE_ACTIVITY' (state, payload) {
    payload = { ...payload, completed: false }
    state.myActivities.unshift(payload)
    removeItem(state.randomActivities, payload)
  }
}

const actions = {
  getRandom: () => {
    state.randomActivities = []
    for (let i = 0; i < state.maxNum; i++) {
      getActivity(state)
    }
  },
  saveActivity: ({ commit }, payload) => {
    commit('SAVE_ACTIVITY', payload)
    let i = state.randomActivities.length
    while (i < state.maxNum) {
      getActivity(state)
      i++
    }
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
