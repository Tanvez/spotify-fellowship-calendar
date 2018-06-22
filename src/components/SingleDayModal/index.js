import React, {Component} from 'react';
import './style.css'

// import Dialog from 'material-ui/Dialog'
// import RaisedButton from 'material-ui/RaisedButton'

const SingleDayModal =({ handleClose, show, children }) => {

  //   state = {
  //     open: false,
  //   };
  
  //   handleOpen = () => {
  //     this.setState({open: true});
  //   };
  
  //   handleClose = () => {
  //     this.setState({open: false});
  //   };
  // render() {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  }
  export default SingleDayModal

// export default class UserOrderModal extends Component { 
//   state = {
//     open: false,
//   };

//   handleOpen = () => {
//     this.setState({open: true});
//   };

//   handleClose = () => {
//     this.setState({open: false});
//   };

//   render() {
//     const actions = [
//       <RaisedButton
//         label="Cancel"
//         primary={true}
//         onClick={this.handleClose}
//       />,
//       <RaisedButton
//         label="Submit"
//         primary={true}
//         keyboardFocused={true}
//         onClick={this.handleClose}
//         style={{margin:'2em'}}
//       />,
//     ];


//     return (
//       <div>
//         <RaisedButton label="Details" onClick={this.handleOpen} />
//         <Dialog
//           title="Products"
//           actions={actions}
//           modal={false}
//           open={this.state.open}
//           onRequestClose={this.handleClose}
//           autoScrollBodyContent={true}
//         />
//       </div>
//     );
//   }
// }
