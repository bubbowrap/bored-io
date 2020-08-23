import myActivities from './myActivities'
import axios from 'axios'

const state = {
  myActivities: myActivities.state.activities
}

const mutations = {
  'SAVE_DATA' (payload) {
    axios.post(`${process.env.VUE_APP_DB}/data.json`, payload)
      .then(async res => res)
      .catch(err => console.log(err))
  },
  'LOAD_DATA' () {
    axios.get(`${process.env.VUE_APP_DB}/data.json`)
      .then(res => {
        const data = res.data
        if (myActivities.state.activities.length === 0) {
          for (const key in data) {
            myActivities.state.activities.push(...data[key].myActivities)
          }
        }
      })
      .catch(err => console.log(err))
  },
  'CLEAR_DATA' () {
    axios.put(`${process.env.VUE_APP_DB}/data.json`, [])
      .then(res => res)
      .catch(err => console.log(err))
  }
}

const actions = {
  saveData: async ({ commit }) => {
    await commit('CLEAR_DATA')
    commit('SAVE_DATA', myActivities.state.activities)
  },
  loadData: ({ commit }) => {
    myActivities.state.activities = []
    commit('LOAD_DATA')
  },
  clearData: ({ commit }) => {
    myActivities.state.activities = []
    commit('CLEAR_DATA')
  }
}

export default {
  state,
  mutations,
  actions
}
