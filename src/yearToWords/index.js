import { useSelector } from 'react-redux'

import { numberToWords } from '../constans'

export const YearToWords = () => {
  const year = useSelector(state => state.date)

  const numbersInWords = year.toString().split('').map(digit => numberToWords[digit]).join(' ')

  return (
    <div>
      <span>{numbersInWords}</span>
    </div>
  )
}
