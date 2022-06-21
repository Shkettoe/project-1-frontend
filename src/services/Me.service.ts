import axios from "axios"

export const GetMe = async() =>{
    const data = await axios.get('/users/me')
    return data
}