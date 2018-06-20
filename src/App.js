import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {receivedEvents} from './store'
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
    const {events} = this.props
    let dayArray = [];
    for(let i = 1; i<=31; i++){
      let descript = ''
      let eventsArr = []
      if(events[i]){
        descript = events[i][0].description
        for(let evtIdx = 0; evtIdx < events[i].length; evtIdx++){
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
      <h1> JUNE 2018</h1>
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
    }
  }
}

const mapState = (state) => {
  return {
    events: state.events
  }
}
export default connect(mapState, mapDispatch)(App) 
