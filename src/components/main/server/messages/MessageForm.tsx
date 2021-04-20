import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import { Message } from '../../../../interfaces/message'
import { validationMessage } from './some/validation'

import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

const useStyle = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        width: 'auto%',
        bottom: 10,
        right: 20,
        left: 20,
    },
    form: {
        backgroundColor: '#40444b',
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

const MessageForm = () => {
    const styles = useStyle()

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        validationSchema: validationMessage,
        onSubmit: (values: Message) => {
            console.log(values)
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
                    placeholder="Message ..."
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
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default MessageForm
