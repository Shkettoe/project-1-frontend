import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, NavLink } from 'react-router-dom'
import { ButtonST } from '../assets/Button.style'
import { Form, Label, InputST } from '../assets/FormElements.style'
import { ButtonVars } from '../assets/Vars'
import { Validate } from '../helpers/ValidateProfileEdit.helper'
import { setUser } from '../interfaces/models/reducers/User.reducer'
import { GetMe } from '../services/Me.service'
import ErrorMsg from '../validation/ErrorMsg'
import { ProfileSchema } from '../validation/schemas/Profile.schema'

const ProfileForm = () => {
    const user = useSelector((state: any) => state?.user.value)
    const [msg, setMsg] = useState(" ")
    const [red, setRed] = useState(false)
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm<{ email: string, first_name: string, last_name: string }>({
        resolver: yupResolver(ProfileSchema)
    })

    const submit = handleSubmit(async (data, event) => {
        event?.preventDefault()
        await setMsg(await Validate(data))
    })

    useEffect(() => {
        if (!msg.length) {
            (async () => {
                const { data } = await GetMe()
                dispatch(setUser(data))
            })()
            setRed(true)
        }
    }, [msg])

    return (!red ?
        <Form onSubmit={submit}>
            <div>
                <Label htmlFor="email"><p>Email</p></Label>
                <InputST value={user.email} height='40px' width='529px' name='email' register={register} />
                <ErrorMsg content={errors.email?.message || ''} />
            </div>
            <div>
                <div>
                    <div>
                        <Label htmlFor="firstname"><p>First Name</p></Label>
                        <InputST value={user.first_name} height='40px' width='224.5px' name='first_name' register={register} />
                        <ErrorMsg content={errors.first_name?.message || ""} />
                    </div>
                    <div>
                        <Label htmlFor="lastname"><p>Last Name</p></Label>
                        <InputST value={user.last_name} height='40px' width='224.5px' name='last_name' register={register} />
                        <ErrorMsg content={errors.last_name?.message || ""} />
                    </div>
                </div>
                <div>
                    <div>
                        <Label htmlFor="firstname"><p>First Name</p></Label>
                        <ButtonST content='Change password' height='40px' width='227.5px' style={ButtonVars.lightorange} />
                        <ErrorMsg content={''} />
                    </div>
                    <div>
                        <Label htmlFor="lastname"><p>Last Name</p></Label>
                        <ButtonST content='Change profile picture' height='40px' width='227.5px' style={ButtonVars.darkorange} />
                        <ErrorMsg content={''} />
                        <ErrorMsg content={msg} />
                    </div>
                </div>
            </div>
            <div style={{ "marginTop": "16px" }}>
                <ButtonST content='Submit' width='107px' style={ButtonVars.darkorange} />
                <NavLink to={'/'}>Cancel</NavLink>
            </div>
            <div style={{ "marginTop": "18px" }}>
                <div>
                </div>
            </div>
        </Form> : <Navigate to={'/'} />
    )
}

export default ProfileForm