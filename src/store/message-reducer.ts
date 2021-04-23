import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserForMessageType = {
    name: string
    avatar: string
    id: string
}

export type MessageType = {
    id: string
    content: string
    date: number
    user: UserForMessageType
}

const initialState = {
    messages: [] as Array<MessageType>,
    loading: true,
}

const messageReducer = createSlice({
    name: 'message',
    initialState: initialState,
    reducers: {
        getMessages: (state, action: PayloadAction<Array<MessageType>>) => {
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
