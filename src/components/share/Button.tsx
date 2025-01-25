type TButtonType = {
    label: string,
    fullWidth?: boolean,
    handle_button: () => void;
    type?: "button" | "submit" | "reset"; 
}
const Button = ({label, fullWidth, handle_button, type}: TButtonType) => {
  return (
    <button onClick={ ()=>handle_button() } className={`text-lg font-normal text-center text-white hover:text-primary bg-primary hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-primary duration-300 transition-all py-3 px-4
       ${ fullWidth && '!w-full'} mt-2 px-16`}
          type={type}>{label}</button> 
  )
}

export default Button