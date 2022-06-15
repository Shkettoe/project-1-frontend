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

interface Props{
    id?: number,
    content: string,
    author: string,
    score: number,
    img?: string,
    vote?: string,
    auth?: boolean
}

const QuoteCard: React.FC<Props> = ({content, score, author, img, vote, auth, id}) => {
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
  return (
    <Card>
        <div>
            <Vote color={vote} className='vote' onClick={()=>auth && upvote(id)} src={orangeupvote} alt="upvote" />
            <p>{scor}</p>
            <Vote color={vote} className='vote' onClick={()=>auth && downvote(id)} src={orangedownvote} alt="downvote" />
        </div>
        <div>
            <div>
                <p>{content}</p>
                <p><ImgST width={ImgVars.small} url={img}/>{author}</p>
            </div>
        </div>
    </Card>
  )
}

const Card = styled.div`
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