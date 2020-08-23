import myActivities from './myActivities'
import axios from 'axios'

const state = {
  myActivities: myActivities.state.activities
}

const mutations = {
  'SAVE_DATA' (payload) {
    axios.delete(`${process.env.VUE_APP_DB}/data.json`).then(() => {
      axios.post(`${process.env.VUE_APP_DB}/data.json`, payload)
        .catch(err => console.error(err))
    }
    )
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
    axios.delete(`${process.env.VUE_APP_DB}/data.json`)
      .catch(err => console.log(err))
  }
}

const actions = {
  saveData: async ({ commit }) => {
    await commit('SAVE_DATA', myActivities.state.activities)
  },
  loadData: async ({ commit }) => {
    await commit('LOAD_DATA')
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
