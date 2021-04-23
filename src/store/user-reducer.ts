import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import firebase from 'firebase/app'

export type UserType = firebase.User

const initialState = {
    currentUser: null as null | UserType,
    isLoading: true,
}

const userReducer = createSlice({
    name: 'currentUser',
    initialState: initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<firebase.User>) => {
            state.currentUser = action.payload
            state.isLoading = false
        },

        clearCurrentUser: (state) => {
            state.currentUser = null
            state.isLoading = false
        },
    },
})

export default userReducer.reducer
export const { setCurrentUser, clearCurrentUser } = userReducer.actions
