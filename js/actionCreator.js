import { ADD_HABIT, EDIT_HABIT } from './actions';

export function addHabit(text) {
  return { type: ADD_HABIT, payload: text };
}

export function editHabit(task) {
  return { type: EDIT_HABIT, payload: task };
}
