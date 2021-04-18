import { combineReducers, configureStore } from '@reduxjs/toolkit'
import currentUser from './user/user'
import { Store } from '../interfaces/store'

const rootReducer = combineReducers<Store>({
    user: currentUser,
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})

export default store
