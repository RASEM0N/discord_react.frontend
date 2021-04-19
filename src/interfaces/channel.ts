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
