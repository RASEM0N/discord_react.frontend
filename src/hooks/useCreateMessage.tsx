import { messageRef } from '../firebase/config'
import { useCallback, useEffect, useState } from 'react'
import { Message } from '../interfaces/message'

const useCreateMessage = () => {
    const [isLoading, setLoading] = useState<boolean>(null!)
    const [errors, setErrors] = useState<any>(null)
    const [data, setData] = useState<{
        channelId: string
        values: Message
    } | null>(null)

    const create = useCallback((channelId: string, values: Message) => {
        setData({
            channelId,
            values,
        })
        setErrors(null)
        setLoading(true)
    }, [])

    // data не нужна т.к. придет в куки
    useEffect(() => {
        if (isLoading && data) {
            messageRef
                .child(data.channelId)
                .push()
                .set(data.values)
                .then(() => {
                    setData(null)
                    setLoading(false)
                })
                .catch((error) => {
                    setErrors(error)
                    setLoading(false)
                })
        }
    }, [isLoading, data])

    return { isLoading, errors, create }
}

export default useCreateMessage
