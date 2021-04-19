import firebase from 'firebase/app'

export interface ChannelForm {
    channelName: string
    channelDetails: string
}
export interface Channel {
    channelName: string
    channelDetails: string
    createdBy: {
        name: string
        avatar: string
        date: number
    }
}

type IChannel = firebase.User

export interface InitialStateChannel {
    currentChannel: null | IChannel
    channels: []
    message: {
        messages: []
        messageLoading: boolean
    }
    isLoading: boolean
}
