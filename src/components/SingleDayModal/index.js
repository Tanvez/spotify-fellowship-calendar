import React from 'react';
import './style.css'

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