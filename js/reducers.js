import { combineReducers } from 'redux';
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
  //if (action.type == ADD_HABIT)
    //return Object.assign({}, state, { habit: action.payload });
  switch (action.type) {
    case EDIT_HABIT:
      /*state.habits.map(todo => {
        if(todo.id === action.payload.habitId)
          todo.date_list.map(item => {
              if(item.date === action.payload.date)
                return Object.assign({}, item, { completed: action.payload.isChecked });
              else return item;
          });
        else return todo;
      });
      console.log(state);*/
 return [
   ...state.habits,
   {
     id: 999,
     //completed: false,
     text: 'babel-plugin-transform-decorators-legacy'
   }
 ];
    default:
      return state;
  }
};

const rootReducer = combineReducers({ addHabitT });

export default rootReducer;
