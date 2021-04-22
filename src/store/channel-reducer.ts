import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CreateByType = {
    avatar: string
    date: number
    name: string
}

type ChannelType = {
    channelDetails: string
    channelName: string
    createdBy: CreateByType
}

const initialState = {
    currentChannel: null as null | ChannelType,
    channels: [] as Array<ChannelType>,
    message: {
        messages: [],
        messageLoading: true,
    },
    isLoading: true,
}

type InitialStateType = typeof initialState

const channelReducer = createSlice({
    name: 'channels',
    initialState: initialState,
    reducers: {
        setCurrentChannel: (state, action: PayloadAction<ChannelType>) => {
            state.currentChannel = action.payload
            state.isLoading = false
        },
    },
})

export default channelReducer.reducer
export const { setCurrentChannel } = channelReducer.actions
