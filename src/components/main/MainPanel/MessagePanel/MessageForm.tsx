import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import { validationMessage } from './utils/validation'
import { useSelector } from 'react-redux'
import { Button, Divider, TextField, IconButton } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'

import { ChannelTypeForState } from '../../../../store/channel-reducer'
import { RootStateType } from '../../../../store/store'
import { UserType } from '../../../../store/user-reducer'
import { MessageFormType } from '../../../../type/form'
import useAddToDatabase from '../../../../hooks/useAddToDatabase'
import { messageRef } from '../../../../firebase/config'
import { MessageRequestType } from '../../../../type/request'

const useStyle = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        width: 'auto%',
        bottom: 10,
        right: 20,
        left: 20,
    },
    form: {
        color: 'white',
        borderRadius: 16,
        padding: '5px 15px',
        display: 'flex',
        alignItems: 'center',

        '& button, & input': {
            color: '#b9bbbe',
        },
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
        marginRight: 15,
    },
    button: {
        border: '1px solid #36393f',
        borderRadius: '0',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
}))

type PropsType = {
    currentChannel: ChannelTypeForState
}

const MessageForm: React.FC<PropsType> = ({ currentChannel }) => {
    const { isLoading, create } = useAddToDatabase<MessageRequestType>(
        messageRef.child(currentChannel.channelId)
    )
    const styles = useStyle()
    const user = useSelector<RootStateType, UserType | null>(
        (state) => state.user.currentUser
    )

    const formik = useFormik<MessageFormType>({
        initialValues: {
            message: '',
        },
        validationSchema: validationMessage,
        onSubmit: (values) => {
            if (user) {
                create({
                    content: values.message,
                    createdBy: {
                        id: user.uid,
                        avatar: user.photoURL ? user.photoURL : 'name',
                        name: user.displayName ? user.displayName : 'image',
                        date: Date.now(),
                    },
                })
            }
        },
    })

    return (
        <div className={styles.root}>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <IconButton className={styles.iconButton} aria-label="menu">
                    <AddCircleIcon
                        style={{
                            color: 'white',
                        }}
                    />
                </IconButton>
                <TextField
                    className={styles.input}
                    placeholder="MessageItem ..."
                    required
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.message && Boolean(formik.errors.message)
                    }
                    helperText={formik.touched.message && formik.errors.message}
                />
                <IconButton color="primary" className={styles.iconButton}>
                    <EmojiEmotionsIcon />
                </IconButton>
                <Divider className={styles.divider} orientation="vertical" />

                <Button
                    variant={'outlined'}
                    className={styles.button}
                    type={'submit'}
                    disabled={isLoading}
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default MessageForm
