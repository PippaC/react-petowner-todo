import { combineReducers } from 'redux';
import { ADD_HABIT } from './actions';

const initialState = {
    text: 'Use Redux',
    completed: false,
    id: 0
  };


const addHabitT = (state = initialState, action) => {
  //if (action.type == ADD_HABIT)
    //return Object.assign({}, state, { habit: action.payload });
  return state;
};

const rootReducer = combineReducers({ addHabitT });

export default rootReducer;
