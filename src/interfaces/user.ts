import firebase from 'firebase/app'

export type IUser = firebase.User

export interface InitialStateUser {
    currentUser: null | IUser
    isLoading: boolean
}
