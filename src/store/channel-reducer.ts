import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ChannelRequestType } from '../type/request'

export type ChannelTypeForState = ChannelRequestType & {
    channelId: string
}

const initialState = {
    currentChannel: null as null | ChannelTypeForState,
    channels: [] as Array<ChannelTypeForState>,
    isLoading: true,
}

const channelReducer = createSlice({
    name: 'channels',
    initialState: initialState,
    reducers: {
        getCurrentChannel: (
            state,
            action: PayloadAction<ChannelTypeForState>
        ) => {
            state.currentChannel = action.payload
            state.isLoading = false
        },
        getChannels: (
            state,
            action: PayloadAction<Array<ChannelTypeForState>>
        ) => {
            state.channels.push(...action.payload)
        },
    },
})

export default channelReducer.reducer
export const { getCurrentChannel, getChannels } = channelReducer.actions
