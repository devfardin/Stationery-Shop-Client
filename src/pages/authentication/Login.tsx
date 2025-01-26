import Container from '../../components/share/Container'
import STForm from '../../components/form/STForm'
import { FieldValues } from 'react-hook-form'
import STInput from '../../components/form/STInput'
import SubmitBtn from '../../components/form/SubmitBtn'
import { useAppDispatch } from '../../redux/hooks'
import { setUser, TUser } from '../../redux/features/auth/authSlice'
import { toast } from 'sonner'
import { useLoginMutation } from '../../redux/features/auth/authApi'
import { verifyToken } from '../../utils/verifyToken'
const Login = () => {
  const dispatch = useAppDispatch()
  const [login]= useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
      // Showing message in toast
     const toastId = toast.loading('Loggin in');
      try {
        const res = await login(data).unwrap();
        const user = verifyToken(res.data.accessToken) as TUser;
        dispatch(setUser({ user: user, token: res.data.accessToken }))
        toast.success('Logged in', {id: toastId, duration: 1000});
      } catch (error) {
        const err = error as { data: { message: string } };
        toast.error(`${err.data.message}`, {id: toastId, duration: 1000})
      }
  };
    const defaultValue= {
      email: 'john.doe@example.com',
      password: 'passeword123',
    }
  return (
    <div className='mt-16 flex justify-center items-center'>
      <Container>
        <div className='max-w-xl mx-auto p-16 bg-[#F3F3F3] rounded-lg'>
            <div className='mb-10'>
                <h1 className='text-black text-3xl font-bold text-center mb-2'>Login</h1>
                <p className='text-base font-normal text-neutral-500 text-center'>Please login using account detail bellow.</p>
            </div>
            <STForm onSubmit={onSubmit} defaultValues={defaultValue}>
                <STInput name='email' label='Account Email' type='email'/>
                <STInput name='password' label='Account Password' type='password'/>
                <SubmitBtn type='submit' label='Login'/>
            </STForm>
        </div>
      </Container>
    </div>
  )
}

export default Login
