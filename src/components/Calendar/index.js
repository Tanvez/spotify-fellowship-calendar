import React from 'react';
import { connect } from 'react-redux';
import { getEvents} from '../../store'
import './style.css'
//import {SingleDayModal } from '../index'
const Calendar = ({events})=> {
  // state = { show: false };
  // showModal = () => {
  //   this.setState({ show: true });
  // };

  // hideModal = () => {
  //   this.setState({ show: false });
  // };
  // componentDidMount(){
  //   this.props.loadInitialData()
  // }
    //const {events} = this.props
     let dayArray = [];
    
    for(let i = 1; i<=30; i++){
      let eventDescription = ''
      let eventsArr = [] // so we dont mutate the events array from store
    
      if(events){
        for(let evtIdx = 0; evtIdx < events.length; evtIdx++){
          let eventStart = new Date(events[evtIdx].start)
          let eventDay = eventStart.getDate()
          if(eventDay === i){
            eventDescription = events[evtIdx].description
            eventsArr.push(<div className='event-description' key={events[evtIdx].id} >{eventDescription}</div>)
          }
        }
      }
    /*  <SingleDayModal show={this.state.show} handleClose={this.hideModal}>
            TODO ADD SINGLE DAY EVENT VIEW
          </SingleDayModal>
           */

      dayArray.push(
        <div key={i}>
          <div className='grid-item'  > 
            {i} 
            {
              eventsArr.map(evt=>evt)
            }
          </div>
        </div>
      )
    }
    //need to refactor the weekdays!!!
    return (
     
      <div>
      <h1>JUNE 2018</h1>
     
      <div className="grid-container"> 
      <div className='grid-item'>Sun</div>
        <div className='grid-item'>Mon</div>
        <div className='grid-item'>Tues</div>
        <div className='grid-item'>Wed</div>
        <div className='grid-item'>Thurs</div>
        <div className='grid-item'>Fri</div>
        <div className='grid-item'>Sat</div>
      </div>
      <div className="grid-container">
        {dayArray.map(listItem=>{
          return listItem
        })
      }
      </div>
      </div>
    )
  
}

const mapDispatch = (dispatch) => {
  return{
    loadInitialData(){
     dispatch(getEvents())
    }
  }
}

const mapState = (state) => {
  return {
    events:state
  }
}

export default connect(mapState, mapDispatch)(Calendar) 
