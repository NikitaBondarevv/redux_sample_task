import { INCREASE_YEAR, DECREASE_YEAR, DIVIDE_YEAR, MULTIPLY_YEAR, ADD_TASK } from './actions';

// it is typical reducer
// action should be an object with next pattern:
// { type: 'ACTION_NAME', payload?: any_js_value }
export const date = (state = new Date().getFullYear(), action) => {
  switch (action.type) {
    case INCREASE_YEAR: return state + 1

    case DECREASE_YEAR: return state - 1

    case DIVIDE_YEAR: return Math.round(state / 2)

    case MULTIPLY_YEAR: return state * 2
  }

  return state
}

export const todo = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK: {
      const newState = [...state, action.task];
      return newState;
    }
  }

  return state
}
