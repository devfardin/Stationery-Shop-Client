import Container from '../../components/share/Container'
import STForm from '../../components/form/STForm'
import { FieldValues } from 'react-hook-form'
import STInput from '../../components/form/STInput'
import SubmitBtn from '../../components/form/SubmitBtn'
import { useRegistrationMutation } from '../../redux/features/user/userApi'
import { TError } from '../../types/global'
import { toast } from 'sonner'
import { useNavigate } from 'react-router'
const Registration = () => {
  const navigate = useNavigate();
  const [registration] = useRegistrationMutation();
    const onSubmit = async (data: FieldValues) => {
      const  toastId = toast.loading('Creating your account, please wait...')
      const result = await registration(data);
      if(result?.data?.success) {
        navigate('/login');
      }
      if(result?.error) {
        const errorMessage = (result?.error as TError).data?.message;
         toast.error(errorMessage, {id: toastId})
      } else {
        const success = result.data.message;
        toast.success(success, {id: toastId})
      }
        
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
