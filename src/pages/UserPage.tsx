import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Content, Grid2, OrangeText } from '../assets/Common.style'
import { ImgST } from '../assets/Img.style'
import { ImgVars } from '../assets/Vars'
import QuoteCard from '../components/QuoteCard'
import { Quote } from '../interfaces/models/Quote.interface'
import { User } from '../interfaces/models/User.interface'
import { Vote } from '../interfaces/models/Vote.interface'

const UserPage = () => {
    const [karma, setKarma] = useState(0)
    const user = useSelector((state: {user: {value: User}}) => state?.user.value)
    const [recent, setRecent] = useState([...user.posts])
    const [mostLiked, setMostLiked] = useState([...user.posts])

    useEffect(()=>{
        (async ()=>{
            setRecent(p => p.reverse())
            setMostLiked(p => p.sort((a, b)=>b.score-a.score))
            setKarma(0)
            await user.posts.map((p: Quote) => {
                setKarma(pk => pk + p.score)
                return
            })
        })()
    }, [])

    return (
        <Content style={{"marginTop": "120px"}}>
            <Orange />
            <ImgST width={ImgVars.large} url={user.avatar} />
            <Name>{user.first_name} {user.last_name}</Name>
            <ScoreGrid>
                <div>Quotes
                    <p><OrangeText>{user.posts.length}</OrangeText></p>
                </div>
                <div>Quotastic Karma
                    <p>{karma}</p>
                </div>
            </ScoreGrid>
            <Grid2>
                <div>
                    <ListHeading><OrangeText>Most liked quotes</OrangeText></ListHeading>
                    {mostLiked.map((q: Quote) => {
                        return (
                            <QuoteCard key={q.id} img={user.avatar} author={q.author} content={q.content} score={q.score} />
                        )
                    })}
                </div>
                <div>
                    <ListHeading>Most recent</ListHeading>
                    {recent.map((q: Quote) => {
                        return (
                            <QuoteCard key={q.id} img={user.avatar} author={q.author} content={q.content} score={q.score} />
                        )
                    })}
                </div>
                <div>
                    <ListHeading>Liked</ListHeading>
                    {user.votes.map((v: Vote)=>{
                        if(v.val)
                        return(
                            <QuoteCard vote='upvote' id={v.post?.id} key={v.post?.id} img={v.post?.user?.avatar} author={v.post?.author || ""} content={v.post?.content || ""} score={v.post?.score || 0} />
                        )
                    })}
                </div>
            </Grid2>
        </Content>
    )
}

const ListHeading = styled.p`
    font-size: 24px;
    margin: 20px;
`

const Name = styled.p`
    color: #fff;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300;
    font-size: 35px !important;
`

const ScoreGrid = styled.div`
    width: 315px;
    height: 83px;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    display: grid;
    grid-template-columns: 1fr 1fr;
    & div{
        font-size: 16px;
        gap: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        & p {
            font-size: 24px;
            font-weight: 300;
        }
    }
`

const Orange = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 414.5px;
    background-color: #DE8667;
    z-index: -1;
`

export default UserPage