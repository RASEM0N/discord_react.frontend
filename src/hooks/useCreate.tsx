import { useCallback, useEffect, useState } from 'react'
import { channelRef } from '../firebase/config'
import { ChannelRequestType } from '../type/request'

const useCreate = () => {
    const [isLoading, setLoading] = useState<boolean>(null!)
    const [errors, setErrors] = useState<any>(null)
    const [data, setData] = useState<ChannelRequestType | null>(null)

    const create = useCallback((values: ChannelRequestType) => {
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
