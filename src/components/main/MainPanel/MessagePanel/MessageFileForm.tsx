import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
import { ButtonGroup, Container, Input } from '@material-ui/core'

import CloseIcon from '@material-ui/icons/Close'
import AddIcon from '@material-ui/icons/Add'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../../../store/store'
import { UserType } from '../../../../store/user-reducer'
import { imageStorageRef, messageRef } from '../../../../firebase/config'
import { ChannelTypeForState } from '../../../../store/channel-reducer'
import useStorage from '../../../../hooks/useStorage'

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#292b2f',
    },
    error: {
        marginTop: '25px',
        color: '#f44336',
    },
    paper: {
        marginTop: '50%',
        transform: 'translateY(-100%)',
        padding: 50,
        borderRadius: 20,
        backgroundImage: 'url(https://artfiles.alphacoders.com/117/117686.jpg)',
        backgroundSize: 'cover',
        color: '#292b2f',
        margin: theme.spacing(8, 8),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    root: {
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(22,24,29,0.69);',
        position: 'fixed',
        zIndex: 100,
        height: '100vh',
    },
    form: {
        width: '70%',
        padding: 30,
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop: theme.spacing(3),
    },
}))

interface PropsType {
    setOpenFile: React.Dispatch<React.SetStateAction<boolean>>
    currentChannel: ChannelTypeForState
}

const MessageFileForm: React.FC<PropsType> = ({
    setOpenFile,
    currentChannel,
}) => {
    const classes = useStyles()
    const [error, setError] = useState<string | null>(null)
    const formats = ['image/png', 'image/jpeg']
    const [file, setFile] = useState<File | null>(null)
    const user = useSelector<RootStateType, UserType | null>(
        (state) => state.user.currentUser
    )
    const { progress, uploadFile, isLoading } = useStorage(
        imageStorageRef,
        messageRef.child(currentChannel.channelId)
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let selected: File | undefined = e.target.files?.[0]
        if (selected && formats.includes(selected.type)) {
            setFile(selected)
            setError(null)
        } else {
            setFile(null)
            setError('Unsupported format')
        }
    }

    const handleSubmit = () => {
        if (user && file) {
            Promise.resolve(
                uploadFile(file, {
                    date: Date.now(),
                    avatar: user.photoURL ? user.photoURL : 'name',
                    name: user.displayName ? user.displayName : 'image',
                    id: user.uid,
                })
            ).then(() => {
                if (!isLoading) setOpenFile(false)
            })
        }
    }

    const handleClick = () => {
        setOpenFile(false)
    }

    return (
        <div className={classes.root}>
            <Container
                style={{
                    overflow: 'hidden',
                }}
            >
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Create channel
                    </Typography>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Input
                                    name="channelName"
                                    onChange={handleChange}
                                    type="file"
                                    required
                                    fullWidth
                                    error={!!error}
                                />
                            </Grid>
                        </Grid>
                        <ButtonGroup fullWidth>
                            <Button
                                onClick={handleClick}
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                startIcon={<CloseIcon />}
                            >
                                Cancel
                            </Button>
                            <Button
                                disabled={isLoading}
                                fullWidth
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                startIcon={<AddIcon />}
                            >
                                Upload
                            </Button>
                        </ButtonGroup>
                        {error && (
                            <Typography color={'secondary'}>{error}</Typography>
                        )}
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default MessageFileForm
