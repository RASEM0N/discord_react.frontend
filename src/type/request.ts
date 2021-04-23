import { UserForMessageType } from '../store/message-reducer'
import { CreateByType } from '../store/channel-reducer'
import { ChannelFormType } from './form'

export type MessageRequestType = {
    content: string
    date: number
    user: UserForMessageType
}

export type ChannelRequestType = ChannelFormType & {
    createdBy: CreateByType
}
