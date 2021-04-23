import { useCallback, useEffect, useState } from 'react'
import firebase from 'firebase/app'
import { RequestType } from '../type/request'

function useDatabase<T extends RequestType>(
    reference: firebase.database.Reference
) {
    const [isLoading, setLoading] = useState<boolean>(null!)
    const [errors, setErrors] = useState<any>(null)
    const [data, setData] = useState<T | null>(null)

    const create = useCallback((values: T) => {
        setData(values)
        setErrors(null)
        setLoading(true)
    }, [])

    useEffect(() => {
        if (isLoading && data) {
            reference
                .push(data)
                .then(() => {
                    setLoading(false)
                    setData(null)
                })
                .catch((error) => {
                    setLoading(false)
                    setErrors(error)
                })
        }
    }, [isLoading, data])

    return { isLoading, errors, create }
}

export default useDatabase
