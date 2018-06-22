import axios from 'axios'
const initialState = {
	currentMonth:'JUNE', 
	currentYear: '2018',
	months: {
    'JANUARY':{'1':[{}]},
    'JUNE':
      {
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
      ],
      '2':[{}]
    }
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

export const getEvents = ()=>  axios.get('/api/events')
  .then(res=> res.data)
  .then(events => {
    let event = new Date(
      events[0].start // is an array of events
    ) 
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let singleMonth = months[event.getMonth()]
    
    console.log(singleMonth,  weekdays[event.getDay()], event.getDate())
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

