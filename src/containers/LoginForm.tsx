import { ButtonST } from '../assets/Button.style'
import { Form, InputST, Label } from '../assets/FormElements.style'
import { ButtonVars } from '../assets/Vars'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginSchema } from '../validation/schemas/Login.schema'
import ErrorMsg from '../validation/ErrorMsg'
import { Link } from 'react-router-dom'
import { LoginService } from '../services/Login.service'

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<{email: string, password: string}>({
    resolver: yupResolver(LoginSchema)
  })

  const submit = handleSubmit(async (credentials, event) => {
    event?.preventDefault()
    const data = await LoginService(credentials)
    console.log(data.response.data.error.status);
    
  })
  
  return (
    <Form onSubmit={submit}>
        <div>
          <Label htmlFor="email"><p>Email</p></Label>
          <InputST width='420px' name='email' register={register}/>
          <ErrorMsg content={errors.email?.message || ''} />
        </div>
        <div>
          <Label htmlFor="password"><p>Password</p></Label>
          <InputST width='420px' name='password' register={register} type='password' />
          <ErrorMsg content={errors.password?.message || ''} />
        </div>
        <div style={{"marginTop": "16px"}}>
          <ButtonST content='Login' width='420px' style={ButtonVars.white2}/>
        </div>
        <div style={{"marginTop": "18px"}}>
          <div>
            <p>
              Don't have an account?
            </p>
            <Link to={'/register'} style={{"color": `${ButtonVars.lightorange.bg}`}}>
              Sign up!
            </Link>
          </div>
        </div>
    </Form>
  )
}

export default LoginForm