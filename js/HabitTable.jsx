import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import Header from './Header';
import { editHabit } from './actionCreator';
import preload from '../item.json';

class TableExampleControlled extends Component {

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleCellClick = (isInputChecked, habitId, dayIndex) => {
    this.props.editHabitData({ habitId: habitId, dayIndex: dayIndex, isChecked: isInputChecked.target.checked });
  };

  render() {
    const weekDates = getWeekDate();
    return (
      <div>
      <Header></Header>
      <Table>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
          enableSelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            {weekDates.map((item) => 
              <TableHeaderColumn key={item.date}>{item.day}<br/>{item.date}</TableHeaderColumn>
            )}
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} >
          {this.props.habits.map(habit => 
            <TableRow key={habit.id} >
              <TableRowColumn>{habit.text}</TableRowColumn>
                {habit.date_list.map((DAY, index) =>
                  <TableRowColumn key={DAY.date}>
                    <Checkbox checked={DAY.completed} onClick={(isInputChecked) => this.handleCellClick(isInputChecked, habit.id, index)}/>
                  </TableRowColumn>
                )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      </div>
    );
  }
}

const getWeekDate = () => {
  const curr = new Date();
  const firstDate = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  const week = Array.from({length: 6}, (e, i) => {
    let day = '';
    switch(i) {
      case 0:
        day = 'MON';
        break;
      case 1:
        day = 'TUE';
        break;
      case 2:
        day = 'WED';
        break;
      case 3:
        day = 'THU';
        break;
      case 4:
        day = 'FRI';
        break;
      case 5:
        day = 'SAT';
        break;
    }
    let nextDate = new Date();
    nextDate.setDate(firstDate + (i + 1));
    return {'day': day, 'date': nextDate.getDate()};
  });
  return [{'day': 'SUN', 'date': firstDate}].concat(week);
};

const mapStateToProps = (state, ownProps) => {
  return state.addHabitT;
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  editHabitData(task) {
    dispatch(editHabit(task));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TableExampleControlled);
