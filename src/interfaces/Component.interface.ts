import { ChangeEventHandler } from "react"

export interface Props {
    content?: string
    className?: string
    name?: string
    value?: string
    pd?: boolean
    onChange?: ChangeEventHandler<HTMLInputElement>
    register?: any
    type?: string
    style?: {
        bg?: string,
        fg?: string,
        border?: string,
        width?: string
    }
    width?: string
    height?: string
    url?: string
}