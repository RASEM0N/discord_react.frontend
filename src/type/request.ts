import { ChannelFormType } from './form'

export type CreateByType = {
    avatar: string
    id: string
    date: number
    name: string
}

export type MessageRequestType = {
    content: string
    date: number
    createdBy: CreateByType
}

export type ChannelRequestType = ChannelFormType & {
    createdBy: CreateByType
}
