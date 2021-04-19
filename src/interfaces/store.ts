import { InitialStateUser } from './user'
import { InitialStateChannel } from './channel'

export interface Store {
    user: InitialStateUser
    channel: InitialStateChannel
}
