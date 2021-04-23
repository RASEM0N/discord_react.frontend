import { messageRef } from '../firebase/config'
import { useCallback, useEffect, useState } from 'react'
import { MessageRequestType } from '../type/request'

const useCreateMessage = () => {
    const [isLoading, setLoading] = useState<boolean>(null!)
    const [errors, setErrors] = useState<any>(null)
    const [data, setData] = useState<MessageRequestType | null>(null)
    const [itemId, setItemId] = useState<string>('')

    const create = useCallback(
        (values: MessageRequestType, channelId: string) => {
            setData(values)
            setItemId(channelId)
            setErrors(null)
            setLoading(true)
        },
        []
    )

    // data не нужна т.к. придет в куки
    useEffect(() => {
        if (isLoading && data) {
            messageRef
                .child(itemId)
                .push(data)
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
