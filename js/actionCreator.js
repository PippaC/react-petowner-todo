import { ADD_HABIT } from './actions';

export function addHabit(text) {
  return { type: ADD_HABIT, payload: text };
}
