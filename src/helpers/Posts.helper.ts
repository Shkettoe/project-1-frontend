import { useEffect, useState } from "react"
import { QuotesRecent, QuotesScoreDesc, RandomQuote } from "../services/Posts.get"
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

export const MostUpvoted = (limit: number) => {
    const [quotes, setQuotes] = useState([])
    useEffect(()=>{
        (async()=>{
            setQuotes(await QuotesScoreDesc(limit))
        })()
    }, [])

    return {quotes}
}

export const RecentQuotes = (limit: number) => {
    const [recent, setRecent] = useState([])
    useEffect(()=>{
        (async()=>{
            setRecent(await QuotesRecent(limit))
        })()
    }, [])

    return {recent}
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