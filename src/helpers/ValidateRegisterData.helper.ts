import { RegisterInterface } from "../interfaces/models/Auth.interface";
import { RegisterService } from "../services/Register.service";

export const Validate = async(input: RegisterInterface) =>{
    let msg = ""
    const setMsg = (m: string) => {msg = m}

    const data = await RegisterService(input)
    if(data.response && data.response?.data?.statusCode === 400) setMsg("User with that email already exists")
    return msg
}