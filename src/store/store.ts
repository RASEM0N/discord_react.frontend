import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user-reducer'
import channelReducer from './channel-reducer'
import messageReducer from './message-reducer'

const rootReducer = combineReducers({
    user: userReducer,
    channel: channelReducer,
    message: messageReducer,
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})

export type RootStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = typeof store.dispatch

export default store
