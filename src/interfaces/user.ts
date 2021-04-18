import firebase from 'firebase/app'

export interface InitialStateUser {
    currentUser: null | firebase.User
    isLoading: boolean
}
