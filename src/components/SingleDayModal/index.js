import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import EventForm from '../EventForm'

 class SingleDayModal extends Component {
  state = {
    open: false,
    currentMonth:'June',
    currentYear:'2018',
    currentDay: '',
    events:[]
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
      currentDay:this.props.day,
      events:this.props.events 
    });

  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {currentDay, currentMonth, currentYear} = this.state
    
    return (
      <div>
        <Button onClick={this.handleClickOpen}>ADD EVENT</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{currentMonth+' '+ currentDay + ', ' + currentYear}</DialogTitle>
          <EventForm date={{currentDay,currentMonth, currentYear}} onClose={this.handleClose}/>
        </Dialog>
      </div>
    );
  }
}

export default SingleDayModal