import axios from "axios"

export const Get = async (route: string, params?: string) =>{
    const {data} = await axios.get(route+params)
    return data
}