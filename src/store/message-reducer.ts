import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserType = {
    name: string
    avatar: string
    id: string
}

type MessageType = {
    id: string
    content: string
    date: number
    user: UserType
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
