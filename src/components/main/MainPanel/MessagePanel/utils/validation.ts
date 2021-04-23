import * as yup from 'yup'

const validationMessage = yup.object({
    message: yup
        .string()
        .min(6, 'MessageItem should be of minimum 6 characters length')
        .required('MessageItem is required'),
})

export { validationMessage }
