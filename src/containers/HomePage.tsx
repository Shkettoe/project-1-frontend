import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonST } from '../assets/Button.style'
import { Content, Grid, Heading, OrangeText, Grid2 } from '../assets/Common.style'
import { ButtonVars, ImgVars } from '../assets/Vars'
import QuoteCard from '../components/QuoteCard'
import { MostUpvoted, PostsHelper, RandomQuoteHelper, RecentQuotes } from '../helpers/Posts.helper'
import { Quote } from '../interfaces/models/Quote.interface'
import { User } from '../interfaces/models/User.interface'
import orangeupvote from '../assets/icons/upvoteorange.png'
import orangedownvote from '../assets/icons/downvoteorange.png'
import { ImgST } from '../assets/Img.style'
import '../assets/Qotd.css'

const LoggedOut: React.FC<{ img: string }> = ({ img }) => {
    const { quote } = RandomQuoteHelper()
    const { quotes } = PostsHelper()
    return (
        <Content style={{ "marginBottom": "200px" }}>
            <Grid>
                <div>
                    <Heading>
                        Welcome to <OrangeText>Quotastic</OrangeText>
                    </Heading>
                    <p style={{ "width": "34em" }}>
                        Quotastic is free online platform for you to explore the  quips, quotes, and proverbs. Sign up and express yourself.
                    </p>
                    <Link to={'/register'}>
                        <ButtonST height='40px' width='137px' content='Sign up' style={ButtonVars.darkorange} />
                    </Link>
                </div>
                <div>
                    <QOTD color={img}>
                        {/* <div className='qotd'>
                            <div className='left'>
                                <img color={""} className='vote' onClick={() => window.location.replace('/register')} src={orangeupvote} alt="upvote" />
                                <p>{quote.score}</p>
                                <img color={""} className='vote' onClick={() => window.location.replace('/register')} src={orangedownvote} alt="downvote" />
                            </div>
                            <div className='right'>
                                <p className='content'>{quote.content}</p>
                                <p className='author'><ImgST width={ImgVars.small} url={quote.user?.avatar} />{quote.author}</p>
                            </div>
                        </div> */}
                    </QOTD>
                </div>
            </Grid>
            <h1 style={{ 'fontSize': "61px", "width": "703px", "marginBottom": "124px" }}>Explore the world of <OrangeText>fantastic quotes</OrangeText></h1>
            <h1 style={{ 'fontSize': "32px", "marginTop": "124px" }}><OrangeText>Most Upvoted Quotes</OrangeText></h1>
            <p style={{ "textAlign": "center", "fontSize": "16px", "width": "534px" }}>Most upvoted quotes on the platform. Sign up or login to like the quotes and keep them saved in your profile</p>
            <Grid2>
                {quotes.map((q: Quote) => {
                    return (
                        <QuoteCard key={q.id} img={q.user?.avatar} author={q.author} content={q.content} score={q.score} />
                    )
                })}
            </Grid2>
            <Link to={"/register"}>
                <ButtonST height='40px' width='184px' style={ButtonVars.white} content='Sign up to see more' />
            </Link>
        </Content>
    )
}

export const LoggedIn = () => {
    const { votes }: User = useSelector((state: any) => state?.user.value)
    const { quote } = RandomQuoteHelper()
    const { quotes, increaseLimitQ } = MostUpvoted()
    const { recent, increaseLimitR } = RecentQuotes()

    const showPosts = (posts: Quote[]) =>
        posts.map((q: Quote) => {
            let vote: string = ""
            for (const iterator of votes) {
                if (iterator.post?.id === q.id) {
                    vote = iterator.val ? "upvote" : "downvote"
                }
            }
            return (
                <QuoteCard id={q.id} user_id={q.user?.id} auth={true} vote={vote} key={q.id} img={q.user?.avatar} author={q.author} content={q.content} score={q.score} />
            )
        })

    return (
        <Content>
            <h1 style={{ "marginTop": "124px" }}><OrangeText>Quote of the day</OrangeText></h1>
            <p>Quote of the day is a randomly chosen quote</p>
            <Content>
                {quote ? showPosts([quote]) : <p>Nobody posted on my app yet....</p>}
            </Content>
            <h1 style={{ 'fontSize': "32px", "marginTop": "74px" }}><OrangeText>Most Upvoted Quotes</OrangeText></h1>
            <p style={{ "textAlign": "center", "fontSize": "16px", "width": "534px" }}>Most upvoted quotes on the platform. Sign up or login to like the quotes and keep them saved in your profile</p>
            <Grid2 style={{ "marginBottom": "52px" }}>
                {showPosts(quotes)}
            </Grid2>
            <a onClick={() => increaseLimitQ()}><ButtonST content='Load more' style={ButtonVars.white} /></a>
            <h1 style={{ 'fontSize': "32px", "marginTop": "74px" }}><OrangeText>Most recent quotes</OrangeText></h1>
            <p style={{ "textAlign": "center", "fontSize": "16px", "width": "534px" }}>Recent quotes updates as soon user adds new quote. Go ahed
                show them that you seen the new quote and like the ones you like.</p>
            <Grid2 style={{ "marginBottom": "52px" }}>
                {showPosts(recent)}
            </Grid2>
            <a onClick={() => increaseLimitR()}><ButtonST content='Load more' style={ButtonVars.white} /></a>
        </Content>
    )
}

const QOTD = styled.div`
    & * {
        font-size: 19px !important;
        word-wrap: break-word;
    }
    padding: 0px;
    margin: 0px;
    max-width: 439px;
    max-height: 400px;
    gap: 20px;
    height: 360px;
    display: grid;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    background: url(${props => props.color});
`

export default LoggedOut