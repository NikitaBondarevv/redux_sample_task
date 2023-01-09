export const Buttons = ({ update }) => {
  const click = (add) => {
    update(add);
  };

  return (
    <React.Fragment>
      <button onClick={() => click()}>Decrease year</button>&nbsp;&nbsp;
      <button onClick={() => click(true)}>Increase year</button>
    </React.Fragment>
  );
};
