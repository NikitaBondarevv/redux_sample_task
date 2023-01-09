import { useDispatch } from 'react-redux'

import { addTodo } from '../actions'

export const AddTodo = () => {
  const dispatch = useDispatch()
  const addTask = (event) => {
    if (event.keyCode === 13) {
      dispatch(addTodo(event.target.value))
      
      event.target.value = ''
    }
  }

  return (
    <p>
      <input
        type="text"
        defaultValue=""
        placeholder="Enter a task title"
        onKeyDown={addTask}
      />
    </p>
  )
}
