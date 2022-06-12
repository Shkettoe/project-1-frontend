import axios from "axios"

interface ClassConstructor {}

export const PostRequest = async (route: string, input?: ClassConstructor) => {
    const res = await axios.post(route, input).then(res => res).catch(err => err)
    return res
}