import React, {Component} from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import { addHabit } from './actionCreator';

const styles = {
  title: {
    cursor: 'pointer',
    float: 'left'
  },
};

class Header extends Component {
  props: {
    //searchTerm: string,
    addHabitData: Function
  };

  state = {
    open: false,
  };
  handleOpen = () => {
    this.setState({open: true});
  };
  render() {
    return (
      <div>
      <AppBar
        title={<span style={styles.title}>Daily Habit</span>}
        /*{iconElementRight={<IconButton onClick={this.props.addHabitData}><AddCircleOutline /></IconButton>}}*/
        iconElementRight={<IconButton onClick={this.handleOpen}><AddCircleOutline /></IconButton>}
      />
      <Dialog
          title="Add Habit"

          modal={false}
          open={this.state.open}
       >
          <TextField hintText="Habit Name" />
       </Dialog>
       </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //const apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : {};
  return {    text: 'Use Redux',
      completed: false,
      id: 0
    };
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  addHabitData() {
    dispatch(addHabit('Feed treat'));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
