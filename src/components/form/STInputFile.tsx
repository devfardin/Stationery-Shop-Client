import { Form, Input } from 'antd'
import { Controller } from 'react-hook-form'

type TInputProps = {
    name: string;
    label: string;
}
const STInputFile = ({label, name}: TInputProps) => {
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
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 5,}}>
    <Controller 
          name={name}
          render={({field: { onChange, value, ...field }}) => (
            <Form.Item>
                <label  className="text-base font-medium mb-1.5 block text-pera" >{label}</label>
              <Input style={inputStyle} type="file" value={value?.firstName} {...field} size="large"
              onChange={(e) => onChange(e.target.files?.[0])}
              />
            </Form.Item>
          ) }
          />
 </div>
  )
}

export default STInputFile
