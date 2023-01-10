import { connect } from 'react-redux'

import { ButtonsForYear } from './buttonsForYear'
import { MultiplyDivideYear } from './multiplyDivideYear'
import { InfoYear } from './infoYear'
import { AddTodo } from './addTodo'
import { ListTodo } from './listTodo'

export const AppComponent = () => (
  <React.Fragment>
    <ButtonsForYear />
    <MultiplyDivideYear />
    <InfoYear />
    <AddTodo />
    <ListTodo />
  </React.Fragment>
)

export const App = connect()(AppComponent)
