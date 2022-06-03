import { Cookies, CookiesProvider, useCookies } from "react-cookie"

export const GetCookie = async () => {
    
    const [cookie] = await useCookies(['jwt'])
    return await cookie || undefined
}