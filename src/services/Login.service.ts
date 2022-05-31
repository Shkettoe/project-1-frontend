import axios from "axios"
import { LoginInterface } from "../interfaces/models/Login.interface"

export const LoginService = async (credentials: LoginInterface) => {
    const res = await axios.post('users/login', credentials).then(res => res).catch(err => err)
    return res
}