import Container from '../../components/share/Container'
import STForm from '../../components/form/STForm'
import { FieldValues } from 'react-hook-form'
import STInput from '../../components/form/STInput'
import SubmitBtn from '../../components/form/SubmitBtn'
const Registration = () => {
    const onSubmit = async (data: FieldValues) => {
        console.log(data);
        
    }
  return (
    <div className='mt-16 flex justify-center items-center'>
      <Container>
        <div className='max-w-xl mx-auto p-16 bg-[#F3F3F3] rounded-lg'>
            <div className='mb-10'>
                <h1 className='text-black text-3xl font-bold text-center mb-2'>
                    Create Account
                </h1>
                <p className='text-base font-normal text-neutral-500 text-center'>
                    Please Register using account detail bellow.
                </p>
            </div>
            <STForm onSubmit={onSubmit} >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-between'>
                <STInput name='firstName' label='First Name' type='text'/>
                <STInput name='lastName' label='Last Name' type='text'/>
                </div>
                <STInput name='email' label='Account Email' type='email'/>
                <STInput name='password' label='Account Password' type='password'/>
                <SubmitBtn type='submit' label='Login'/>
            </STForm>
        </div>
      </Container>
    </div>
  )
}

export default Registration
