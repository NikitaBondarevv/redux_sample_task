import { useDispatch } from 'react-redux'

import { divideYear, multiplyYear } from '../actions'

export const MultiplyDivideYear = () => {
  const dispatch = useDispatch()
  const click = (add) => dispatch(add ? multiplyYear() : divideYear())

  return (
    <div>
      <button onClick={() => click()}>Divide year</button>&nbsp;&nbsp;
      <button onClick={() => click(true)}>Multiply year</button>
    </div>
  )
}
