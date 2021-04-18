import { combineReducers, configureStore } from '@reduxjs/toolkit'
import currentUser from './user/user'

const rootReducer = combineReducers({
    user: currentUser,
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})

export default store
