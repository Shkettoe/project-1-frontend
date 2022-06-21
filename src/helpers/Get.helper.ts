import { Get } from "../services/Get.request"

export const GetHelp = async (route: string, params: string) =>{
    const data = await Get(route, params)
    const res = await {...data}
    return await res
}