export interface MessageForm {
    message: string
}

export type UserType = {
    id: string
    name: string
    avatar: string
}

export interface Message {
    content: string
    date: number
    user: UserType
}
