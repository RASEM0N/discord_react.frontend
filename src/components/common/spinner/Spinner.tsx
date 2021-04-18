import { LinearProgress, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '40vh auto',
        width: '100vh',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}))

const Spinner = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <LinearProgress />
            <LinearProgress color={'secondary'} />
        </div>
    )
}

export default Spinner
