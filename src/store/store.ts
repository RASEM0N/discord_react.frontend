import { combineReducers, configureStore } from '@reduxjs/toolkit'
import currentUser from './user-reducer'
import channelReducer from './channel-reducer'

const rootReducer = combineReducers({
    user: currentUser,
    channel: channelReducer,
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})

export type RootStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = typeof store.dispatch

export default store
