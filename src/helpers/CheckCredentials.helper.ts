import { LoginInterface } from "../interfaces/models/Auth.interface"
import { PostRequest } from "../services/PostRequest.service"

export const Check = async (credentials: LoginInterface) => {
    let msg = ""
    const setMsg = (m: string) => {msg = m}

    const data = await PostRequest('users/login', credentials)
    if(data.response && data.response?.data?.error?.status === 404) setMsg("User with that email cannot be found")
    else if(data.response && data.response?.data?.error?.status === 401) setMsg("Incorrect password")

    return {msg, data}
}