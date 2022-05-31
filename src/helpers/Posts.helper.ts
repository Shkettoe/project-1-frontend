import { useEffect, useState } from "react"
import { QuotesScoreDesc } from "../services/Posts.get"

export const PostsHelper = () => {
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        (async ()=>{
            setQuotes(await QuotesScoreDesc(9))
        })()
    }, [])

    return quotes
}