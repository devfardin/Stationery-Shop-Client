import { PulseLoader } from "react-spinners"
type TLoading = {
  dash?: boolean,
}
const Loading = ({dash}: TLoading) => {
  return (
    <PulseLoader margin={5} size={15} color={ dash ? '#757FEF' : '#4ACDD5'}/>
  )
}

export default Loading
