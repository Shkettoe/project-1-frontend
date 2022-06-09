import { Password, Profile } from "../interfaces/models/EditProfile.interface";
import { PatchRequest } from "../services/PatchRequest.service";

export const Validate = async(input: Profile) =>{
    let msg = ""
    const setMsg = (m: string) => {msg = m}

    for (const key in input) {
        // @ts-ignore
        if (!input[key]) {
            //@ts-ignore
            delete input[key]
        }
    }

    const data = await PatchRequest("users/me", input)
    if(data.response && data.response?.data?.statusCode === 400) setMsg("User with that email already exists")
    return msg
}

export const ValidatePassword = async (input: Password) =>{
    let msg = ""
    const setMsg = (m: string) => {msg = m}

    const data = await PatchRequest("users/me/update-password", input)
    if(data.response && data.response?.data?.statusCode) setMsg(data.response?.data?.message)
    console.log(msg)
    return msg
}