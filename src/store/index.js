import axios from 'axios'
const initialState = {
	currentMonth:6, // 1 = Jan and 12 = Dec
	currentYear: 2018,
	events:{
		'1':[{
			start:'1:00PM',
			end: '2:00PM',
			description: 'rock climbing'
      },
      {
        start:'1:00PM',
        end: '2:00PM',
        description: 'rock climbing'
      },
      {
        start:'1:00PM',
        end: '2:00PM',
        description: 'rock climbing'
      }
    ]
	}
}

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

export const addEvent = singleEvent =>{
  return {
    type:ADD_EVENT,
    singleEvent
  }
}

/* Thunk */
export const receivedEvents = () => 
dispatch => dispatch(gotEventsFromServer(initialState.events))

export const getEvents = ()=> axios.get('/api/events')
  .then(res=> res.data)
  .then(events => {
    let event = new Date(
      events[0].start
    ) 
    console.log(event.getUTCMonth()+1)
  })
  .catch(err => console.log(err))


/*Reducer */
const reducer = (state = initialState, action) => {
  switch(action.type){
    case GOT_EVENTS_FROM_SERVER:
      return {...state, events:state.events }
    default:
      return state 
  }
}

export default reducer

