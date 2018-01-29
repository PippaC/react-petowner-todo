import React, {Component} from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
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

  render() {
    return (
      <AppBar
        title={<span style={styles.title}>Daily Habit</span>}
        iconElementRight={<IconButton onClick={this.props.addHabitData}><AddCircleOutline /></IconButton>}
      />
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
