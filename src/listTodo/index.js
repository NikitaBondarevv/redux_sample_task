import { useSelector } from 'react-redux'

export const ListTodo = () => {
  const todos = useSelector(state => state.todo)

  return (
    <ul>
      {todos.map((todo, index) => <li key={index}>{todo}</li>)}
    </ul>
  )
}
