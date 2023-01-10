import { useSelector } from 'react-redux'
import { useMemo } from 'react'
 
import { numberToWords } from '../constans'

export const YearToWords = () => {
  const year = useSelector(state => state.date)

  const numbersInWords = useMemo(() => {
    return year.toString().split('').map(digit => numberToWords[digit]).join(' ')
  }, [year])

  return (
    <div>
      <span>{numbersInWords}</span>
    </div>
  )
}
