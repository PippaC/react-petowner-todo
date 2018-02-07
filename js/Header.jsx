import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar, Dialog, FlatButton, IconButton, MenuItem, RaisedButton, SelectField, TextField } from 'material-ui';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import { Field, reduxForm } from 'redux-form';
import { addHabit } from './actionCreator';

const styles = {
  title: {
    cursor: 'pointer',
    float: 'left'
  },
};

const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const renderSelectField = ({
  input,
  label,
  meta: {touched, error},
  children,
  ...custom
}) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
)

class Header extends Component {
  props: {
    //searchTerm: string,
    addHabitData: Function
  };

  state = {
    open: false,
    value: 1
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleChange = (event, index, value) => this.setState({value});

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const {  handleSubmit } = this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        type="submit"
        onClick={this.handleClose}
      />
    ];

    return (
      <div>
        <AppBar
          title={<span style={styles.title}>Daily Habit</span>}
          iconElementRight={<IconButton onClick={this.handleOpen}><AddCircleOutline /></IconButton>}
        />
        <Dialog
          title="Add Habit"
          modal={false}
          open={this.state.open}
        >
          <form  onSubmit={handleSubmit}>
              <Field
                name="habitName"
                component={renderTextField}
                label="Habit Name"
                fullWidth={true}
              />
              <Field
                name="freq"
                component={renderSelectField}
                label="Frequency"
                fullWidth={true}
              >
                <MenuItem value={1} primaryText="Everyday" />
                <MenuItem value={2} primaryText="Every Monday, Wednesday, Friday" />
                <MenuItem value={3} primaryText="Weekdays" />
                <MenuItem value={4} primaryText="Weekends" />
              </Field>
              <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
                {/*<button type="submit" >Submit</button>
                <button type="button">
                  Clear Values
                </button>*/}
{actions}
              </div>
            </form>
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

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default reduxForm({
  form: 'Header', // a unique identifier for this form
})(Header);
