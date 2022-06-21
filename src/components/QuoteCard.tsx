import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ImgST } from '../assets/Img.style'
import { ImgVars } from '../assets/Vars'
import orangeupvote from '../assets/icons/upvoteorange.png'
import orangedownvote from '../assets/icons/downvoteorange.png'
import { Downvote, Upvote } from '../helpers/Posts.helper'
import { useDispatch } from 'react-redux'
import { GetMe } from '../services/Me.service'
import { setUser } from '../interfaces/models/reducers/User.reducer'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import cogwheel from '../assets/icons/cogwheel.png'
import delet from '../assets/icons/delete.png'
import axios from 'axios'

interface Props{
    id?: number,
    content: string,
    author: string,
    score: number,
    img?: string,
    vote?: string,
    auth?: boolean,
    user_id?: number
}

const QuoteCard: React.FC<Props> = ({content, score, author, img, vote, auth, id, user_id}) => {
    const user = useSelector((state: any) => state?.user.value)
    const location = useLocation().pathname
    const [scor, setScor] = useState(0)
    useEffect(() => {
        setScor(score)
    }, [score])
    const dispatch = useDispatch()
    const upvote = async (id?: number) =>{
        const {msg, res} = await Upvote(id)
        if(!msg.length){
            const { data } = await GetMe()
            dispatch(setUser(data))
            return setScor(res.data.score)
        }
        alert("You can't like your own quotes")
    }
    const downvote = async (id?: number) => {
        const {msg, res} = await Downvote(id)
        if(!msg.length){
            const { data } = await GetMe()
            dispatch(setUser(data))
            return setScor(res.data.score)
        }
        alert("You can't dislike your own quotes")
    }
    const deletePost = async (id?:number) =>{
        var r = window.confirm('Are you sure about this?')
        console.log(r)
        if (r){
            await axios.delete(`posts/${id}`)
            window.location.reload()
        }
    }
  return (
    <Card>
        <div>
            <Vote color={vote} className='vote' onClick={()=>auth ? upvote(id) : window.location.replace('/register')} src={orangeupvote} alt="upvote" />
            <p>{scor}</p>
            <Vote color={vote} className='vote' onClick={()=>auth ? downvote(id) : window.location.replace('/register')} src={orangedownvote} alt="downvote" />
        </div>
        <div>
            <div>
                <p>{content}</p>
                {user && !location.startsWith('/profile') ?
                    <Link to={`/profile/${user_id}`}><p><ImgST width={ImgVars.small} url={img}/>{author}</p></Link>
                    :<p><ImgST width={ImgVars.small} url={img}/>{author}</p>
                }
            </div>
        </div>{user && user.id == user_id &&
            <Options>
                <Link to={`/myquote/${id}`}>
                    <img src={cogwheel} alt="" />
                </Link>
                <Link to={'#'} onClick={()=>{deletePost(id)}}>
                    <img src={delet} alt="" />
                </Link>
            </Options>
        }
    </Card>
  )
}

const Options = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 26px;
`

const Card = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    align-self: stretch;
    gap: 21px;
    width: 420px;
    min-height: 131px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 16px 32px 16px 16px;
    & div{
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
        justify-content: center;
        & div {
            display: flex;
            align-items: baseline;
            gap: 18px;
            & :nth-child(2) {
                font-size: 12px;
            }
            & img, p{
                max-width: 323px;
                overflow-wrap: break-word;
                margin-right: 8px;
                vertical-align: middle;
            }
        }
    }
`

const Vote = styled.img`
    filter: ${props => props.color === props.alt ? "brightness(100%)" : "brightness(0%)"};
    &:hover{
        filter: ${props => props.color === props.alt ? "brightness(0%)" : "brightness(100%)"};
    }
`

export default QuoteCard