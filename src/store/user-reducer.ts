import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import firebase from 'firebase/app'

const initialState = {
    currentUser: null as null | firebase.User,
    isLoading: true,
}

type InitialStateType = typeof initialState

const userReducer = createSlice({
    name: 'currentUser',
    initialState: initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<firebase.User>) => {
            state.currentUser = payload
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
