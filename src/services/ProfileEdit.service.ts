import axios from "axios";
import { Profile } from "../interfaces/models/EditProfile.interface";

export const ProfileEditService = async (input: Profile) => {
    const res = await axios.patch('users/me', input).then(res => res).catch(err => err)
    return res
}