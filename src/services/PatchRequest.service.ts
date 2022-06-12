import axios from "axios"

interface ClassConstructor {}

export const PatchRequest = async (route: string, input: ClassConstructor) => {
    const res = await axios.patch(route, input).then(res => res).catch(err => err)
    return res
}