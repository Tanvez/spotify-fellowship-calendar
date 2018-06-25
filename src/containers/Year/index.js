import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Tabs} from '../index'

class Year extends Component {
  getDaysInMonth=(year, month)=>{
    return new Date(year, month, 0).getDate()
  }

  render() {
    const{events}=this.props
    return (
      <div>
      <Tabs events={events}/>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    events:state
  }
}

export default connect(mapState)(Year) 
