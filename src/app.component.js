import { connect } from 'react-redux'

import { IncreaseDecreaseYear } from './increaseDecreaseYear'
import { MultiplyDivideYear } from './multiplyDivideYear'
import { InfoYear } from './infoYear'
import { AddTodo } from './addTodo'
import { ListTodo } from './listTodo'
import { YearToWords } from './yearToWords'

export const AppComponent = () => (
  <React.Fragment>
    <IncreaseDecreaseYear />
    <MultiplyDivideYear />
    <InfoYear />
    <YearToWords />
    <AddTodo />
    <ListTodo />
  </React.Fragment>
)

export const App = connect()(AppComponent)
