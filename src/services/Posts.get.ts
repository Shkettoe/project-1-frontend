import axios from "axios";

export const QuotesScoreDesc = async (limit: number) => {
    const {data} = await axios.get(`posts/list?score=DESC&limit=${limit}`)
    return await data
}