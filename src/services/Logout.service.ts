import axios from "axios"

export const LogoutService = async () => {
    const data = await axios.post('users/logout').then(res => res).catch(err => err)
    return data
}