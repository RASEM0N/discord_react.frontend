import * as yup from 'yup'

const validationChannel = yup.object({
    channelName: yup
        .string()
        .min(8, 'Name of ChannelItem should be of minimum 6 characters length')
        .required('Name of ChannelItem is required'),
    channelDetails: yup
        .string()
        .min(
            10,
            'Details of ChannelItem should be of minimum 10 characters length'
        )
        .required('Details of ChannelItem is required'),
})

export { validationChannel }
