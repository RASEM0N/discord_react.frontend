import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import UserMenu from './UserMenu'
import ChannelItem from './ChannelItem'

const ChannelPanel = () => {
    return (
        <Grid
            container
            direction="column"
            style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <Grid item>
                <ChannelItem />
            </Grid>
            <Grid item>
                <UserMenu />
            </Grid>
        </Grid>
    )
}

export default ChannelPanel
