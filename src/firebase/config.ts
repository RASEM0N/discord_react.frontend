import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/analytics'
// import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyDe9XwsA9a1-cMwFBaeuO7wc5PtJxQt9QA',
    authDomain: 'react-ds.firebaseapp.com',
    projectId: 'react-ds',
    storageBucket: 'react-ds.appspot.com',
    messagingSenderId: '1088280408257',
    appId: '1:1088280408257:web:dd90f63badb641599d6440',
    measurementId: 'G-RGPH3L3VQS',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export const fbAuth = firebase.auth()
export const fbDatabase = firebase.database()
export const fbStorage = firebase.storage()
// export const timestamp = firebase.firestore.FieldValue.serverTimestamp

// references
export const userRef = fbDatabase.ref('users')
export const channelRef = fbDatabase.ref('channels')

export default firebase
