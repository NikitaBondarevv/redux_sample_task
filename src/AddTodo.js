export const AddTodo = ({ update }) => {
  const addTask = (event) => {
    if (event.keyCode === 13) {
      update(event.target.value);
      event.target.value = '';
    }
  };

  return (
    <p>
      <input
        type="text"
        defaultValue=""
        placeholder="Enter a task title"
        onKeyDown={addTask}
      />
    </p>
  );
};
