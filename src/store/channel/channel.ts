import { createSlice } from '@reduxjs/toolkit'
import { InitialStateChannel } from '../../interfaces/channel'

const initialState: InitialStateChannel = {
    currentChannel: null,
    channels: [],
    message: {
        messages: [],
        messageLoading: true,
    },
    isLoading: true,
}

const channelReducer = createSlice({
    name: 'channels',
    initialState: initialState,
    reducers: {
        setCurrentChannel: (state, { payload }) => {
            state.currentChannel = payload
            state.isLoading = false
        },
    },
})

export default channelReducer.reducer
export const { setCurrentChannel } = channelReducer.actions
