import { useCallback, useEffect, useState } from 'react'
import { fbAuth } from '../firebase/config'

const useSingOut = () => {
    const [isLoading, setLoading] = useState<boolean>(null!)

    const signOut = useCallback(() => {
        setLoading(true)
    }, [])

    // data не нужна т.к. придет в куки
    useEffect(() => {
        if (isLoading) {
            fbAuth.signOut().then(() => {
                console.log('sign out')
                setLoading(false)
            })
        }
    }, [isLoading])

    return { isLoading, signOut }
}

export default useSingOut
