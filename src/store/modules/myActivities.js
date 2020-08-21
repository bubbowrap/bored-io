const state = {
  activities: [
    {
      activity: 'Make a bucket list',
      type: 'busywork',
      participants: 1,
      price: 0,
      link: 'https://www.google.com',
      key: '2735499',
      accessibility: 0,
      completed: false
    },
    {
      activity: 'Organize a bookshelf',
      type: 'busywork',
      participants: 1,
      price: 0,
      link: '',
      key: '6098037',
      accessibility: 0,
      completed: true
    },
    {
      activity: 'Plant a tree',
      type: 'recreational',
      participants: 1,
      price: 0.3,
      link: '',
      key: '1942393',
      accessibility: 0.3,
      completed: false
    }
  ]
}

const mutations = {
  'SET_ACTIVITIES' (state, activities) {
    state.activities = activities
  },
  'DELETE_ACTIVITY' (state, payload) {
    state.activities.splice(state.activities.indexOf(state.activities.find(e => e.key === payload.key)), 1)
  }
}

const actions = {
  initActivities: ({ commit }) => {
    commit('SET_ACTIVITIES')
  },
  deleteActivity: ({ commit }, payload) => {
    commit('DELETE_ACTIVITY', payload)
    console.log(state.activities)
  }
}

const getters = {
  activities: () => {
    return state.activities
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
