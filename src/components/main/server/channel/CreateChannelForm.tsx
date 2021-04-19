import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { useFormik } from 'formik'
import { validationChannel } from './some/validation'
import { ChannelForm } from '../../../../interfaces/channel'
import { makeStyles } from '@material-ui/core/styles'
import { ButtonGroup, Container } from '@material-ui/core'

import CloseIcon from '@material-ui/icons/Close'
import AddIcon from '@material-ui/icons/Add'
import useCreate from '../../../../hooks/useCreate'
import { useSelector } from 'react-redux'
import { Store } from '../../../../interfaces/store'
import { IUser } from '../../../../interfaces/user'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: '300px',
        padding: 50,
        borderRadius: 20,
        backgroundColor: '#292b2f',
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
        height: '100vh',
    },
    form: {
        width: '70%',
        padding: 30,
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#292b2f',
    },
    error: {
        marginTop: '25px',
        color: '#f44336',
    },
}))

interface Props {
    setOpenAdd: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateChannelForm: React.FC<Props> = ({ setOpenAdd }) => {
    const classes = useStyles()
    const { isLoading, create } = useCreate()
    const user = useSelector<Store, IUser | null>(
        (state) => state.user.currentUser
    )
    const createChannel = (values: ChannelForm) => {
        if (user) {
            Promise.resolve(
                create({
                    ...values,
                    createdBy: {
                        date: Date.now(),
                        avatar: user.photoURL ? user.photoURL : 'name',
                        name: user.displayName ? user.displayName : 'image',
                    },
                })
            ).then(() => {
                if (!isLoading) setOpenAdd(false)
            })
        }
    }

    const formik = useFormik({
        initialValues: {
            channelName: '',
            channelDetails: '',
        },
        validationSchema: validationChannel,
        onSubmit: (values: ChannelForm) => {
            createChannel(values)
        },
    })

    const handleClick = () => {
        setOpenAdd(false)
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
                        onSubmit={formik.handleSubmit}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    value={formik.values.channelName}
                                    onChange={formik.handleChange}
                                    name="channelName"
                                    variant="outlined"
                                    type="text"
                                    required
                                    fullWidth
                                    label="Name of Channel"
                                    error={
                                        formik.touched.channelName &&
                                        Boolean(formik.errors.channelName)
                                    }
                                    helperText={
                                        formik.touched.channelName &&
                                        formik.errors.channelName
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    value={formik.values.channelDetails}
                                    onChange={formik.handleChange}
                                    name="channelDetails"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Details of Channel"
                                    type="text"
                                    error={
                                        formik.touched.channelDetails &&
                                        Boolean(formik.errors.channelDetails)
                                    }
                                    helperText={
                                        formik.touched.channelDetails &&
                                        formik.errors.channelDetails
                                    }
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
                                // disabled={isLoading}\
                                disabled={isLoading}
                                fullWidth
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                startIcon={<AddIcon />}
                            >
                                Add
                            </Button>
                        </ButtonGroup>
                    </form>
                    {/*{errors && (*/}
                    {/*    <Typography className={classes.error} variant={'body1'}>*/}
                    {/*        {errors}*/}
                    {/*    </Typography>*/}
                    {/*)}*/}
                </div>
            </Container>
        </div>
    )
}

export default CreateChannelForm
