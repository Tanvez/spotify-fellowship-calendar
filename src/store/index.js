import axios from 'axios'

/*Action Type */
const GOT_EVENTS_FROM_SERVER = 'GOT_EVENTS_FROM_SERVER'
const ADD_EVENT = 'ADD_EVENT'

/*Action Creator */
export const gotEventsFromServer = events => {
  return {
    type: GOT_EVENTS_FROM_SERVER,
    events
  }
}

// export const addEvent = singleEvent =>{
//   return {
//     type:ADD_EVENT,
//     singleEvent
//   }
// }

/* Thunk */
export const getEvents = ()=> dispatch => 
  axios.get('/api/events')
  .then(res=> res.data)
  .then(events => {
    dispatch(gotEventsFromServer(events))
  })
  .catch(err => console.log(err))

export const addEvent = (description, start, end, userId) => dispatch => {
  axios.post('/api/events', {description, start, end, userId})
    .then(res=>res.data)
    // .then(()=>
    //   history.push('/')
    // )
    .catch(err=> console.log(err))
}

/*Reducer */
const reducer = (state = [], action) => {
  switch(action.type){
    case GOT_EVENTS_FROM_SERVER:
      return [...state, ...action.events]
    default:
      return state 
  }
}

export default reducer

