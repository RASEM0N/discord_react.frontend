import { useCallback, useEffect, useState } from 'react'
import { fbAuth } from '../firebase/config'
import { LoginFormType } from '../type/form'

const useLogin = () => {
    const [isLoading, setLoading] = useState<boolean>(null!)
    const [errors, setErrors] = useState<any>(null)
    const [userData, setUserData] = useState<LoginFormType | null>(null)

    const userAuthorization = useCallback((data: LoginFormType) => {
        setUserData(data)
        setErrors(null)
        setLoading(true)
    }, [])

    useEffect(() => {
        if (isLoading && userData) {
            fbAuth
                .signInWithEmailAndPassword(userData.email, userData.password)
                .then((user) => {
                    console.log('logged in')
                    setLoading(false)
                    setUserData(null)
                })
                .catch((error) => {
                    setLoading(false)
                    setErrors(error.message)
                    setUserData(null)
                })
        }
    }, [isLoading, userData, userAuthorization])

    return { isLoading, errors, userAuthorization }
}

export default useLogin
