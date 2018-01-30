import { combineReducers } from 'redux';
import update from 'immutability-helper';
import { ADD_HABIT, EDIT_HABIT } from './actions';

const getWeekList = () => {
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
    return { 'day': day, 'date': nextDate.getDate(), 'completed': false };
  });
  return [{ 'day': 'SUN', 'date': firstDate, 'completed': true }].concat(week);
};

const initialState = { 'habits': [
  {
    "id": "0",
    "text": "Feed pet food",
    "date_list": getWeekList()
  },
  {
    "id": "1",
    "text": "Brush teeth",
    "date_list": getWeekList()
  },
  {
    "id": "2",
    "text": "Take a walk",
    "date_list": getWeekList()
  }
]};

const addHabitT = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_HABIT:
      return update(state, {habits: {[action.payload.habitId]: {date_list: {[action.payload.dayIndex]: {completed: {$set: action.payload.isChecked}}}}}});      
    default:
      return state;
  }
};

const rootReducer = combineReducers({ addHabitT });

export default rootReducer;
