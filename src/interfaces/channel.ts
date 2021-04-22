import firebase from 'firebase/app'

export interface ChannelFormType {
    channelName: string
    channelDetails: string
}
export interface ChannelType {
    channelName: string
    channelDetails: string
    createdBy: {
        name: string
        avatar: string
        date: number
    }
}

type IChannel = {
    channel: ChannelType
    id: string
}

export interface InitialStateChannel {
    currentChannel: null | IChannel
    channels: []
    message: {
        messages: []
        messageLoading: boolean
    }
    isLoading: boolean
}
