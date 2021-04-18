import * as yup from 'yup'

const validationChannel = yup.object({
    channelName: yup
        .string()
        .min(8, 'Name of Channel should be of minimum 6 characters length')
        .required('Name of Channel is required'),
    channelDetails: yup
        .string()
        .min(10, 'Details of Channel should be of minimum 10 characters length')
        .required('Details of Channel is required'),
})

export { validationChannel }
