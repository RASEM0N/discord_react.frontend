import { combineReducers, configureStore } from '@reduxjs/toolkit'
import currentUser from './user/user'
import channelReducer from './channel/channel'
import { Store } from '../interfaces/store'

const rootReducer = combineReducers<Store>({
    user: currentUser,
    channel: channelReducer,
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})

export default store
