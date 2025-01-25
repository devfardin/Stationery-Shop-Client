
type TSubmitBtn = {
    type: "submit" | "reset" | "button" | undefined,
    label: string,
    fullWidth?: boolean,
}
const SubmitBtn = ({type, label, fullWidth}: TSubmitBtn) => {
  return (
    <button className={`text-lg font-normal text-center text-white hover:text-primary bg-primary hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-primary duration-300 transition-all py-3 px-4
        ${ fullWidth && '!w-full'} mt-2 px-16`} type={type}> {label} </button>
  )
}

export default SubmitBtn
