import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents} from './store'
import {Year} from './containers/index'

class App extends Component {
  componentDidMount(){
    this.props.loadInitialData()
  }
  render(){
    const{events}=this.props
    return (
        <div>
         <Year/>
        </div>
    )
  } 
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

export default connect(mapState, mapDispatch)(App) 
