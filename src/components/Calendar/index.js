import React from 'react';
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';

import './style.css'
import {SingleDayModal } from '../index'


const Calendar = ({month, monthIdx, events})=> { 
     let dayArray = []
  
     const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
     const firstDayMonth = new Date(month+' 1, 2018')// hard coded
     const numberOfDays = new Date(2018,monthIdx+1, 0).getDate();
     let spacers = new Array(firstDayMonth.getDay()).fill('');
    
     //creates spacer to match up day of the week
    spacers.forEach((space, idx)=>{
      dayArray.push(<div className='grid-item' key={idx+'spacer'}>{space}</div>)
    }) 

      
     /*Builds the days and the events for each of those days*/
    for(let i = 1; i<=numberOfDays; i++){
      let eventsArr = []
      if(events){
        for(let evtIdx = 0; evtIdx < events.length; evtIdx++){
          let eventStart = new Date(events[evtIdx].start)
          let eventDay = eventStart.getDate()
          if(eventDay === i){
           eventsArr.push(events[evtIdx])
          }
        }
      }

      dayArray.push(
        <div key={i}>
        <div className='grid-item'> 
        {i} 
        <SingleDayModal month={month} day={i} action={'Add Event'}/>
            {
              eventsArr.map((evt,idx)=>
                <div className='event-description' style={{'fontSize':15}} key={idx} >
                { evt.description + ' start at:' + evt.start + ' end at:' + evt.end}
                <SingleDayModal month={month} day={i} action={'Edit Event'} event ={evt} />
                  <Button
                  variant="contained" 
                  size = 'small'
                  color="secondary"
                  style={{'fontSize':10}}>
                  Delete</Button>
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
      <h1>{month} 2018</h1>
      <div className="grid-container">
      {weekdays.map((day,idx)=>{
        return (<div className= "grid-item" key={idx+'day'} >{day}</div>)
      })}
        {dayArray.map(listItem=>{
          return listItem
        })
      }
      </div>
      </div>
    )  
}

const mapState = (state, {monthIdx})=>{

  //filter state by month
  const filterState = state.filter(event=>{
    let eventStart = new Date(event.start).getMonth()
    return eventStart  === monthIdx 
  })

  return {
    events:filterState
  }
}

export default connect(mapState)(Calendar)
