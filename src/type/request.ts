import { UserForMessageType } from '../store/message-reducer'

export type MessageRequestType = {
    content: string
    date: number
    user: UserForMessageType
}