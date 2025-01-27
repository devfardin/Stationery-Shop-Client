import Container from '../../components/share/Container'
import STForm from '../../components/form/STForm'
import { FieldValues } from 'react-hook-form'
import STInput from '../../components/form/STInput'
import SubmitBtn from '../../components/form/SubmitBtn'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { selectCurrentToken, selectCurrentUser, setUser, TUser } from '../../redux/features/auth/authSlice'
import { toast } from 'sonner'
import { useLoginMutation } from '../../redux/features/auth/authApi'
import { verifyToken } from '../../utils/verifyToken'
import { useNavigate } from 'react-router'
import { Navigate } from 'react-router'
const Login = () => {
  const dispatch = useAppDispatch()
  const [login]= useLoginMutation();
  const nagivete = useNavigate();
  const token = useAppSelector(selectCurrentToken)
  const user = useAppSelector(selectCurrentUser);

  

  const onSubmit = async (data: FieldValues) => {
      // Showing message in toast
     const toastId = toast.loading('Logging you in, please wait...');
      try {
        const res = await login(data).unwrap();
        const user = verifyToken(res.data.accessToken) as TUser;
        dispatch(setUser({ user: user, token: res.data.accessToken }))
        toast.success('Welcome back! You have logged in successfully.', {id: toastId, duration: 1000});
        nagivete(`/${user.role}/dashboard`)
      } catch (error) {
        const err = error as { data: { message: string } };
        toast.error(`${err.data.message}`, {id: toastId, duration: 1000})
      }
  };
    const defaultValue= {
      email: 'fardin@gmail.com',
      password: 'password123',
    }
    // if have a token don't view login page it will go dashboard
    if(token) {
      return <Navigate to={`/${user?.role}/dashboard`}/>;
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
