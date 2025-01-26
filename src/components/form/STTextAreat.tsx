import { Form } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import { Controller } from 'react-hook-form'
type TInputProps = {
    name: string;
    label: string;
    placeholder?:string;
    row?: number
}
const STTextAreat = ({name, label, placeholder, row}: TInputProps) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 5,}}>
       <Controller
       name={name}
       render={({field}) => <Form.Item rules={[{required: true}]}>
        <label  className="text-base font-medium mb-1.5 block text-pera" htmlFor={name}>{label}</label>
         <TextArea {...field} id={name} placeholder={placeholder} size='large' rows={row}/>
        </Form.Item> }
       />
    </div>
  )
}

export default STTextAreat
