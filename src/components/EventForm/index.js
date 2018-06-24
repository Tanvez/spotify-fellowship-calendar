import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { addEvent } from '../../store';

const EventForm = (props) => {
const {handleSubmit, onClose} = props
  return(
    <div>
      <form onSubmit={handleSubmit} onClick={onClose}>
        <div>
        <TextField
     autoFocus
     margin="dense"
     id="event"
     name="description"
     label="event description"
   
     fullWidth
   />
   <TextField
     margin="dense"
     id="start"
     name="start"
     type='time'
     fullWidth
   />
   <TextField
     margin="dense"
     id="end"
     name="end"
     type='time'
     fullWidth
   />
     <Button label="Submit" type="submit" color="primary">
Submit
    </Button>
    </div>
    </form>
    <Button label="Close" type="close" color="primary" onClick={onClose} >
    Close
    </Button>
    </div>
  )
}
const mapDispatch = (dispatch, props)=>{
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const {currentDay, currentMonth, currentYear} = props.date
      const description = evt.target.description.value
      const startTime = new Date(currentMonth+' '+ currentDay+' ,'+ currentYear+' '+ evt.target.start.value)
      const endTime = new Date(currentMonth+' '+ currentDay+' ,'+ currentYear+' '+ evt.target.end.value)
      const userId = 1 // hard coded because we did not setup multiple users
          if(startTime > endTime){
            alert('MUST END SAME DAY')
          } 
          if(description==='' || !evt.target.start.value || !evt.target.end.value  ) {
            alert('MUST ENTER CORRECT FIELDS')
          } else {
            dispatch(addEvent(description, startTime.toJSON(), endTime, userId ))
         }
    }
  }
}

export default connect(null, mapDispatch)(EventForm)

