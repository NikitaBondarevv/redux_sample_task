export const INCREASE_YEAR = 'Make plus one year';
export const DECREASE_YEAR = 'Make minus one year';
export const incYear = () => ({ type: INCREASE_YEAR });
export const decYear = () => ({ type: DECREASE_YEAR });

export const ADD_TASK = 'Add new task';
export const addTodo = task => ({ type: ADD_TASK, task });
