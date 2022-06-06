export interface Quote{
    id: number,
    user: {
        avatar: string,
    },
    author: string,
    content: string,
    score: number
}