import React from 'react';
import './style.css'
import {SingleDayModal } from '../index'

const Calendar = ({children})=> {
     let dayArray = []
     let events = children
     /*Builds the days and the events for each of those days*/
    for(let i = 1; i<=30; i++){
      let eventDescription = ''
      let eventsArr = []
      if(events){
        for(let evtIdx = 0; evtIdx < events.length; evtIdx++){
          let eventStart = new Date(events[evtIdx].start)
          let eventDay = eventStart.getDate()
          if(eventDay === i){
            eventDescription = events[evtIdx].description
            let eventStart = events[evtIdx].start || ''
            let eventEnd = events[evtIdx].end || ''
            eventsArr.push(evtIdx + '=' +eventDescription + ' start at:' + eventStart + ' end at:' + eventEnd  )
          }
        }
      }

      dayArray.push(
        <div key={i}>
        <div className='grid-item'  > 
        {i} 
        <SingleDayModal day={i} events={eventsArr}/>
            {
              eventsArr.map((evt,idx)=>
                <div className='event-description' style={{'fontSize':10}} key={idx} >
                {evt}
                  <button>delete</button>
                  <button>edit</button>
                </div>
              )
            }
          </div>
        </div>
      )
    }
    //need todo weekdays!!!
    return (
      <div>
      <h1>JUNE 2018</h1>
      <div className="grid-container">
        {dayArray.map(listItem=>{
          return listItem
        })
      }
      </div>
      </div>
    )  
}

export default Calendar
