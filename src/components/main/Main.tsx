import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ServerPanel from './ServerPanel/ServerPanel'
import MainPanel from './MainPanel/MainPanel'

const useStyle = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },

    serverPanel: {
        backgroundColor: '#202225',
    },

    server: {
        backgroundColor: '#36393f',
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
                <MainPanel />
            </Grid>
        </Grid>
    )
}

export default Main
