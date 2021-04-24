import { useCallback, useEffect, useState } from 'react'
import firebase from 'firebase/app'
import { CreateByType } from '../type/request'

function useStorage(
    refStorage: firebase.storage.Reference,
    refFirebase: firebase.database.Reference
) {
    const [isLoading, setLoading] = useState<boolean>(null!)
    const [progress, setProgress] = useState<number>(0)
    const [errors, setErrors] = useState<string | null>(null)
    const [file, setFile] = useState<File | null>(null)
    const [createdBy, setCreatedBy] = useState<CreateByType | null>(null)

    const uploadFile = useCallback((file: File, createdBy: CreateByType) => {
        setFile(file)
        setErrors(null)
        setCreatedBy(createdBy)
        setLoading(true)
    }, [])

    useEffect(() => {
        if (isLoading && file) {
            refStorage
                .child(file.name)
                .put(file)
                .on(
                    'state_changed',
                    (snap) => {
                        let percentage: number =
                            (snap.bytesTransferred / snap.totalBytes) * 100
                        setProgress(percentage)
                        console.log(percentage)
                    },
                    (error) => {
                        setLoading(false)
                        setProgress(0)
                        setErrors(error.message as string)
                    },
                    async () => {
                        console.log('тута')
                        const url = await refStorage
                            .child(file.name)
                            .getDownloadURL()
                        console.log(url)
                        const value = {
                            image: url,
                            createdBy: createdBy,
                        }
                        console.log(value)
                        await refFirebase
                            .push(value)
                            .then(() => {
                                setLoading(false)
                                setProgress(0)
                            })
                            .catch((error) => {
                                setLoading(false)
                                setProgress(0)
                                setErrors(error.message as string)
                            })
                    }
                )
        }
    }, [isLoading, file])

    return { isLoading, progress, errors, uploadFile }
}

export default useStorage
