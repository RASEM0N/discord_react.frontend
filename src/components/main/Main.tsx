import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ServerPanel from './server-panel/ServerPanel'
import Server from './server/Server'

const useStyle = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },

    serverPanel: {
        backgroundColor: '#20252a',
    },

    server: {
        // backgroundColor: '#CDCDCD',
    },
}))

function Main() {
    const styles = useStyle()

    return (
        <Grid container spacing={0} className={styles.root}>
            <Grid item xs={1} className={styles.serverPanel}>
                <ServerPanel />
            </Grid>
            <Grid item xs={11} className={styles.server}>
                <Server />
            </Grid>
        </Grid>
    )
}

export default Main
