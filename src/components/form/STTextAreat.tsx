import { Form } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import { Controller } from 'react-hook-form'
type TInputProps = {
    name: string;
    label: string;
    placeholder?:string;
}
const STTextAreat = ({name, label, placeholder}: TInputProps) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 5,}}>
       <Controller
       name={name}
       render={({field}) => <Form.Item rules={[{required: true}]} label={label}>
         <TextArea {...field} id={name} placeholder={placeholder} size='large'/>
        </Form.Item> }
       />
    </div>
  )
}

export default STTextAreat
