import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import preload from '../item.json';

export default class TableExampleControlled extends Component {
  state = {
    selected: [2],
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  render() {
    return (
      <Table onRowSelection={this.handleRowSelection}>
        <TableHeader displaySelectAll={false}
adjustForCheckbox={false}
            enableSelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Mon</TableHeaderColumn>
            <TableHeaderColumn>Tue</TableHeaderColumn>
            <TableHeaderColumn>Wed</TableHeaderColumn>
            <TableHeaderColumn>Thu</TableHeaderColumn>
            <TableHeaderColumn>Fri</TableHeaderColumn>
            <TableHeaderColumn>Sat</TableHeaderColumn>
            <TableHeaderColumn>Sun</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {preload.habit.map(habit => 
            <TableRow key={habit.ID}>
              <TableRowColumn>{habit.Name}</TableRowColumn>
              {habit.date_list.map(list =>
                <TableRowColumn key={list.day}>{list.done}</TableRowColumn>
              )}
            </TableRow> 
          )}
        </TableBody>
      </Table>
    );
  }
}
