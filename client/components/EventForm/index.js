import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { addEvent, editEvent } from '../../store';

const EventForm = (props) => {
const {handleSubmit, onClose} = props
  return(
    <div>
      <form onSubmit={handleSubmit} >
        <div>
        <TextField
          autoFocus
          margin="dense"
          id="event"
          name="description"
          label="event description"
          required 
          fullWidth
        />
        <TextField
          margin="dense"
          id="start"
          name="start"
          type='time'
          required
          fullWidth
        />
        <TextField
          margin="dense"
          id="end"
          name="end"
          type='time'
          required 
          fullWidth
        />
        <Button  size='small' label="Submit" type="submit" color="primary" onClick={onClose}>
          Submit
        </Button>
      </div>
    </form>
    <Button size='small' label="Close" type="close" color="primary" onClick={onClose} >
      Close
    </Button>
    </div>
  )
}

const mapDispatch = (dispatch, props)=>{
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const {id,currentDay, currentMonth, currentYear} = props.date
      const description = evt.target.description.value
      const startTime = new Date(currentMonth+' '+ currentDay+' ,'+ currentYear+' '+ evt.target.start.value)
      const endTime = new Date(currentMonth+' '+ currentDay+' ,'+ currentYear+' '+ evt.target.end.value)
      const userId = 1 // hard coded because we did not setup multiple users
      //handles different different dispatches based on action    
      if(startTime > endTime){
            alert('MUST END SAME DAY')
          } 
          if(description==='' || !evt.target.start.value || !evt.target.end.value  ) {
            alert('MUST ENTER CORRECT FIELDS')
          } else if (props.action ==='Add Event') {
            dispatch(addEvent(description, startTime, endTime, userId ))
         } else if (props.action ==='Edit Event'){
           dispatch(editEvent(id,description, startTime, endTime, userId ))
         }
    }
  }
}

export default connect(null, mapDispatch)(EventForm)

