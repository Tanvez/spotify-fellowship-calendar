import axios from 'axios'

/*Action Type */
const GOT_EVENTS_FROM_SERVER = 'GOT_EVENTS_FROM_SERVER'
const ADD_EVENT = 'ADD_EVENT'
const UPDATE_EVENT = 'UPDATE_EVENT'

/*Action Creator */
export const gotEventsFromServer = events => {
  return {
    type: GOT_EVENTS_FROM_SERVER,
    events
  }
}

export const addedEvent = singleEvent =>{
  return {
    type:ADD_EVENT,
    singleEvent
  }
}

export const updateEvent = updatedEvent => {
  return {
    type: UPDATE_EVENT,
    updatedEvent
  }
}

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
    .then(event=>{
      dispatch(addedEvent(event))
    })
    .catch(err=> console.log(err))
}

export const editEvent = (id, description, start, end, userId) => dispatch => {
  axios.put('/api/events',{id, description, start, end, userId})
  .then(res=>res.data)
  .then(event=>{
    dispatch(updateEvent(event))
  })
  .catch(err=> console.log(err))
}

/*Reducer */
const reducer = (state = [], action) => {
  switch(action.type){
    case GOT_EVENTS_FROM_SERVER:
      return [...state, ...action.events]
    case ADD_EVENT:
      return [...state, action.singleEvent]
    case UPDATE_EVENT:
     const id = action.updatedEvent.id
      return state.map((event)=>(event.id===id?event=action.updatedEvent:event))
    default:
      return state 
  }
}

export default reducer

