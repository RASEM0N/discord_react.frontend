import React from 'react'
import { Grid } from '@material-ui/core'
import UserMenu from './UserMenu'
import ChannelList from './ChannelList'

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
                <ChannelList />
            </Grid>
            <Grid item>
                <UserMenu />
            </Grid>
        </Grid>
    )
}

export default ChannelPanel
