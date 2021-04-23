import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CreateByType = {
    avatar: string
    date: number
    name: string
}

export type ChannelType = {
    id: string
    channelDetails: string
    channelName: string
    createdBy: CreateByType
}

const initialState = {
    currentChannel: null as null | ChannelType,
    channels: [] as Array<ChannelType>,
    isLoading: true,
}

const channelReducer = createSlice({
    name: 'channels',
    initialState: initialState,
    reducers: {
        getCurrentChannel: (state, action: PayloadAction<ChannelType>) => {
            state.currentChannel = action.payload
            state.isLoading = false
        },
        getChannels: (state, action: PayloadAction<Array<ChannelType>>) => {
            state.channels.push(...action.payload)
        },
    },
})

export default channelReducer.reducer
export const { getCurrentChannel, getChannels } = channelReducer.actions
