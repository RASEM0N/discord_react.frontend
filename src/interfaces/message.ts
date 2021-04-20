export interface MessageForm {
    message: string
}

export interface Message {
    content: string
    date: number
    user: {
        id: string
        name: string
        avatar: string
    }
}
