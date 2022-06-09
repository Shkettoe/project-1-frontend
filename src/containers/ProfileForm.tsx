import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, NavLink } from 'react-router-dom'
import { ButtonST } from '../assets/Button.style'
import { Form, Label, InputST } from '../assets/FormElements.style'
import { ButtonVars } from '../assets/Vars'
import { Validate } from '../helpers/ValidateProfileEdit.helper'
import { GetMe } from '../services/Me.service'
import ErrorMsg from '../validation/ErrorMsg'
import { ProfileSchema } from '../validation/schemas/Profile.schema'

const ProfileForm = () => {
    const [data, setData] = useState({email: "", first_name: "", last_name: ""})
    useEffect(()=>{
        (async ()=>{
            var {data} = await GetMe()
            setData(data)
        })()
    })
    const [msg, setMsg] = useState(" ")
    const [red, setRed] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<{ email: string, first_name: string, last_name: string }>({
        resolver: yupResolver(ProfileSchema)
    })

    const submit = handleSubmit(async (data, event) => {
        event?.preventDefault()
        await setMsg(await Validate(data))
    })

    useEffect(() => {if (!msg.length)setRed(true)}, [msg])

    return (!red ?
        <Form onSubmit={submit}>
            <div>
                <Label htmlFor="email"><p>Email</p></Label>
                <InputST value={data.email} height='40px' width='529px' name='email' register={register} />
                <ErrorMsg content={errors.email?.message || ''} />
            </div>
            <div>
                <div>
                    <div>
                        <Label htmlFor="firstname"><p>First Name</p></Label>
                        <InputST value={data.first_name} height='40px' width='224.5px' name='first_name' register={register} />
                        <ErrorMsg content={errors.first_name?.message || ""} />
                    </div>
                    <div>
                        <Label htmlFor="lastname"><p>Last Name</p></Label>
                        <InputST value={data.last_name} height='40px' width='224.5px' name='last_name' register={register} />
                        <ErrorMsg content={errors.last_name?.message || ""} />
                    </div>
                </div>
                <div>
                    <div>
                        <Label htmlFor="firstname"><p>First Name</p></Label>
                        <NavLink to={'/settings/password'}>
                            <ButtonST content='Change password' height='36px' width='227.5px' style={ButtonVars.lightorange} />
                        </NavLink>
                        <ErrorMsg content={''} />
                    </div>
                    <div>
                        <Label htmlFor="lastname"><p>Last Name</p></Label>
                        <NavLink to={'/settings/avatar'}>
                            <ButtonST content='Change profile picture' height='36px' width='227.5px' style={ButtonVars.darkorange} />
                        </NavLink>
                        <ErrorMsg content={''} />
                    </div>
                </div>
                <ErrorMsg content={msg} />
            </div>
            <div style={{ "marginTop": "16px" }}>
                <ButtonST content='Submit' height='36px' width='107px' style={ButtonVars.darkorange} />
                <NavLink to={'/'}><div style={{"display": "inline", "padding": "32px"}}>Cancel</div></NavLink>
            </div>
            <div style={{ "marginTop": "18px" }}>
                <div>
                </div>
            </div>
        </Form> : <Navigate to={'/'} />
    )
}

export default ProfileForm