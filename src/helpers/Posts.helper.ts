import { useEffect, useState } from "react"
import { QuotesScoreDesc, RandomQuote } from "../services/Posts.get"
import { Quote } from '../interfaces/models/Quote.interface'

export const PostsHelper = () => {
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        (async ()=>{
            setQuotes(await QuotesScoreDesc(9))
        })()
    }, [])

    return {quotes}
}

export const MostUpvoted = () => {
    const [limit, setLimit] = useState(3)
    const [quotes, setQuotes] = useState([])
    useEffect(()=>{
        (async () => {
            const qts = await QuotesScoreDesc(limit)
            setQuotes(qts)
        })()
    }, [limit])

    const increaseLimitQ = () =>{
        setLimit(prevLimit => prevLimit + 3)
    }

    return {quotes, increaseLimitQ};
}

export const RecentQuotes = () => {
    const [limit, setLimit] = useState(3)
    const [recent, setQuotes] = useState([])
    useEffect(()=>{
        (async () => {
            const qts = await QuotesScoreDesc(limit)
            setQuotes(qts)
        })()
    }, [limit])

    const increaseLimitR = () =>{
        setLimit(prevLimit => prevLimit + 3)
    }

    return {recent, increaseLimitR};
}

export const RandomQuoteHelper = () => {
    const q: Quote = {
        id: 0,
        author: "",
        content: "",
        score: 0,
        user: {
            avatar: ""
        }
    }
    
    const [quote, setQuote] = useState(q)

    useEffect(() => {
        (async () => {
            setQuote(await RandomQuote())
        })()
    }, [])

    return {quote}
}