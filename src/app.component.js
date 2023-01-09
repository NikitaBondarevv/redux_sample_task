import { connect } from 'react-redux';

import { Buttons } from './Buttons';
import { InfoYear } from './InfoYear';
import { AddTodo } from './AddTodo';
import { ListTodo } from './ListTodo';

import { decYear, incYear, addTodo } from './actions';

export const AppComponent = (props) => (
  <React.Fragment>
    <Buttons update={props.updateDate}/>
    <InfoYear date={props.date}/>
    <AddTodo update={props.updateTodo}/>
    <ListTodo todo={props.todo}/>
  </React.Fragment>
);

const mapStateToProps = state => ({
  todo: state.todo,
  date: state.date
});

const mapDispatchToProps = dispatch => ({
  updateDate(add) {
    dispatch(add ? incYear() : decYear());
  },
  updateTodo(value) {
    dispatch(addTodo(value));
  }
});

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
