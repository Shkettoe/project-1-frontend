import axios from "axios"
import { RegisterInterface } from "../interfaces/models/Auth.interface"

export const RegisterService = async (credentials: RegisterInterface) => {
    const res = await axios.post('users/register', credentials).then(res => res).catch(err => err)
    return res
}