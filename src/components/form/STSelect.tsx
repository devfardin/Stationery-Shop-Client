import { Form, Select } from 'antd'
import { Controller } from 'react-hook-form';

type TOptions = {
    value: string,
    label?: string,
    disabled?: boolean,
}[] | undefined;
type TSelect = {
    name: string,
    label: string,
    placeholder?: string,
    options: TOptions,
    disabled?: boolean,
}
const STSelect = ({ name, label, placeholder, options, disabled }: TSelect) => {
    return (
        <Controller
            name={name}
            render={({ field, fieldState: { error } }) => <Form.Item>
                <label className="text-base font-medium mb-1.5 block text-pera" htmlFor={name}>{label}</label>
                <Select {...field} disabled={disabled} placeholder={placeholder} showSearch options={options} size='large'  >
                </Select>
                {
                    error && <small style={{ fontSize: '1.125rem', fontWeight: '400', color: 'red', marginLeft: 10, }}>{error.message}</small>
                }
            </Form.Item>}
        />
    )
}


export default STSelect
