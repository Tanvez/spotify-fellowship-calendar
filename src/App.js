import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {receivedEvents, getEvents} from './store'
import {SingleDayModal} from './components/index'

class App extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  componentDidMount(){
    this.props.loadInitialData()
  }
  render() {
    const {currentMonth, currentYear, months} = this.props
    let dayArray = [];
    let events = months[currentMonth]
    
    for(let i = 1; i<=31; i++){
      let descript = ''
      let eventsArr = []
      
      if(events[i]){
        for(let evtIdx = 0; evtIdx < events[i].length; evtIdx++){
          descript = events[i][evtIdx].description
          eventsArr.push(<div key = {evtIdx}>{descript}</div>)
        }
      }
      
      dayArray.push(
        <div key={i}>
          <SingleDayModal show={this.state.show} handleClose={this.hideModal}>
            TODO ADD SINGLE DAY EVENT VIEW
          </SingleDayModal>
          <div className='grid-item' onClick={this.showModal} > 
            {i} 
            {
              eventsArr.map(evt=>{
                return evt
              })
            }
          </div>
        </div>
      )
    }
    
    return (
      <div>
      <h1> {currentMonth+' '+currentYear}</h1>
      <div className="grid-container">
        {dayArray.map(listItem=>{
          return listItem
        })
      }
      </div>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return{
    loadInitialData(){
     dispatch(receivedEvents())
     getEvents()
    }
  }
}

const mapState = (state) => {
  return {
    currentMonth: state.currentMonth,
    currentYear: state.currentYear,
    months: state.months
  }
}
export default connect(mapState, mapDispatch)(App) 
