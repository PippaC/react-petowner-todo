import React, {Component} from 'react';
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
import preload from '../item.json';

export default class TableExampleControlled extends Component {
  state = {
    selected: [2],
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleCellClick = (isInputChecked, test) => {
    console.log(isInputChecked);
  };

  render() {
    const firstDate = getWeekDate();
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
            <TableHeaderColumn key={firstDate}>SUN<br/>{firstDate}</TableHeaderColumn>
            <TableHeaderColumn key={firstDate+1}>MON<br/>{firstDate+1}</TableHeaderColumn>
            <TableHeaderColumn key={firstDate+2}>TUE<br/>{firstDate+2}</TableHeaderColumn>
            <TableHeaderColumn key={firstDate+3}>WED<br/>{firstDate+3}</TableHeaderColumn>
            <TableHeaderColumn key={firstDate+4}>THU<br/>{firstDate+4}</TableHeaderColumn>
            <TableHeaderColumn key={firstDate+5}>FRI<br/>{firstDate+5}</TableHeaderColumn>
            <TableHeaderColumn key={firstDate+6}>SAT<br/>{firstDate+6}</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} >
          {preload.habit.map(habit =>
            <TableRow key={habit.ID} >
              <TableRowColumn>{habit.Name}</TableRowColumn>
                {Array.apply(null, Array(7)).map((i)=>
                  <TableRowColumn key={i} >
                    <Checkbox onClick={(isInputChecked)=>this.handleCellClick(isInputChecked, 'test123')}/>
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
    let nextDate = new Date();
    nextDate.setDate(firstDate + (i + 1));
    return nextDate.getDate();
  });
  const lastDate = firstDate + 6; // last day is the first day + 6
  return firstDate;
};
