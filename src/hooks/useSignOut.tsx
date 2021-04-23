import { useCallback, useEffect, useState } from 'react'
import { fbAuth } from '../firebase/config'

const useSingOut = () => {
    const [isLoading, setLoading] = useState<boolean>(null!)

    const signOut = useCallback(() => {
        setLoading(true)
    }, [])

    useEffect(() => {
        if (isLoading) {
            fbAuth.signOut().then(() => {
                setLoading(false)
            })
        }
    }, [isLoading])

    return { isLoading, signOut }
}

export default useSingOut
