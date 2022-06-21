import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Navigate, NavLink, useLocation, useParams } from 'react-router-dom'
import { ButtonST } from '../assets/Button.style'
import { Form, Subtitle, TextAreaSt } from '../assets/FormElements.style'
import { ButtonVars } from '../assets/Vars'
import { PatchPost, PostPost } from '../helpers/Posts.helper'
import { Quote } from '../interfaces/models/Quote.interface'
import { setUser } from '../interfaces/models/reducers/User.reducer'
import { Get } from '../services/Get.request'
import { GetMe } from '../services/Me.service'
import ErrorMsg from '../validation/ErrorMsg'
import { PostSchema } from '../validation/schemas/Post.schema'

const PostForm = () => {
    const dispatch = useDispatch()
    const [red, setRed] = useState(false)
    const [err, setErr] = useState("")
    const params = useParams()
    const [data, setData] = useState<Quote | null>()
    const location = useLocation().pathname.split("/")[useLocation().pathname.split("/").length - 1]

    useEffect(()=>{
        if(params.id){
            (async ()=>{
                var data = await Get('/posts/', params.id)
                await setData(data)
            })()
        }
    },[])

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
        const user = await GetMe()
        await dispatch(setUser(user.data))
    } )

    return (!red ?
        <Form onSubmit={submit}>
            <Subtitle>{location === "myquote" && <>You can post quotes. You can delete them on your profile.</>}</Subtitle>
            <TextAreaSt {...register('content')} name="content" defaultValue={data?.content}></TextAreaSt>
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