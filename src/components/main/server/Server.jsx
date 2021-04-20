import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Channel from './channel/ChannelPanel'
import MessagesPanel from './messages/MessagesPanel'
import InfoPanel from './info/InfoPanel'
import { AppBar } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },

    channel: {
        backgroundColor: '#2f3136',
    },

    messages: {
        backgroundColor: '#36393f',
    },

    info: {
        backgroundColor: '#2f3136',
    },
}))

const Server = () => {
    const styles = useStyle()

    return (
        <>
            <Grid container spacing={0} className={styles.root}>
                <Grid item xs={3} lg={2} className={styles.channel}>
                    <Channel />
                </Grid>

                <Grid item xs={7} lg={8} className={styles.messages}>
                    <MessagesPanel />
                </Grid>
                <Grid item xs={2} lg={2} className={styles.info}>
                    <InfoPanel />
                </Grid>
            </Grid>
        </>
    )
}

export default Server
