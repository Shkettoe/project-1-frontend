import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { ButtonST } from '../assets/Button.style'
import { Form, InputST, Label } from '../assets/FormElements.style'
import { ButtonVars } from '../assets/Vars'
import { Validate } from '../helpers/ValidateRegisterData.helper'
import { RegisterInterface } from '../interfaces/models/Auth.interface'
import { setUser } from '../interfaces/models/reducers/User.reducer'
import { GetMe } from '../services/Me.service'
import ErrorMsg from '../validation/ErrorMsg'
import { RegisterSchema } from '../validation/schemas/Register.schema'

const RegisterForm = () => {
  const [msg, setMsg] = useState(" ")
  const [red, setRed] = useState(false)
  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterInterface>({
    resolver: yupResolver(RegisterSchema)
  })

  const submit = handleSubmit(async (data, event) => {
    event?.preventDefault()
    await setMsg(await Validate(data))
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
          <InputST width='420px' name='email' register={register} />
          <ErrorMsg content={errors.email?.message || ''}/>
        </div>
        <div>
          <div>
            <div>
              <Label htmlFor="firstname"><p>First Name</p></Label>
              <InputST width='170px' name='first_name' register={register} />
              <ErrorMsg content={errors.first_name?.message || ''}/>
            </div>
            <div>
              <Label htmlFor="lastname"><p>Last Name</p></Label>
              <InputST width='170px' name='last_name' register={register} />
              <ErrorMsg content={errors.last_name?.message || ''}/>
            </div>
          </div>
        </div>
        <div>
          <Label htmlFor="password"><p>Password</p></Label>
          <InputST width='420px' name='password' register={register} type='password' />
          <ErrorMsg content={errors.password?.message || ''}/>
        </div>
        <div>
          <Label htmlFor="confirm_password"><p>Confirm Password</p></Label>
          <InputST width='420px' name='confirm_password' register={register} type='password' />
          <ErrorMsg content={errors.confirm_password ? "Passwords should match" : ""}/>
        </div>
        <div style={{"marginTop": "16px"}}>
          <ButtonST content='Sign up' width='420px' style={ButtonVars.darkorange}/>
          <ErrorMsg content={msg} />
        </div>
        <div style={{"marginTop": "18px"}}>
          <div>
            <p>
              Already have an account?
            </p>
            <Link to={'/login'} style={{"color": `${ButtonVars.lightorange.bg}`}}>
              Sign in!
            </Link>
          </div>
        </div>
    </Form>
  : <Navigate to={'/'}/>)
}

export default RegisterForm