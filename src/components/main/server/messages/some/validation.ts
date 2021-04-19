import * as yup from 'yup'

const validationMessage = yup.object({
    message: yup
        .string()
        .min(6, 'Message should be of minimum 6 characters length')
        .required('Message is required'),
})

export { validationMessage }
