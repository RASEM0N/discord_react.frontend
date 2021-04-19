import { useCallback, useEffect, useState } from 'react'
import { channelRef } from '../firebase/config'
import { Channel } from '../interfaces/channel'

const useCreate = () => {
    const [isLoading, setLoading] = useState<boolean>(null!)
    const [errors, setErrors] = useState<any>(null)
    const [data, setData] = useState<Channel | null>(null)

    const create = useCallback((values: Channel) => {
        setData(values)
        setErrors(null)
        setLoading(true)
    }, [])

    // data не нужна т.к. придет в куки
    useEffect(() => {
        if (isLoading && data) {
            const key = channelRef.push().key
            if (key) {
                channelRef
                    .child(key)
                    .update(data)
                    .then(() => {
                        setData(null)
                        setLoading(false)
                    })
                    .catch((error) => {
                        setErrors(error)
                        setLoading(false)
                    })
            }
        }
    }, [isLoading, data])

    return { isLoading, errors, create }
}

export default useCreate
