import { Quote } from "./Quote.interface";
import { User } from "./User.interface";

export interface Vote{
    val?: boolean,
    user?: User,
    post?: Quote
}