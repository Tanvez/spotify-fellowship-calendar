import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import EventForm from '../EventForm'
import './style.css'

class SingleDayModal extends Component {
  state = {
    open: false,
    currentMonth:'',
    currentYear:'2018',
    currentDay: '',
  }
  componentDidMount(){
     this.setState({currentMonth:this.props.month})
  }
  handleClickOpen = () => {
    this.setState({
      open: true,
      currentDay:this.props.day,
    })
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    const {currentDay, currentMonth, currentYear} = this.state
    const {action} = this.props
   if(action ==='Add Event'){
     return (
        <div style={{'margin':'20px'}}>
          <Button  variant="contained" 
            size = 'small'
            color="primary" onClick={this.handleClickOpen} 
            style={{'fontSize':10}} >
            {action}
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">{currentMonth+' '+ currentDay + ', ' + currentYear}</DialogTitle>
            <EventForm date={{currentDay,currentMonth, currentYear}} onClose={this.handleClose} action={action}/>
          </Dialog>
        </div>
      )
   } else if (action ==='Edit Event'){
      const {id, description, start, end} = this.props.event
      return (
        <div>
          <Button onClick={this.handleClickOpen} 
            variant="contained" 
            size = 'small'
            color="primary"
            style={{'fontSize':10}}>
            {action}
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">{currentMonth+' '+ currentDay + ', ' + currentYear }</DialogTitle>
            <DialogContentText>
                Editing this event { id + ' =' + description + ' start at:' + start + ' end at:' + end}
              </DialogContentText>
            <EventForm date={{id, currentDay,currentMonth, currentYear}} onClose={this.handleClose} action={action}/>
          </Dialog>
        </div>
      )
    }
  }
}

export default SingleDayModal