import { useDispatch } from 'react-redux'

import { decYear, incYear } from '../actions'

export const ButtonsForYear = () => {
  const dispatch = useDispatch()
  const click = (add) => dispatch(add ? incYear() : decYear())

  return (
    <React.Fragment>
      <button onClick={() => click()}>Decrease year</button>&nbsp;&nbsp;
      <button onClick={() => click(true)}>Increase year</button>
    </React.Fragment>
  )
}
