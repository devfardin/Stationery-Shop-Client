import { ClipLoader } from "react-spinners"

type TSubmitBtn = {
  type: "submit" | "reset" | "button" | undefined,
  label: string,
  fullWidth?: boolean,
  disabled?: boolean,
  dash?: boolean,
}
const SubmitBtn = ({ type, label, fullWidth, disabled, dash }: TSubmitBtn) => {
  return (
    <button disabled={disabled} className={`text-lg font-normal text-center text-white hover:text-primary bg-primary hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-primary flex justify-center duration-300 transition-all py-3 px-4 rounded
        ${fullWidth && '!w-full'} mt-2 px-7`} type={type}>
          {
            disabled ? <ClipLoader color={ dash ? '#757FEF' : '#4ACDD5'} size={30} /> : label
          }
      
    </button>
  )
}

export default SubmitBtn
