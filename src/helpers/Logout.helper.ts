import { PostRequest } from "../services/PostRequest.service"

export const Logout = async() =>{
    const data = await PostRequest('users/logout')
    return data
}