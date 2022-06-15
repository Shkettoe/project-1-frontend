import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ButtonST } from '../assets/Button.style'
import { Content, Grid, Heading, OrangeText, Grid2 } from '../assets/Common.style'
import { ButtonVars } from '../assets/Vars'
import QuoteCard from '../components/QuoteCard'
import { MostUpvoted, PostsHelper, RandomQuoteHelper, RecentQuotes } from '../helpers/Posts.helper'
import { Quote } from '../interfaces/models/Quote.interface'
import { User } from '../interfaces/models/User.interface'
import { Vote } from '../interfaces/models/Vote.interface'

const LoggedOut: React.FC<{ img: string, pic: string }> = ({ img, pic }) => {
    const {quotes} = PostsHelper()
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
                    <img src={img} />
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
    const {votes}: User = useSelector((state: any) => state?.user.value)
    const {quote} = RandomQuoteHelper()
    const {quotes, increaseLimitQ} = MostUpvoted()
    const {recent, increaseLimitR} = RecentQuotes()

    useEffect(() => {
        console.log(quote);
    }, [quote])

    const showPosts = (posts: Quote[]) =>
        posts.map((q: Quote)=>{
            let vote: string = ""
            for (const iterator of votes) {
                if(iterator.post?.id === q.id){
                    vote = iterator.val ? "upvote" : "downvote"
                }
            }
            return(
                <QuoteCard id={q.id} auth={true} vote={vote} key={q.id} img={q.user?.avatar} author={q.author} content={q.content} score={q.score} />
            )
        })
        
    return (
        <Content>
            <h1 style={{"marginTop": "124px"}}><OrangeText>Quote of the day</OrangeText></h1>
            <p>Quote of the day is a randomly chosen quote</p>
            <Grid2>
                <div></div>
                <QuoteCard vote='' auth={true} id={quote.id} author={quote.author} content={quote.content} score={quote.score} img={quote.user?.avatar} />
            </Grid2>
            <h1 style={{ 'fontSize': "32px", "marginTop": "74px" }}><OrangeText>Most Upvoted Quotes</OrangeText></h1>
            <p style={{ "textAlign": "center", "fontSize": "16px", "width": "534px" }}>Most upvoted quotes on the platform. Sign up or login to like the quotes and keep them saved in your profile</p>
            <Grid2 style={{"marginBottom": "52px"}}>
                {showPosts(quotes)}
            </Grid2>
            <a onClick={()=>increaseLimitQ()}><ButtonST content='Load more' style={ButtonVars.white}/></a>
            <h1 style={{ 'fontSize': "32px", "marginTop": "74px" }}><OrangeText>Most recent quotes</OrangeText></h1>
            <p style={{ "textAlign": "center", "fontSize": "16px", "width": "534px" }}>Recent quotes updates as soon user adds new quote. Go ahed 
show them that you seen the new quote and like the ones you like.</p>
            <Grid2 style={{"marginBottom": "52px"}}>
                {showPosts(recent)}
            </Grid2>
            <a onClick={()=>increaseLimitR()}><ButtonST content='Load more' style={ButtonVars.white}/></a>
        </Content>
    )
}

export default LoggedOut