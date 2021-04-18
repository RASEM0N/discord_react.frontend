import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import User from './User'
import Channel from './Channel'

const ChannelPanel = () => {
    return (
        <Grid container direction="column">
            <Grid item>
                <User />
            </Grid>
            <Grid item>
                <Channel />
            </Grid>
        </Grid>
    )
}

export default ChannelPanel
