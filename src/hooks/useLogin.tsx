import { useCallback, useEffect, useState } from 'react'
import { fbAuth } from '../firebase/config'
import { ILogin } from '../type/form'

const useLogin = () => {
    const [isLoading, setLoading] = useState<boolean>(null!)
    const [errors, setErrors] = useState<any>(null)
    const [userData, setUserData] = useState<ILogin | null>(null)

    const userAuthorization = useCallback((data: ILogin) => {
        setUserData(data)
        setErrors(null)
        setLoading(true)
    }, [])

    // data не нужна т.к. придет в куки
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
