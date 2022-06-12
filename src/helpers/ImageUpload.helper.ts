import { PatchRequest } from "../services/PatchRequest.service"


export const ImageUpload = async (files: FileList | null) =>{
    if(!files) return

    const formData = new FormData()
    formData.append('file', files[0])

    const data = await PatchRequest('users/pfp', formData)
    console.log(data)

    return data
}