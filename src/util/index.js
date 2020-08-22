import axios from 'axios'

const api = axios.create({
  baseURL: 'https://www.boredapi.com/api'
})

const removeItem = (activityArray, payload) => {
  activityArray.splice(activityArray.indexOf(activityArray.find(e => e.key === payload.key)), 1)
}

const getActivity = (state) => {
  api.get('/activity')
    .then(res => {
      const ifExist = state.myActivities.some(activity => activity.key === res.data.key ? true : null)
      if (!ifExist) {
        state.randomActivities.push(res.data)
      } else {
        getActivity(state)
      }
    })
    .catch(err => console.log(err))
}

export { getActivity, removeItem }
