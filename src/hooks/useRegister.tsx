import { useCallback, useEffect, useState } from 'react'
import firebase, { fbAuth, userRef } from '../firebase/config'
import { IRegister } from '../type/form'

const useRegister = () => {
    const [isLoading, setLoading] = useState<boolean>(null!)
    const [errors, setErrors] = useState<any>(null)
    const [userData, setUserData] = useState<IRegister | null>(null)

    const createUser = useCallback((data: IRegister) => {
        setUserData(data)
        setErrors(null)
        setLoading(true)
    }, [])

    const saveUserToDatabase = useCallback(
        (createdUser: firebase.auth.UserCredential) => {
            if (!createdUser.user) throw 'error'
            return userRef.child(createdUser.user.uid).set({
                name: createdUser.user.displayName,
                avatar: createdUser.user.photoURL,
                email: createdUser.user.email,
            })
        },
        []
    )

    // data не нужна т.к. придет в куки
    useEffect(() => {
        if (isLoading && userData) {
            console.log('внутри')
            fbAuth
                .createUserWithEmailAndPassword(
                    userData.email,
                    userData.password
                )
                .then((createdUser) => {
                    createdUser.user
                        ?.updateProfile({
                            displayName: userData.username,
                            photoURL: 'https://picsum.photos/300',
                        })
                        .then(() => {
                            saveUserToDatabase(createdUser)
                                .then(() => {
                                    console.log('userProfile saved')
                                })
                                .catch((error) => {
                                    console.error(
                                        'Bad save a userProfile to database'
                                    )
                                    setErrors(error.message)
                                })
                        })
                })
                .then(() => {
                    setLoading(false)
                    setUserData(null)
                })
                .catch((error) => {
                    setUserData(null)
                    setErrors(error.message)
                    setLoading(false)
                })
        }
    }, [isLoading, userData, saveUserToDatabase])

    return { isLoading, errors, createUser }
}

export default useRegister
