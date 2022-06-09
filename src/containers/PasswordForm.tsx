import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, Navigate } from 'react-router-dom'
import { ButtonST } from '../assets/Button.style'
import { Form, Label, InputST } from '../assets/FormElements.style'
import { ButtonVars } from '../assets/Vars'
import { ValidatePassword } from '../helpers/ValidateProfileEdit.helper'
import { Password } from '../interfaces/models/EditProfile.interface'
import { GetMe } from '../services/Me.service'
import ErrorMsg from '../validation/ErrorMsg'
import { PasswordSchema } from '../validation/schemas/PasswordSchema'

const PasswordForm = () => {
    const [data, setData] = useState({current_password: "", password: "", confirm_password: ""})
    useEffect(()=>{
        (async ()=>{
            var {data} = await GetMe()
            setData(data)
        })()
    })
    const [msg, setMsg] = useState(" ")
    const [red, setRed] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<Password>({
        resolver: yupResolver(PasswordSchema)
    })

    const submit = handleSubmit(async (data, event) => {
        event?.preventDefault()
        await setMsg(await ValidatePassword(data))
    })

    useEffect(() => {if (!msg.length)setRed(true)}, [msg])

    return (!red ?
        <Form onSubmit={submit}>
            <div>
                <Label htmlFor="current_password"><p>Current Password</p></Label>
                <InputST type='password' value={data.current_password} height='40px' width='529px' name='current_password' register={register} />
                <ErrorMsg content={errors.current_password?.message || ''} />
            </div>
            <div>
                <Label htmlFor="password"><p>Password</p></Label>
                <InputST type='password' value={data.password} height='40px' width='529px' name='password' register={register} />
                <ErrorMsg content={errors.password?.message || ''} />
            </div>
            <div>
                <Label htmlFor="confirm_password"><p>Confirm Password</p></Label>
                <InputST type='password' value={data.confirm_password} height='40px' width='529px' name='confirm_password' register={register} />
                <ErrorMsg content={errors.confirm_password ? "Passwords should match" : ""}/>
                <ErrorMsg content={msg} />
            </div>
            <div style={{ "marginTop": "16px" }}>
                <ButtonST content='Submit' width='107px' style={ButtonVars.darkorange} />
                <NavLink to={'/'}><div style={{"display": "inline", "padding": "32px"}}>Cancel</div></NavLink>
            </div>
            <div style={{ "marginTop": "18px" }}>
                <div>
                </div>
            </div>
        </Form> : <Navigate to={'/'} />
    )
}

export default PasswordForm