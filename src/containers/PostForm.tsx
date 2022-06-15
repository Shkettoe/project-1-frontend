import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, NavLink, useLocation } from 'react-router-dom'
import { ButtonST } from '../assets/Button.style'
import { Form, Subtitle, TextAreaSt } from '../assets/FormElements.style'
import { ButtonVars } from '../assets/Vars'
import { PatchPost, PostPost } from '../helpers/Posts.helper'
import ErrorMsg from '../validation/ErrorMsg'
import { PostSchema } from '../validation/schemas/Post.schema'

const PostForm = () => {
    const [red, setRed] = useState(false)
    const [err, setErr] = useState("")
    const location = useLocation().pathname.split("/")[useLocation().pathname.split("/").length - 1]

    const {register, handleSubmit, formState: {errors}} = useForm<{content: string}>({
        resolver: yupResolver(PostSchema)
    })

    const submit = handleSubmit(async (data, event) => {
        event?.preventDefault()
        if(location === "myquote"){
            const {msg} = await PostPost(data)
            if(msg.length) return setErr(msg)
            setRed(true)
        } else {
            const {content} = data
            const id = parseInt(location)
            console.log(id, content)
            const {msg} = await PatchPost({id, content})
            if(msg.length) return setErr(msg)
            setRed(true)
        }
    } )

    return (!red ?
        <Form onSubmit={submit}>
            <Subtitle>{location === "myquote" ? <>You can post quotes. You can delete them on your profile.</> : <></>}</Subtitle>
            <TextAreaSt {...register('content')} name="content">{}</TextAreaSt>
            <ErrorMsg content={errors.content?.message || ""} />
            <div style={{ "marginTop": "16px" }}>
                <ErrorMsg content={err} />
                <ButtonST content='Submit' height='36px' width='107px' style={ButtonVars.darkorange} />
                <NavLink to={'/'}><div style={{"display": "inline", "padding": "32px"}}>Cancel</div></NavLink>
            </div>
        </Form>
        : <Navigate to={'/'}/>
    )
}

export default PostForm