import { useSelector } from 'react-redux'

export const InfoYear = () => {
  const date = useSelector(state => state.date)

  return (
    <p>{date}</p>
  )
}
