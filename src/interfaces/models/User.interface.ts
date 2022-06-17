import { Quote } from "./Quote.interface";
import { Vote } from "./Vote.interface";

export interface User{
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    avatar: string,
    posts: Quote[],
    votes: Vote[]
}