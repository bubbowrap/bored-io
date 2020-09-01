import myActivities from './myActivities'
import axios from 'axios'

const state = {
  myActivities: myActivities.state.activities
}

const mutations = {
  'LOAD_DATA' (state, data) {
    myActivities.state.activities = [...data]
  },

  'CLEAR_DATA' () {
    while (myActivities.state.activities.length > 0) myActivities.state.activities.pop()
  }
}

const actions = {
  saveData: () => {
    axios.delete(`${process.env.VUE_APP_DB}/data.json`)
      .then(() => {
        axios.post(`${process.env.VUE_APP_DB}/data.json`, myActivities.state.activities)
      })
      .catch(err => console.error(err))
  },
  loadData: ({ commit }) => {
    axios.get(`${process.env.VUE_APP_DB}/data.json`)
      .then(res => {
        commit('CLEAR_DATA')
        return res.data
      })
      .then(data => {
        if (myActivities.state.activities.length === 0) {
          for (const key in data) {
            commit('LOAD_DATA', data[key])
          }
        }
      })
      .catch(err => console.error(err))
  },
  clearData: ({ commit }) => {
    commit('CLEAR_DATA')
    axios.delete(`${process.env.VUE_APP_DB}/data.json`)
      .catch(err => console.error(err))
  }
}

export default {
  state,
  mutations,
  actions
}
