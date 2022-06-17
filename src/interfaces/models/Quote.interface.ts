import { User } from "./User.interface"

export interface Quote{
    id: number,
    user: User | null,
    author: string | any,
    content: string,
    score: number,
    posted_at?: any
}