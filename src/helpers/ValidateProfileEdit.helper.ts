import { Profile } from "../interfaces/models/EditProfile.interface";
import { ProfileEditService } from "../services/ProfileEdit.service";

export const Validate = async(input: Profile) =>{
    let msg = ""
    const setMsg = (m: string) => {msg = m}

    const data = await ProfileEditService(input)
    if(data.response && data.response?.data?.statusCode === 400) setMsg("User with that email already exists")
    return msg
}