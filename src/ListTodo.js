export const ListTodo  = props => (
  <ul>
    {props.todo.map((todo, index) => <li key={index}>{todo}</li>)}
  </ul>
);

ListTodo.defaultProps = {
  todo: []
};
