import { useDispatch } from "react-redux"
import { unsetUser } from "../interfaces/models/reducers/User.reducer"
import { LogoutService } from "../services/Logout.service"

export const Logout = async() =>{
    const data = await LogoutService()
    return data
}