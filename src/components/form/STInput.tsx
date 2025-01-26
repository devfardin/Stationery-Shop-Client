import { Form, Input } from 'antd'
import { Controller } from 'react-hook-form'
type TInputProps = {
    name: string;
    label: string;
    type: string;
    placeholder?:string;
}
const STInput = ({name, label, type, placeholder}: TInputProps) => {
  const inputStyle = {
    padding: "8px 14px", // py-3 px-4
    border: "1px solid #B1B5C3", // border with custom color
    outline: "none", // outline-none
    width: "100%", // w-full
    borderRadius: "6px", // rounded-md
    fontSize: "1.125rem", // text-lg
    fontWeight: 400, // font-normal
    transition: "border-color 0.3s", // Add smooth transition for hover/focus
    borderColor: "var(--dashPrimary)"
  };

  const focusStyle = {
    borderColor: "#757FEF", // focus:border-dashPrimary
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 5,}}>
       <Controller
       name={name}
       render={({field}) => <Form.Item rules={[{required: true}]}>
        <label  className="text-base font-medium mb-1.5 block text-pera" htmlFor={name}>{label}</label>
         <Input {...field} type={type} id={name} placeholder={placeholder} style={inputStyle} size='large'
         onFocus={(e) => (e.target.style.borderColor = focusStyle.borderColor)}
         onBlur={(e) => (e.target.style.borderColor = "#B1B5C3")}
         /> 
        </Form.Item> }
       />
    </div>
  )
}

export default STInput
