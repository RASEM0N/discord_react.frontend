import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MessageRequestType } from '../type/request'

export type MessageTypeForState = MessageRequestType & {
    messageId: string
}

const initialState = {
    messages: [] as Array<MessageTypeForState>,
    loading: true,
}

const messageReducer = createSlice({
    name: 'message',
    initialState: initialState,
    reducers: {
        getMessages: (
            state,
            action: PayloadAction<Array<MessageTypeForState>>
        ) => {
            state.messages.push(...action.payload)
            state.loading = false
        },
        resetMessages: (state) => {
            state.messages.length = 0
            state.loading = true
        },
    },
})

export default messageReducer.reducer
export const { getMessages, resetMessages } = messageReducer.actions
