import { ButtonST } from '../assets/Button.style'
import { Form, InputST, Label } from '../assets/FormElements.style'
import { ButtonVars } from '../assets/Vars'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginSchema } from '../validation/schemas/Login.schema'
import ErrorMsg from '../validation/ErrorMsg'
import { Link, Navigate } from 'react-router-dom'
import { Check } from '../helpers/CheckCredentials.helper'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../interfaces/models/reducers/User.reducer'
import { GetMe } from '../services/Me.service'
import { PostRequest } from '../services/PostRequest.service'

const LoginForm = () => {
  const [msg, setMsg] = useState(" ")
  const [red, setRed] = useState(false)
  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm<{email: string, password: string}>({
    resolver: yupResolver(LoginSchema)
  })

  const submit = handleSubmit(async (credentials, event) => {
    event?.preventDefault()
    await setMsg((await Check(credentials)).msg)
  })

  useEffect(() => {
    if(!msg.length) {
      (async() => {
        const {data} = await GetMe()
        dispatch(setUser(data))
      })()
      setRed(true)
    }
  }, [msg])
  
  return (!red ? 
    <Form onSubmit={submit}>
        <div>
          <Label htmlFor="email"><p>Email</p></Label>
          <InputST onChange={async ()=> await setMsg(" ")} width='420px' name='email' register={register}/>
          <ErrorMsg content={errors.email?.message || ''} />
        </div>
        <div>
          <Label htmlFor="password"><p>Password</p></Label>
          <InputST onChange={async ()=> await setMsg(" ")} width='420px' name='password' register={register} type='password' />
          <ErrorMsg content={errors.password?.message || ''} />
        </div>
        <div style={{"marginTop": "16px"}}>
          <ButtonST content='Login' width='420px' style={ButtonVars.white2}/>
          <ErrorMsg content={msg} />
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
  : <Navigate to={'/'}/>)
}

export default LoginForm