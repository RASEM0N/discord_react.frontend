import * as yup from 'yup'

const validationChannel = yup.object({
    channelName: yup
        .string()
        .min(8, 'Name of ChannelList should be of minimum 6 characters length')
        .required('Name of ChannelList is required'),
    channelDetails: yup
        .string()
        .min(
            10,
            'Details of ChannelList should be of minimum 10 characters length'
        )
        .required('Details of ChannelList is required'),
})

export { validationChannel }
