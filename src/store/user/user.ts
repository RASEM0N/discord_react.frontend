import { createSlice } from '@reduxjs/toolkit'
import { InitialStateUser } from '../../interfaces/user'

const initialState: InitialStateUser = {
    currentUser: null,
    isLoading: true,
}

const userReducer = createSlice({
    name: 'currentUser',
    initialState: initialState,
    reducers: {
        setCurrentUser: (state, { payload }) => {
            state.currentUser = payload
            state.isLoading = false
        },
    },
})

export default userReducer.reducer
export const { setCurrentUser } = userReducer.actions
