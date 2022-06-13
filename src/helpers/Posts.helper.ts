import { useEffect, useState } from "react"
import { QuotesRecent, QuotesScoreDesc, RandomQuote } from "../services/Posts.get"
import { Quote } from '../interfaces/models/Quote.interface'
import { PostRequest } from "../services/PostRequest.service"
import { PatchRequest } from "../services/PatchRequest.service"
import { idText } from "typescript"

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
            const qts = await QuotesRecent(limit)
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

export const PostPost = async (data: {content: string}) => {
    let msg = ""
    const setMsg = (m: string) => msg = m

    const res = await PostRequest('posts/myquote', data)
    setMsg(res.response?.data?.message || "")
    
    return {msg, res}
}

export const PatchPost = async (d: {id: number, content: string}) => {
    let msg = ""
    const setMsg = (m: string) => msg = m

    const {id, content} = d

    const res = await PatchRequest(`posts/myquote/${id}`, {content})
    setMsg(res.response?.data?.message || "")

    return {msg, res}
}