import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ChannelPanel from './channel-panel/ChannelPanel'
import MessagePanel from './messages-panel/MessagePanel'
import InfoPanel from './info-panel/InfoPanel'
import { AppBar } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },

    channel: {
        backgroundColor: '#CDCDCD',
    },

    messages: {
        border: '3px solid white',
    },

    info: {
        border: '3px solid white',
    },
}))

const Server = () => {
    const styles = useStyle()

    return (
        <>
            <Grid container spacing={0} className={styles.root}>
                <Grid item xs={3} className={styles.channel}>
                    <ChannelPanel />
                </Grid>

                {/*<Grid item xs={7} className={styles.messages}>
                    <MessagePanel />
                </Grid>
                <Grid item xs={2} className={styles.info}>
                    <InfoPanel />
                </Grid>*/}
            </Grid>
        </>
    )
}

export default Server
