/* eslint-disable @typescript-eslint/no-explicit-any */

import { Form } from 'antd';
import { ReactNode } from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form'

type TFromConfig = {
    defaultValues?: Record<string, any>
    resolver?: any,
}

type TFormProps = {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode;
} & TFromConfig;

const STForm = ({onSubmit, children, defaultValues, resolver}: TFormProps) => {
    const formConfig: TFromConfig = {};

    if(defaultValues){
        formConfig['defaultValues'] = defaultValues;
    }
    if(resolver){
        formConfig['resolver'] = resolver;
    }
    const methods = useForm<TFormProps>(formConfig);
    const handleSubmit: SubmitHandler<FieldValues> = (data) => {
        onSubmit(data);
        methods.reset()
    }
    
  return (
    <FormProvider {...methods}>
    <Form layout='vertical' onFinish={methods.handleSubmit(handleSubmit)}>
        { children }
    </Form>
    </FormProvider>
  )
}

export default STForm
