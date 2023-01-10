import { useSelector } from 'react-redux'

import { numberToWords } from '../constans'

export const YearToWords = () => {
  const year = useSelector(state => state.date)

  const convertToWords = (year) => {
    return year.toString().split('').map(digit => numberToWords[digit]).join(' ')
  }

  return (
    <div>
      <span>{convertToWords(year)}</span>
    </div>
  )
}
