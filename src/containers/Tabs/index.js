import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Calendar } from '../../components';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollableTabsButtonForce extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
    const { classes , events } = this.props;
    const { value } = this.state;
  
    return (
      <div className={classes.root}>
        <AppBar style={{ position: "fixed" }} position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
          {monthList.map((month, idx)=><Tab label={month} key={idx}/>)}
            
          </Tabs>
        </AppBar>
        {
          monthList.map((month,idx)=>{
          return value === idx && <Calendar monthIdx={idx} month={month} key={month}/>
          })
        }
      </div>
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonForce);
